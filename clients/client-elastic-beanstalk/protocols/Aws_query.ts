import {
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput
} from "../commands/AbortEnvironmentUpdateCommand";
import {
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput
} from "../commands/ApplyEnvironmentManagedActionCommand";
import {
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput
} from "../commands/CheckDNSAvailabilityCommand";
import {
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput
} from "../commands/ComposeEnvironmentsCommand";
import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput
} from "../commands/CreateApplicationVersionCommand";
import {
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput
} from "../commands/CreateConfigurationTemplateCommand";
import {
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput
} from "../commands/CreateEnvironmentCommand";
import {
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput
} from "../commands/CreatePlatformVersionCommand";
import {
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput
} from "../commands/CreateStorageLocationCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput
} from "../commands/DeleteApplicationVersionCommand";
import {
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput
} from "../commands/DeleteConfigurationTemplateCommand";
import {
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput
} from "../commands/DeleteEnvironmentConfigurationCommand";
import {
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput
} from "../commands/DeletePlatformVersionCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput
} from "../commands/DescribeApplicationVersionsCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput
} from "../commands/DescribeApplicationsCommand";
import {
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput
} from "../commands/DescribeConfigurationOptionsCommand";
import {
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput
} from "../commands/DescribeConfigurationSettingsCommand";
import {
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput
} from "../commands/DescribeEnvironmentHealthCommand";
import {
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput
} from "../commands/DescribeEnvironmentManagedActionHistoryCommand";
import {
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput
} from "../commands/DescribeEnvironmentManagedActionsCommand";
import {
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput
} from "../commands/DescribeEnvironmentResourcesCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput
} from "../commands/DescribeEnvironmentsCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "../commands/DescribeEventsCommand";
import {
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput
} from "../commands/DescribeInstancesHealthCommand";
import {
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput
} from "../commands/DescribePlatformVersionCommand";
import {
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput
} from "../commands/ListAvailableSolutionStacksCommand";
import {
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput
} from "../commands/ListPlatformVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  RebuildEnvironmentCommandInput,
  RebuildEnvironmentCommandOutput
} from "../commands/RebuildEnvironmentCommand";
import {
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput
} from "../commands/RequestEnvironmentInfoCommand";
import {
  RestartAppServerCommandInput,
  RestartAppServerCommandOutput
} from "../commands/RestartAppServerCommand";
import {
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput
} from "../commands/RetrieveEnvironmentInfoCommand";
import {
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput
} from "../commands/SwapEnvironmentCNAMEsCommand";
import {
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput
} from "../commands/TerminateEnvironmentCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
import {
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput
} from "../commands/UpdateApplicationResourceLifecycleCommand";
import {
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput
} from "../commands/UpdateApplicationVersionCommand";
import {
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput
} from "../commands/UpdateConfigurationTemplateCommand";
import {
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput
} from "../commands/UpdateEnvironmentCommand";
import {
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput
} from "../commands/UpdateTagsForResourceCommand";
import {
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput
} from "../commands/ValidateConfigurationSettingsCommand";
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
  AutoScalingGroup,
  BuildConfiguration,
  Builder,
  CPUUtilization,
  CheckDNSAvailabilityMessage,
  CheckDNSAvailabilityResultMessage,
  CodeBuildNotInServiceRegionException,
  ComposeEnvironmentsMessage,
  ConfigurationOptionDescription,
  ConfigurationOptionSetting,
  ConfigurationOptionsDescription,
  ConfigurationSettingsDescription,
  ConfigurationSettingsDescriptions,
  ConfigurationSettingsValidationMessages,
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
  DescribeApplicationVersionsMessage,
  DescribeApplicationsMessage,
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
  ListPlatformVersionsRequest,
  ListPlatformVersionsResult,
  ListTagsForResourceMessage,
  Listener,
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
  TooManyApplicationVersionsException,
  TooManyApplicationsException,
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
  ValidationMessage
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export async function serializeAws_queryAbortEnvironmentUpdateCommand(
  input: AbortEnvironmentUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAbortEnvironmentUpdateMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AbortEnvironmentUpdate",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryApplyEnvironmentManagedActionCommand(
  input: ApplyEnvironmentManagedActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryApplyEnvironmentManagedActionRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ApplyEnvironmentManagedAction",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCheckDNSAvailabilityCommand(
  input: CheckDNSAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCheckDNSAvailabilityMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CheckDNSAvailability",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryComposeEnvironmentsCommand(
  input: ComposeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryComposeEnvironmentsMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ComposeEnvironments",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateApplicationMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateApplication",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateApplicationVersionCommand(
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateApplicationVersionMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateApplicationVersion",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateConfigurationTemplateCommand(
  input: CreateConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateConfigurationTemplateMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateConfigurationTemplate",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateEnvironmentCommand(
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateEnvironmentMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateEnvironment",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreatePlatformVersionCommand(
  input: CreatePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreatePlatformVersionRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreatePlatformVersion",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateStorageLocationCommand(
  input: CreateStorageLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "CreateStorageLocation",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteApplicationMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteApplication",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteApplicationVersionCommand(
  input: DeleteApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteApplicationVersionMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteApplicationVersion",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteConfigurationTemplateCommand(
  input: DeleteConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteConfigurationTemplateMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteConfigurationTemplate",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteEnvironmentConfigurationCommand(
  input: DeleteEnvironmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteEnvironmentConfigurationMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteEnvironmentConfiguration",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeletePlatformVersionCommand(
  input: DeletePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeletePlatformVersionRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeletePlatformVersion",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeAccountAttributesCommand(
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "DescribeAccountAttributes",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeApplicationVersionsCommand(
  input: DescribeApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeApplicationVersionsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeApplicationVersions",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeApplicationsCommand(
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeApplicationsMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeApplications",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeConfigurationOptionsCommand(
  input: DescribeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeConfigurationOptionsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeConfigurationOptions",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeConfigurationSettingsCommand(
  input: DescribeConfigurationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeConfigurationSettingsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeConfigurationSettings",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEnvironmentHealthCommand(
  input: DescribeEnvironmentHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEnvironmentHealthRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEnvironmentHealth",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEnvironmentManagedActionHistory",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEnvironmentManagedActionsCommand(
  input: DescribeEnvironmentManagedActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEnvironmentManagedActionsRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEnvironmentManagedActions",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEnvironmentResourcesCommand(
  input: DescribeEnvironmentResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEnvironmentResourcesMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEnvironmentResources",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEnvironmentsCommand(
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEnvironmentsMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEnvironments",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeEventsCommand(
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeEventsMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeEvents",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeInstancesHealthCommand(
  input: DescribeInstancesHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeInstancesHealthRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeInstancesHealth",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribePlatformVersionCommand(
  input: DescribePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribePlatformVersionRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribePlatformVersion",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListAvailableSolutionStacksCommand(
  input: ListAvailableSolutionStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "ListAvailableSolutionStacks",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListPlatformVersionsCommand(
  input: ListPlatformVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListPlatformVersionsRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListPlatformVersions",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryListTagsForResourceMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ListTagsForResource",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRebuildEnvironmentCommand(
  input: RebuildEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRebuildEnvironmentMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RebuildEnvironment",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRequestEnvironmentInfoCommand(
  input: RequestEnvironmentInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRequestEnvironmentInfoMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RequestEnvironmentInfo",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRestartAppServerCommand(
  input: RestartAppServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRestartAppServerMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RestartAppServer",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRetrieveEnvironmentInfoCommand(
  input: RetrieveEnvironmentInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRetrieveEnvironmentInfoMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RetrieveEnvironmentInfo",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySwapEnvironmentCNAMEsCommand(
  input: SwapEnvironmentCNAMEsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySwapEnvironmentCNAMEsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SwapEnvironmentCNAMEs",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryTerminateEnvironmentCommand(
  input: TerminateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryTerminateEnvironmentMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "TerminateEnvironment",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateApplicationMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateApplication",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateApplicationResourceLifecycleCommand(
  input: UpdateApplicationResourceLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateApplicationResourceLifecycleMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateApplicationResourceLifecycle",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateApplicationVersionCommand(
  input: UpdateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateApplicationVersionMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateApplicationVersion",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateConfigurationTemplateCommand(
  input: UpdateConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateConfigurationTemplateMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateConfigurationTemplate",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateEnvironmentCommand(
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateEnvironmentMessage(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateEnvironment",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryUpdateTagsForResourceCommand(
  input: UpdateTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryUpdateTagsForResourceMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "UpdateTagsForResource",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryValidateConfigurationSettingsCommand(
  input: ValidateConfigurationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryValidateConfigurationSettingsMessage(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ValidateConfigurationSettings",
    Version: "2010-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_queryAbortEnvironmentUpdateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortEnvironmentUpdateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAbortEnvironmentUpdateCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: AbortEnvironmentUpdateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAbortEnvironmentUpdateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortEnvironmentUpdateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryApplyEnvironmentManagedActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyEnvironmentManagedActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryApplyEnvironmentManagedActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplyEnvironmentManagedActionResult(
    data.ApplyEnvironmentManagedActionResult,
    context
  );
  const response: ApplyEnvironmentManagedActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplyEnvironmentManagedActionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryApplyEnvironmentManagedActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyEnvironmentManagedActionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedActionInvalidStateException":
    case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException":
      response = {
        ...(await deserializeAws_queryManagedActionInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCheckDNSAvailabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCheckDNSAvailabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCheckDNSAvailabilityResultMessage(
    data.CheckDNSAvailabilityResult,
    context
  );
  const response: CheckDNSAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CheckDNSAvailabilityResultMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCheckDNSAvailabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryComposeEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ComposeEnvironmentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryComposeEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescriptionsMessage(
    data.ComposeEnvironmentsResult,
    context
  );
  const response: ComposeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnvironmentDescriptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryComposeEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ComposeEnvironmentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      response = {
        ...(await deserializeAws_queryTooManyEnvironmentsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationDescriptionMessage(
    data.CreateApplicationResult,
    context
  );
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationDescriptionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyApplicationsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
      response = {
        ...(await deserializeAws_queryTooManyApplicationsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateApplicationVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateApplicationVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationVersionDescriptionMessage(
    data.CreateApplicationVersionResult,
    context
  );
  const response: CreateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationVersionDescriptionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateApplicationVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeBuildNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException":
      response = {
        ...(await deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      response = {
        ...(await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyApplicationVersionsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException":
      response = {
        ...(await deserializeAws_queryTooManyApplicationVersionsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyApplicationsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
      response = {
        ...(await deserializeAws_queryTooManyApplicationsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateConfigurationTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateConfigurationTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsDescription(
    data.CreateConfigurationTemplateResult,
    context
  );
  const response: CreateConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationSettingsDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateConfigurationTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyConfigurationTemplatesException":
    case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException":
      response = {
        ...(await deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescription(
    data.CreateEnvironmentResult,
    context
  );
  const response: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnvironmentDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      response = {
        ...(await deserializeAws_queryTooManyEnvironmentsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreatePlatformVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreatePlatformVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreatePlatformVersionResult(
    data.CreatePlatformVersionResult,
    context
  );
  const response: CreatePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePlatformVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreatePlatformVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyPlatformsException":
    case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException":
      response = {
        ...(await deserializeAws_queryTooManyPlatformsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateStorageLocationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLocationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateStorageLocationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStorageLocationResultMessage(
    data.CreateStorageLocationResult,
    context
  );
  const response: CreateStorageLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStorageLocationResultMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateStorageLocationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLocationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "S3SubscriptionRequiredException":
    case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException":
      response = {
        ...(await deserializeAws_queryS3SubscriptionRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressException":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteApplicationVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteApplicationVersionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteApplicationVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      response = {
        ...(await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SourceBundleDeletionException":
    case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException":
      response = {
        ...(await deserializeAws_querySourceBundleDeletionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteConfigurationTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteConfigurationTemplateCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteConfigurationTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressException":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteEnvironmentConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteEnvironmentConfigurationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteEnvironmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteEnvironmentConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeletePlatformVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeletePlatformVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeletePlatformVersionResult(
    data.DeletePlatformVersionResult,
    context
  );
  const response: DeletePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePlatformVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeletePlatformVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformVersionStillReferencedException":
    case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException":
      response = {
        ...(await deserializeAws_queryPlatformVersionStillReferencedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeAccountAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAccountAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountAttributesResult(
    data.DescribeAccountAttributesResult,
    context
  );
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountAttributesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeAccountAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeApplicationVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeApplicationVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationVersionDescriptionsMessage(
    data.DescribeApplicationVersionsResult,
    context
  );
  const response: DescribeApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationVersionDescriptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeApplicationVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeApplicationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationDescriptionsMessage(
    data.DescribeApplicationsResult,
    context
  );
  const response: DescribeApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationDescriptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeConfigurationOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationOptionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeConfigurationOptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationOptionsDescription(
    data.DescribeConfigurationOptionsResult,
    context
  );
  const response: DescribeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationOptionsDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeConfigurationOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationOptionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeConfigurationSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeConfigurationSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsDescriptions(
    data.DescribeConfigurationSettingsResult,
    context
  );
  const response: DescribeConfigurationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationSettingsDescriptions",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeConfigurationSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEnvironmentHealthCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentHealthCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEnvironmentHealthCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEnvironmentHealthResult(
    data.DescribeEnvironmentHealthResult,
    context
  );
  const response: DescribeEnvironmentHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEnvironmentHealthResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEnvironmentHealthCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentHealthCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      response = {
        ...(await deserializeAws_queryInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult(
    data.DescribeEnvironmentManagedActionHistoryResult,
    context
  );
  const response: DescribeEnvironmentManagedActionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEnvironmentManagedActionHistoryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEnvironmentManagedActionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEnvironmentManagedActionsResult(
    data.DescribeEnvironmentManagedActionsResult,
    context
  );
  const response: DescribeEnvironmentManagedActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEnvironmentManagedActionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEnvironmentResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEnvironmentResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentResourceDescriptionsMessage(
    data.DescribeEnvironmentResourcesResult,
    context
  );
  const response: DescribeEnvironmentResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnvironmentResourceDescriptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEnvironmentResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentResourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEnvironmentsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescriptionsMessage(
    data.DescribeEnvironmentsResult,
    context
  );
  const response: DescribeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnvironmentDescriptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventDescriptionsMessage(
    data.DescribeEventsResult,
    context
  );
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventDescriptionsMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeInstancesHealthCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesHealthCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeInstancesHealthCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeInstancesHealthResult(
    data.DescribeInstancesHealthResult,
    context
  );
  const response: DescribeInstancesHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInstancesHealthResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeInstancesHealthCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesHealthCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      response = {
        ...(await deserializeAws_queryInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribePlatformVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlatformVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribePlatformVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribePlatformVersionResult(
    data.DescribePlatformVersionResult,
    context
  );
  const response: DescribePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePlatformVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribePlatformVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlatformVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListAvailableSolutionStacksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAvailableSolutionStacksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAvailableSolutionStacksResultMessage(
    data.ListAvailableSolutionStacksResult,
    context
  );
  const response: ListAvailableSolutionStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAvailableSolutionStacksResultMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListAvailableSolutionStacksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListPlatformVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformVersionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListPlatformVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPlatformVersionsResult(
    data.ListPlatformVersionsResult,
    context
  );
  const response: ListPlatformVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPlatformVersionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListPlatformVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformVersionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      response = {
        ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResourceTagsDescriptionMessage(
    data.ListTagsForResourceResult,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResourceTagsDescriptionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
      response = {
        ...(await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRebuildEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildEnvironmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRebuildEnvironmentCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebuildEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRebuildEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildEnvironmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRequestEnvironmentInfoCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRequestEnvironmentInfoCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RequestEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRequestEnvironmentInfoCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRestartAppServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRestartAppServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RestartAppServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRestartAppServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRetrieveEnvironmentInfoCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRetrieveEnvironmentInfoCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRetrieveEnvironmentInfoResultMessage(
    data.RetrieveEnvironmentInfoResult,
    context
  );
  const response: RetrieveEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RetrieveEnvironmentInfoResultMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRetrieveEnvironmentInfoCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySwapEnvironmentCNAMEsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySwapEnvironmentCNAMEsCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SwapEnvironmentCNAMEsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySwapEnvironmentCNAMEsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryTerminateEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateEnvironmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryTerminateEnvironmentCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescription(
    data.TerminateEnvironmentResult,
    context
  );
  const response: TerminateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnvironmentDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryTerminateEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateEnvironmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationDescriptionMessage(
    data.UpdateApplicationResult,
    context
  );
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationDescriptionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateApplicationResourceLifecycleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationResourceLifecycleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationResourceLifecycleDescriptionMessage(
    data.UpdateApplicationResourceLifecycleResult,
    context
  );
  const response: UpdateApplicationResourceLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationResourceLifecycleDescriptionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationResourceLifecycleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateApplicationVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateApplicationVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationVersionDescriptionMessage(
    data.UpdateApplicationVersionResult,
    context
  );
  const response: UpdateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplicationVersionDescriptionMessage",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateApplicationVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateConfigurationTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateConfigurationTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsDescription(
    data.UpdateConfigurationTemplateResult,
    context
  );
  const response: UpdateConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationSettingsDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateConfigurationTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescription(
    data.UpdateEnvironmentResult,
    context
  );
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnvironmentDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryUpdateTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateTagsForResourceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryUpdateTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
      response = {
        ...(await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticbeanstalk#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryValidateConfigurationSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryValidateConfigurationSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsValidationMessages(
    data.ValidateConfigurationSettingsResult,
    context
  );
  const response: ValidateConfigurationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationSettingsValidationMessages",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryValidateConfigurationSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      response = {
        ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      response = {
        ...(await deserializeAws_queryTooManyBucketsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeBuildNotInServiceRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCodeBuildNotInServiceRegionException(
    body.Error,
    context
  );
  const contents: CodeBuildNotInServiceRegionException = {
    name: "CodeBuildNotInServiceRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryElasticBeanstalkServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ElasticBeanstalkServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryElasticBeanstalkServiceException(
    body.Error,
    context
  );
  const contents: ElasticBeanstalkServiceException = {
    name: "ElasticBeanstalkServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInsufficientPrivilegesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPrivilegesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientPrivilegesException(
    body.Error,
    context
  );
  const contents: InsufficientPrivilegesException = {
    name: "InsufficientPrivilegesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRequestException(
    body.Error,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryManagedActionInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedActionInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryManagedActionInvalidStateException(
    body.Error,
    context
  );
  const contents: ManagedActionInvalidStateException = {
    name: "ManagedActionInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationInProgressException(
    body.Error,
    context
  );
  const contents: OperationInProgressException = {
    name: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryPlatformVersionStillReferencedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformVersionStillReferencedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPlatformVersionStillReferencedException(
    body.Error,
    context
  );
  const contents: PlatformVersionStillReferencedException = {
    name: "PlatformVersionStillReferencedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(
    body.Error,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceTypeNotSupportedException(
    body.Error,
    context
  );
  const contents: ResourceTypeNotSupportedException = {
    name: "ResourceTypeNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3LocationNotInServiceRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryS3LocationNotInServiceRegionException(
    body.Error,
    context
  );
  const contents: S3LocationNotInServiceRegionException = {
    name: "S3LocationNotInServiceRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryS3SubscriptionRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3SubscriptionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryS3SubscriptionRequiredException(
    body.Error,
    context
  );
  const contents: S3SubscriptionRequiredException = {
    name: "S3SubscriptionRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySourceBundleDeletionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceBundleDeletionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySourceBundleDeletionException(
    body.Error,
    context
  );
  const contents: SourceBundleDeletionException = {
    name: "SourceBundleDeletionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyApplicationVersionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyApplicationVersionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyApplicationVersionsException(
    body.Error,
    context
  );
  const contents: TooManyApplicationVersionsException = {
    name: "TooManyApplicationVersionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyApplicationsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyApplicationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyApplicationsException(
    body.Error,
    context
  );
  const contents: TooManyApplicationsException = {
    name: "TooManyApplicationsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyBucketsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyBucketsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyBucketsException(
    body.Error,
    context
  );
  const contents: TooManyBucketsException = {
    name: "TooManyBucketsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyConfigurationTemplatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyConfigurationTemplatesException(
    body.Error,
    context
  );
  const contents: TooManyConfigurationTemplatesException = {
    name: "TooManyConfigurationTemplatesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyEnvironmentsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEnvironmentsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyEnvironmentsException(
    body.Error,
    context
  );
  const contents: TooManyEnvironmentsException = {
    name: "TooManyEnvironmentsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyPlatformsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPlatformsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyPlatformsException(
    body.Error,
    context
  );
  const contents: TooManyPlatformsException = {
    name: "TooManyPlatformsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(
    body.Error,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAbortEnvironmentUpdateMessage = (
  input: AbortEnvironmentUpdateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryApplicationNamesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.ServiceRole !== undefined) {
    entries["ServiceRole"] = input.ServiceRole;
  }
  if (input.VersionLifecycleConfig !== undefined) {
    const memberEntries = serializeAws_queryApplicationVersionLifecycleConfig(
      input.VersionLifecycleConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `VersionLifecycleConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryApplicationVersionLifecycleConfig = (
  input: ApplicationVersionLifecycleConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxAgeRule !== undefined) {
    const memberEntries = serializeAws_queryMaxAgeRule(
      input.MaxAgeRule,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `MaxAgeRule.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.MaxCountRule !== undefined) {
    const memberEntries = serializeAws_queryMaxCountRule(
      input.MaxCountRule,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `MaxCountRule.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryApplyEnvironmentManagedActionRequest = (
  input: ApplyEnvironmentManagedActionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionId !== undefined) {
    entries["ActionId"] = input.ActionId;
  }
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryBuildConfiguration = (
  input: BuildConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ArtifactName !== undefined) {
    entries["ArtifactName"] = input.ArtifactName;
  }
  if (input.CodeBuildServiceRole !== undefined) {
    entries["CodeBuildServiceRole"] = input.CodeBuildServiceRole;
  }
  if (input.ComputeType !== undefined) {
    entries["ComputeType"] = input.ComputeType;
  }
  if (input.Image !== undefined) {
    entries["Image"] = input.Image;
  }
  if (input.TimeoutInMinutes !== undefined) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  return entries;
};

const serializeAws_queryCheckDNSAvailabilityMessage = (
  input: CheckDNSAvailabilityMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CNAMEPrefix !== undefined) {
    entries["CNAMEPrefix"] = input.CNAMEPrefix;
  }
  return entries;
};

const serializeAws_queryComposeEnvironmentsMessage = (
  input: ComposeEnvironmentsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.VersionLabels !== undefined) {
    const memberEntries = serializeAws_queryVersionLabels(
      input.VersionLabels,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `VersionLabels.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryConfigurationOptionSetting = (
  input: ConfigurationOptionSetting,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.OptionName !== undefined) {
    entries["OptionName"] = input.OptionName;
  }
  if (input.ResourceName !== undefined) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryConfigurationOptionSettingsList = (
  input: Array<ConfigurationOptionSetting>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryConfigurationOptionSetting(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCreateApplicationMessage = (
  input: CreateApplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.ResourceLifecycleConfig !== undefined) {
    const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(
      input.ResourceLifecycleConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceLifecycleConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryCreateApplicationVersionMessage = (
  input: CreateApplicationVersionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.AutoCreateApplication !== undefined) {
    entries["AutoCreateApplication"] = input.AutoCreateApplication;
  }
  if (input.BuildConfiguration !== undefined) {
    const memberEntries = serializeAws_queryBuildConfiguration(
      input.BuildConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `BuildConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.Process !== undefined) {
    entries["Process"] = input.Process;
  }
  if (input.SourceBuildInformation !== undefined) {
    const memberEntries = serializeAws_querySourceBuildInformation(
      input.SourceBuildInformation,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SourceBuildInformation.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SourceBundle !== undefined) {
    const memberEntries = serializeAws_queryS3Location(
      input.SourceBundle,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SourceBundle.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryCreateConfigurationTemplateMessage = (
  input: CreateConfigurationTemplateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.OptionSettings !== undefined) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(
      input.OptionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.SolutionStackName !== undefined) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.SourceConfiguration !== undefined) {
    const memberEntries = serializeAws_querySourceConfiguration(
      input.SourceConfiguration,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SourceConfiguration.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryCreateEnvironmentMessage = (
  input: CreateEnvironmentMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.CNAMEPrefix !== undefined) {
    entries["CNAMEPrefix"] = input.CNAMEPrefix;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.OptionSettings !== undefined) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(
      input.OptionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OptionsToRemove !== undefined) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(
      input.OptionsToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.SolutionStackName !== undefined) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.Tier !== undefined) {
    const memberEntries = serializeAws_queryEnvironmentTier(
      input.Tier,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tier.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryCreatePlatformVersionRequest = (
  input: CreatePlatformVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.OptionSettings !== undefined) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(
      input.OptionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PlatformDefinitionBundle !== undefined) {
    const memberEntries = serializeAws_queryS3Location(
      input.PlatformDefinitionBundle,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PlatformDefinitionBundle.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PlatformName !== undefined) {
    entries["PlatformName"] = input.PlatformName;
  }
  if (input.PlatformVersion !== undefined) {
    entries["PlatformVersion"] = input.PlatformVersion;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDeleteApplicationMessage = (
  input: DeleteApplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TerminateEnvByForce !== undefined) {
    entries["TerminateEnvByForce"] = input.TerminateEnvByForce;
  }
  return entries;
};

const serializeAws_queryDeleteApplicationVersionMessage = (
  input: DeleteApplicationVersionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.DeleteSourceBundle !== undefined) {
    entries["DeleteSourceBundle"] = input.DeleteSourceBundle;
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryDeleteConfigurationTemplateMessage = (
  input: DeleteConfigurationTemplateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryDeleteEnvironmentConfigurationMessage = (
  input: DeleteEnvironmentConfigurationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryDeletePlatformVersionRequest = (
  input: DeletePlatformVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  return entries;
};

const serializeAws_queryDescribeApplicationVersionsMessage = (
  input: DescribeApplicationVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.VersionLabels !== undefined) {
    const memberEntries = serializeAws_queryVersionLabelsList(
      input.VersionLabels,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `VersionLabels.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeApplicationsMessage = (
  input: DescribeApplicationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationNames !== undefined) {
    const memberEntries = serializeAws_queryApplicationNamesList(
      input.ApplicationNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ApplicationNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeConfigurationOptionsMessage = (
  input: DescribeConfigurationOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.Options !== undefined) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(
      input.Options,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Options.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.SolutionStackName !== undefined) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryDescribeConfigurationSettingsMessage = (
  input: DescribeConfigurationSettingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryDescribeEnvironmentHealthRequest = (
  input: DescribeEnvironmentHealthRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeNames !== undefined) {
    const memberEntries = serializeAws_queryEnvironmentHealthAttributes(
      input.AttributeNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AttributeNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest = (
  input: DescribeEnvironmentManagedActionHistoryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeEnvironmentManagedActionsRequest = (
  input: DescribeEnvironmentManagedActionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  return entries;
};

const serializeAws_queryDescribeEnvironmentResourcesMessage = (
  input: DescribeEnvironmentResourcesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryDescribeEnvironmentsMessage = (
  input: DescribeEnvironmentsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentIds !== undefined) {
    const memberEntries = serializeAws_queryEnvironmentIdList(
      input.EnvironmentIds,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `EnvironmentIds.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.EnvironmentNames !== undefined) {
    const memberEntries = serializeAws_queryEnvironmentNamesList(
      input.EnvironmentNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `EnvironmentNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.IncludeDeleted !== undefined) {
    entries["IncludeDeleted"] = input.IncludeDeleted;
  }
  if (input.IncludedDeletedBackTo !== undefined) {
    entries[
      "IncludedDeletedBackTo"
    ] = input.IncludedDeletedBackTo.toISOString();
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryDescribeEventsMessage = (
  input: DescribeEventsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString();
  }
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.RequestId !== undefined) {
    entries["RequestId"] = input.RequestId;
  }
  if (input.Severity !== undefined) {
    entries["Severity"] = input.Severity;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString();
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryDescribeInstancesHealthRequest = (
  input: DescribeInstancesHealthRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeNames !== undefined) {
    const memberEntries = serializeAws_queryInstancesHealthAttributes(
      input.AttributeNames,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AttributeNames.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribePlatformVersionRequest = (
  input: DescribePlatformVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  return entries;
};

const serializeAws_queryEnvironmentHealthAttributes = (
  input: Array<EnvironmentHealthAttribute | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryEnvironmentIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryEnvironmentNamesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryEnvironmentTier = (
  input: EnvironmentTier,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.Version !== undefined) {
    entries["Version"] = input.Version;
  }
  return entries;
};

const serializeAws_queryInstancesHealthAttributes = (
  input: Array<InstancesHealthAttribute | string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryListPlatformVersionsRequest = (
  input: ListPlatformVersionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryPlatformFilters(
      input.Filters,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Filters.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn !== undefined) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

const serializeAws_queryMaxAgeRule = (
  input: MaxAgeRule,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DeleteSourceFromS3 !== undefined) {
    entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
  }
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.MaxAgeInDays !== undefined) {
    entries["MaxAgeInDays"] = input.MaxAgeInDays;
  }
  return entries;
};

const serializeAws_queryMaxCountRule = (
  input: MaxCountRule,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DeleteSourceFromS3 !== undefined) {
    entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
  }
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.MaxCount !== undefined) {
    entries["MaxCount"] = input.MaxCount;
  }
  return entries;
};

const serializeAws_queryOptionSpecification = (
  input: OptionSpecification,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.OptionName !== undefined) {
    entries["OptionName"] = input.OptionName;
  }
  if (input.ResourceName !== undefined) {
    entries["ResourceName"] = input.ResourceName;
  }
  return entries;
};

const serializeAws_queryOptionsSpecifierList = (
  input: Array<OptionSpecification>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryOptionSpecification(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPlatformFilter = (
  input: PlatformFilter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Operator !== undefined) {
    entries["Operator"] = input.Operator;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryPlatformFilterValueList(
      input.Values,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryPlatformFilterValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPlatformFilters = (
  input: Array<PlatformFilter>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryPlatformFilter(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRebuildEnvironmentMessage = (
  input: RebuildEnvironmentMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryRequestEnvironmentInfoMessage = (
  input: RequestEnvironmentInfoMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.InfoType !== undefined) {
    entries["InfoType"] = input.InfoType;
  }
  return entries;
};

const serializeAws_queryRestartAppServerMessage = (
  input: RestartAppServerMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryRetrieveEnvironmentInfoMessage = (
  input: RetrieveEnvironmentInfoMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.InfoType !== undefined) {
    entries["InfoType"] = input.InfoType;
  }
  return entries;
};

const serializeAws_queryS3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.S3Bucket !== undefined) {
    entries["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    entries["S3Key"] = input.S3Key;
  }
  return entries;
};

const serializeAws_querySourceBuildInformation = (
  input: SourceBuildInformation,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceLocation !== undefined) {
    entries["SourceLocation"] = input.SourceLocation;
  }
  if (input.SourceRepository !== undefined) {
    entries["SourceRepository"] = input.SourceRepository;
  }
  if (input.SourceType !== undefined) {
    entries["SourceType"] = input.SourceType;
  }
  return entries;
};

const serializeAws_querySourceConfiguration = (
  input: SourceConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_querySwapEnvironmentCNAMEsMessage = (
  input: SwapEnvironmentCNAMEsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DestinationEnvironmentId !== undefined) {
    entries["DestinationEnvironmentId"] = input.DestinationEnvironmentId;
  }
  if (input.DestinationEnvironmentName !== undefined) {
    entries["DestinationEnvironmentName"] = input.DestinationEnvironmentName;
  }
  if (input.SourceEnvironmentId !== undefined) {
    entries["SourceEnvironmentId"] = input.SourceEnvironmentId;
  }
  if (input.SourceEnvironmentName !== undefined) {
    entries["SourceEnvironmentName"] = input.SourceEnvironmentName;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
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
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.ForceTerminate !== undefined) {
    entries["ForceTerminate"] = input.ForceTerminate;
  }
  if (input.TerminateResources !== undefined) {
    entries["TerminateResources"] = input.TerminateResources;
  }
  return entries;
};

const serializeAws_queryUpdateApplicationMessage = (
  input: UpdateApplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  return entries;
};

const serializeAws_queryUpdateApplicationResourceLifecycleMessage = (
  input: UpdateApplicationResourceLifecycleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.ResourceLifecycleConfig !== undefined) {
    const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(
      input.ResourceLifecycleConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceLifecycleConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryUpdateApplicationVersionMessage = (
  input: UpdateApplicationVersionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryUpdateConfigurationTemplateMessage = (
  input: UpdateConfigurationTemplateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.OptionSettings !== undefined) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(
      input.OptionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OptionsToRemove !== undefined) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(
      input.OptionsToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryUpdateEnvironmentMessage = (
  input: UpdateEnvironmentMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.EnvironmentId !== undefined) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.OptionSettings !== undefined) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(
      input.OptionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OptionsToRemove !== undefined) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(
      input.OptionsToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PlatformArn !== undefined) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.SolutionStackName !== undefined) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.Tier !== undefined) {
    const memberEntries = serializeAws_queryEnvironmentTier(
      input.Tier,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tier.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.VersionLabel !== undefined) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  return entries;
};

const serializeAws_queryUpdateTagsForResourceMessage = (
  input: UpdateTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn !== undefined) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagsToAdd !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.TagsToAdd, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `TagsToAdd.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TagsToRemove !== undefined) {
    const memberEntries = serializeAws_queryTagKeyList(
      input.TagsToRemove,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `TagsToRemove.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryValidateConfigurationSettingsMessage = (
  input: ValidateConfigurationSettingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName !== undefined) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentName !== undefined) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.OptionSettings !== undefined) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(
      input.OptionSettings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TemplateName !== undefined) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryVersionLabels = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryVersionLabelsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_queryApplicationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationDescription => {
  let contents: any = {
    __type: "ApplicationDescription",
    ApplicationArn: undefined,
    ApplicationName: undefined,
    ConfigurationTemplates: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Description: undefined,
    ResourceLifecycleConfig: undefined,
    Versions: undefined
  };
  if (output["ApplicationArn"] !== undefined) {
    contents.ApplicationArn = output["ApplicationArn"];
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = output["ApplicationName"];
  }
  if (output.ConfigurationTemplates === "") {
    contents.ConfigurationTemplates = [];
  }
  if (
    output["ConfigurationTemplates"] !== undefined &&
    output["ConfigurationTemplates"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ConfigurationTemplates"]["member"] instanceof Array
        ? output["ConfigurationTemplates"]["member"]
        : [output["ConfigurationTemplates"]["member"]];
    contents.ConfigurationTemplates = deserializeAws_queryConfigurationTemplateNamesList(
      wrappedItem,
      context
    );
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = new Date(output["DateCreated"]);
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = new Date(output["DateUpdated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["ResourceLifecycleConfig"] !== undefined) {
    contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(
      output["ResourceLifecycleConfig"],
      context
    );
  }
  if (output.Versions === "") {
    contents.Versions = [];
  }
  if (
    output["Versions"] !== undefined &&
    output["Versions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Versions"]["member"] instanceof Array
        ? output["Versions"]["member"]
        : [output["Versions"]["member"]];
    contents.Versions = deserializeAws_queryVersionLabelsList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ApplicationDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryApplicationDescription(entry, context)
  );
};

const deserializeAws_queryApplicationDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationDescriptionMessage => {
  let contents: any = {
    __type: "ApplicationDescriptionMessage",
    Application: undefined
  };
  if (output["Application"] !== undefined) {
    contents.Application = deserializeAws_queryApplicationDescription(
      output["Application"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): ApplicationDescriptionsMessage => {
  let contents: any = {
    __type: "ApplicationDescriptionsMessage",
    Applications: undefined
  };
  if (output.Applications === "") {
    contents.Applications = [];
  }
  if (
    output["Applications"] !== undefined &&
    output["Applications"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Applications"]["member"] instanceof Array
        ? output["Applications"]["member"]
        : [output["Applications"]["member"]];
    contents.Applications = deserializeAws_queryApplicationDescriptionList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationMetrics = (
  output: any,
  context: __SerdeContext
): ApplicationMetrics => {
  let contents: any = {
    __type: "ApplicationMetrics",
    Duration: undefined,
    Latency: undefined,
    RequestCount: undefined,
    StatusCodes: undefined
  };
  if (output["Duration"] !== undefined) {
    contents.Duration = parseInt(output["Duration"]);
  }
  if (output["Latency"] !== undefined) {
    contents.Latency = deserializeAws_queryLatency(output["Latency"], context);
  }
  if (output["RequestCount"] !== undefined) {
    contents.RequestCount = parseInt(output["RequestCount"]);
  }
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = deserializeAws_queryStatusCodes(
      output["StatusCodes"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationResourceLifecycleConfig = (
  output: any,
  context: __SerdeContext
): ApplicationResourceLifecycleConfig => {
  let contents: any = {
    __type: "ApplicationResourceLifecycleConfig",
    ServiceRole: undefined,
    VersionLifecycleConfig: undefined
  };
  if (output["ServiceRole"] !== undefined) {
    contents.ServiceRole = output["ServiceRole"];
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
  let contents: any = {
    __type: "ApplicationResourceLifecycleDescriptionMessage",
    ApplicationName: undefined,
    ResourceLifecycleConfig: undefined
  };
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = output["ApplicationName"];
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
  let contents: any = {
    __type: "ApplicationVersionDescription",
    ApplicationName: undefined,
    ApplicationVersionArn: undefined,
    BuildArn: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Description: undefined,
    SourceBuildInformation: undefined,
    SourceBundle: undefined,
    Status: undefined,
    VersionLabel: undefined
  };
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = output["ApplicationName"];
  }
  if (output["ApplicationVersionArn"] !== undefined) {
    contents.ApplicationVersionArn = output["ApplicationVersionArn"];
  }
  if (output["BuildArn"] !== undefined) {
    contents.BuildArn = output["BuildArn"];
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = new Date(output["DateCreated"]);
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = new Date(output["DateUpdated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["SourceBuildInformation"] !== undefined) {
    contents.SourceBuildInformation = deserializeAws_querySourceBuildInformation(
      output["SourceBuildInformation"],
      context
    );
  }
  if (output["SourceBundle"] !== undefined) {
    contents.SourceBundle = deserializeAws_queryS3Location(
      output["SourceBundle"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = output["VersionLabel"];
  }
  return contents;
};

const deserializeAws_queryApplicationVersionDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ApplicationVersionDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryApplicationVersionDescription(entry, context)
  );
};

const deserializeAws_queryApplicationVersionDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescriptionMessage => {
  let contents: any = {
    __type: "ApplicationVersionDescriptionMessage",
    ApplicationVersion: undefined
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
  let contents: any = {
    __type: "ApplicationVersionDescriptionsMessage",
    ApplicationVersions: undefined,
    NextToken: undefined
  };
  if (output.ApplicationVersions === "") {
    contents.ApplicationVersions = [];
  }
  if (
    output["ApplicationVersions"] !== undefined &&
    output["ApplicationVersions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ApplicationVersions"]["member"] instanceof Array
        ? output["ApplicationVersions"]["member"]
        : [output["ApplicationVersions"]["member"]];
    contents.ApplicationVersions = deserializeAws_queryApplicationVersionDescriptionList(
      wrappedItem,
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryApplicationVersionLifecycleConfig = (
  output: any,
  context: __SerdeContext
): ApplicationVersionLifecycleConfig => {
  let contents: any = {
    __type: "ApplicationVersionLifecycleConfig",
    MaxAgeRule: undefined,
    MaxCountRule: undefined
  };
  if (output["MaxAgeRule"] !== undefined) {
    contents.MaxAgeRule = deserializeAws_queryMaxAgeRule(
      output["MaxAgeRule"],
      context
    );
  }
  if (output["MaxCountRule"] !== undefined) {
    contents.MaxCountRule = deserializeAws_queryMaxCountRule(
      output["MaxCountRule"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplyEnvironmentManagedActionResult = (
  output: any,
  context: __SerdeContext
): ApplyEnvironmentManagedActionResult => {
  let contents: any = {
    __type: "ApplyEnvironmentManagedActionResult",
    ActionDescription: undefined,
    ActionId: undefined,
    ActionType: undefined,
    Status: undefined
  };
  if (output["ActionDescription"] !== undefined) {
    contents.ActionDescription = output["ActionDescription"];
  }
  if (output["ActionId"] !== undefined) {
    contents.ActionId = output["ActionId"];
  }
  if (output["ActionType"] !== undefined) {
    contents.ActionType = output["ActionType"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryAutoScalingGroup = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup => {
  let contents: any = {
    __type: "AutoScalingGroup",
    Name: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_queryAutoScalingGroupList = (
  output: any,
  context: __SerdeContext
): Array<AutoScalingGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAutoScalingGroup(entry, context)
  );
};

const deserializeAws_queryAvailableSolutionStackDetailsList = (
  output: any,
  context: __SerdeContext
): Array<SolutionStackDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySolutionStackDescription(entry, context)
  );
};

const deserializeAws_queryAvailableSolutionStackNamesList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryBuilder = (
  output: any,
  context: __SerdeContext
): Builder => {
  let contents: any = {
    __type: "Builder",
    ARN: undefined
  };
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  return contents;
};

const deserializeAws_queryCPUUtilization = (
  output: any,
  context: __SerdeContext
): CPUUtilization => {
  let contents: any = {
    __type: "CPUUtilization",
    IOWait: undefined,
    IRQ: undefined,
    Idle: undefined,
    Nice: undefined,
    Privileged: undefined,
    SoftIRQ: undefined,
    System: undefined,
    User: undefined
  };
  if (output["IOWait"] !== undefined) {
    contents.IOWait = parseFloat(output["IOWait"]);
  }
  if (output["IRQ"] !== undefined) {
    contents.IRQ = parseFloat(output["IRQ"]);
  }
  if (output["Idle"] !== undefined) {
    contents.Idle = parseFloat(output["Idle"]);
  }
  if (output["Nice"] !== undefined) {
    contents.Nice = parseFloat(output["Nice"]);
  }
  if (output["Privileged"] !== undefined) {
    contents.Privileged = parseFloat(output["Privileged"]);
  }
  if (output["SoftIRQ"] !== undefined) {
    contents.SoftIRQ = parseFloat(output["SoftIRQ"]);
  }
  if (output["System"] !== undefined) {
    contents.System = parseFloat(output["System"]);
  }
  if (output["User"] !== undefined) {
    contents.User = parseFloat(output["User"]);
  }
  return contents;
};

const deserializeAws_queryCauses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCheckDNSAvailabilityResultMessage = (
  output: any,
  context: __SerdeContext
): CheckDNSAvailabilityResultMessage => {
  let contents: any = {
    __type: "CheckDNSAvailabilityResultMessage",
    Available: undefined,
    FullyQualifiedCNAME: undefined
  };
  if (output["Available"] !== undefined) {
    contents.Available = output["Available"] == "true";
  }
  if (output["FullyQualifiedCNAME"] !== undefined) {
    contents.FullyQualifiedCNAME = output["FullyQualifiedCNAME"];
  }
  return contents;
};

const deserializeAws_queryCodeBuildNotInServiceRegionException = (
  output: any,
  context: __SerdeContext
): CodeBuildNotInServiceRegionException => {
  let contents: any = {
    __type: "CodeBuildNotInServiceRegionException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryConfigurationOptionDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionDescription => {
  let contents: any = {
    __type: "ConfigurationOptionDescription",
    ChangeSeverity: undefined,
    DefaultValue: undefined,
    MaxLength: undefined,
    MaxValue: undefined,
    MinValue: undefined,
    Name: undefined,
    Namespace: undefined,
    Regex: undefined,
    UserDefined: undefined,
    ValueOptions: undefined,
    ValueType: undefined
  };
  if (output["ChangeSeverity"] !== undefined) {
    contents.ChangeSeverity = output["ChangeSeverity"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["MaxLength"] !== undefined) {
    contents.MaxLength = parseInt(output["MaxLength"]);
  }
  if (output["MaxValue"] !== undefined) {
    contents.MaxValue = parseInt(output["MaxValue"]);
  }
  if (output["MinValue"] !== undefined) {
    contents.MinValue = parseInt(output["MinValue"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output["Regex"] !== undefined) {
    contents.Regex = deserializeAws_queryOptionRestrictionRegex(
      output["Regex"],
      context
    );
  }
  if (output["UserDefined"] !== undefined) {
    contents.UserDefined = output["UserDefined"] == "true";
  }
  if (output.ValueOptions === "") {
    contents.ValueOptions = [];
  }
  if (
    output["ValueOptions"] !== undefined &&
    output["ValueOptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ValueOptions"]["member"] instanceof Array
        ? output["ValueOptions"]["member"]
        : [output["ValueOptions"]["member"]];
    contents.ValueOptions = deserializeAws_queryConfigurationOptionPossibleValues(
      wrappedItem,
      context
    );
  }
  if (output["ValueType"] !== undefined) {
    contents.ValueType = output["ValueType"];
  }
  return contents;
};

const deserializeAws_queryConfigurationOptionDescriptionsList = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationOptionDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryConfigurationOptionDescription(entry, context)
  );
};

const deserializeAws_queryConfigurationOptionPossibleValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryConfigurationOptionSetting = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionSetting => {
  let contents: any = {
    __type: "ConfigurationOptionSetting",
    Namespace: undefined,
    OptionName: undefined,
    ResourceName: undefined,
    Value: undefined
  };
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output["OptionName"] !== undefined) {
    contents.OptionName = output["OptionName"];
  }
  if (output["ResourceName"] !== undefined) {
    contents.ResourceName = output["ResourceName"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryConfigurationOptionSettingsList = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationOptionSetting> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryConfigurationOptionSetting(entry, context)
  );
};

const deserializeAws_queryConfigurationOptionsDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionsDescription => {
  let contents: any = {
    __type: "ConfigurationOptionsDescription",
    Options: undefined,
    PlatformArn: undefined,
    SolutionStackName: undefined
  };
  if (output.Options === "") {
    contents.Options = [];
  }
  if (
    output["Options"] !== undefined &&
    output["Options"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Options"]["member"] instanceof Array
        ? output["Options"]["member"]
        : [output["Options"]["member"]];
    contents.Options = deserializeAws_queryConfigurationOptionDescriptionsList(
      wrappedItem,
      context
    );
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = output["PlatformArn"];
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = output["SolutionStackName"];
  }
  return contents;
};

const deserializeAws_queryConfigurationSettingsDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescription => {
  let contents: any = {
    __type: "ConfigurationSettingsDescription",
    ApplicationName: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    DeploymentStatus: undefined,
    Description: undefined,
    EnvironmentName: undefined,
    OptionSettings: undefined,
    PlatformArn: undefined,
    SolutionStackName: undefined,
    TemplateName: undefined
  };
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = output["ApplicationName"];
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = new Date(output["DateCreated"]);
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = new Date(output["DateUpdated"]);
  }
  if (output["DeploymentStatus"] !== undefined) {
    contents.DeploymentStatus = output["DeploymentStatus"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = output["EnvironmentName"];
  }
  if (output.OptionSettings === "") {
    contents.OptionSettings = [];
  }
  if (
    output["OptionSettings"] !== undefined &&
    output["OptionSettings"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["OptionSettings"]["member"] instanceof Array
        ? output["OptionSettings"]["member"]
        : [output["OptionSettings"]["member"]];
    contents.OptionSettings = deserializeAws_queryConfigurationOptionSettingsList(
      wrappedItem,
      context
    );
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = output["PlatformArn"];
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = output["SolutionStackName"];
  }
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = output["TemplateName"];
  }
  return contents;
};

const deserializeAws_queryConfigurationSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationSettingsDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryConfigurationSettingsDescription(entry, context)
  );
};

const deserializeAws_queryConfigurationSettingsDescriptions = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescriptions => {
  let contents: any = {
    __type: "ConfigurationSettingsDescriptions",
    ConfigurationSettings: undefined
  };
  if (output.ConfigurationSettings === "") {
    contents.ConfigurationSettings = [];
  }
  if (
    output["ConfigurationSettings"] !== undefined &&
    output["ConfigurationSettings"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ConfigurationSettings"]["member"] instanceof Array
        ? output["ConfigurationSettings"]["member"]
        : [output["ConfigurationSettings"]["member"]];
    contents.ConfigurationSettings = deserializeAws_queryConfigurationSettingsDescriptionList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryConfigurationSettingsValidationMessages = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsValidationMessages => {
  let contents: any = {
    __type: "ConfigurationSettingsValidationMessages",
    Messages: undefined
  };
  if (output.Messages === "") {
    contents.Messages = [];
  }
  if (
    output["Messages"] !== undefined &&
    output["Messages"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Messages"]["member"] instanceof Array
        ? output["Messages"]["member"]
        : [output["Messages"]["member"]];
    contents.Messages = deserializeAws_queryValidationMessagesList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryConfigurationTemplateNamesList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCreatePlatformVersionResult = (
  output: any,
  context: __SerdeContext
): CreatePlatformVersionResult => {
  let contents: any = {
    __type: "CreatePlatformVersionResult",
    Builder: undefined,
    PlatformSummary: undefined
  };
  if (output["Builder"] !== undefined) {
    contents.Builder = deserializeAws_queryBuilder(output["Builder"], context);
  }
  if (output["PlatformSummary"] !== undefined) {
    contents.PlatformSummary = deserializeAws_queryPlatformSummary(
      output["PlatformSummary"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateStorageLocationResultMessage = (
  output: any,
  context: __SerdeContext
): CreateStorageLocationResultMessage => {
  let contents: any = {
    __type: "CreateStorageLocationResultMessage",
    S3Bucket: undefined
  };
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = output["S3Bucket"];
  }
  return contents;
};

const deserializeAws_queryCustomAmi = (
  output: any,
  context: __SerdeContext
): CustomAmi => {
  let contents: any = {
    __type: "CustomAmi",
    ImageId: undefined,
    VirtualizationType: undefined
  };
  if (output["ImageId"] !== undefined) {
    contents.ImageId = output["ImageId"];
  }
  if (output["VirtualizationType"] !== undefined) {
    contents.VirtualizationType = output["VirtualizationType"];
  }
  return contents;
};

const deserializeAws_queryCustomAmiList = (
  output: any,
  context: __SerdeContext
): Array<CustomAmi> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCustomAmi(entry, context)
  );
};

const deserializeAws_queryDeletePlatformVersionResult = (
  output: any,
  context: __SerdeContext
): DeletePlatformVersionResult => {
  let contents: any = {
    __type: "DeletePlatformVersionResult",
    PlatformSummary: undefined
  };
  if (output["PlatformSummary"] !== undefined) {
    contents.PlatformSummary = deserializeAws_queryPlatformSummary(
      output["PlatformSummary"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeployment = (
  output: any,
  context: __SerdeContext
): Deployment => {
  let contents: any = {
    __type: "Deployment",
    DeploymentId: undefined,
    DeploymentTime: undefined,
    Status: undefined,
    VersionLabel: undefined
  };
  if (output["DeploymentId"] !== undefined) {
    contents.DeploymentId = parseInt(output["DeploymentId"]);
  }
  if (output["DeploymentTime"] !== undefined) {
    contents.DeploymentTime = new Date(output["DeploymentTime"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = output["VersionLabel"];
  }
  return contents;
};

const deserializeAws_queryDescribeAccountAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResult => {
  let contents: any = {
    __type: "DescribeAccountAttributesResult",
    ResourceQuotas: undefined
  };
  if (output["ResourceQuotas"] !== undefined) {
    contents.ResourceQuotas = deserializeAws_queryResourceQuotas(
      output["ResourceQuotas"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeEnvironmentHealthResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentHealthResult => {
  let contents: any = {
    __type: "DescribeEnvironmentHealthResult",
    ApplicationMetrics: undefined,
    Causes: undefined,
    Color: undefined,
    EnvironmentName: undefined,
    HealthStatus: undefined,
    InstancesHealth: undefined,
    RefreshedAt: undefined,
    Status: undefined
  };
  if (output["ApplicationMetrics"] !== undefined) {
    contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(
      output["ApplicationMetrics"],
      context
    );
  }
  if (output.Causes === "") {
    contents.Causes = [];
  }
  if (
    output["Causes"] !== undefined &&
    output["Causes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Causes"]["member"] instanceof Array
        ? output["Causes"]["member"]
        : [output["Causes"]["member"]];
    contents.Causes = deserializeAws_queryCauses(wrappedItem, context);
  }
  if (output["Color"] !== undefined) {
    contents.Color = output["Color"];
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = output["EnvironmentName"];
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["InstancesHealth"] !== undefined) {
    contents.InstancesHealth = deserializeAws_queryInstanceHealthSummary(
      output["InstancesHealth"],
      context
    );
  }
  if (output["RefreshedAt"] !== undefined) {
    contents.RefreshedAt = new Date(output["RefreshedAt"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentManagedActionHistoryResult => {
  let contents: any = {
    __type: "DescribeEnvironmentManagedActionHistoryResult",
    ManagedActionHistoryItems: undefined,
    NextToken: undefined
  };
  if (output.ManagedActionHistoryItems === "") {
    contents.ManagedActionHistoryItems = [];
  }
  if (
    output["ManagedActionHistoryItems"] !== undefined &&
    output["ManagedActionHistoryItems"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ManagedActionHistoryItems"]["member"] instanceof Array
        ? output["ManagedActionHistoryItems"]["member"]
        : [output["ManagedActionHistoryItems"]["member"]];
    contents.ManagedActionHistoryItems = deserializeAws_queryManagedActionHistoryItems(
      wrappedItem,
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeEnvironmentManagedActionsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentManagedActionsResult => {
  let contents: any = {
    __type: "DescribeEnvironmentManagedActionsResult",
    ManagedActions: undefined
  };
  if (output.ManagedActions === "") {
    contents.ManagedActions = [];
  }
  if (
    output["ManagedActions"] !== undefined &&
    output["ManagedActions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ManagedActions"]["member"] instanceof Array
        ? output["ManagedActions"]["member"]
        : [output["ManagedActions"]["member"]];
    contents.ManagedActions = deserializeAws_queryManagedActions(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeInstancesHealthResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancesHealthResult => {
  let contents: any = {
    __type: "DescribeInstancesHealthResult",
    InstanceHealthList: undefined,
    NextToken: undefined,
    RefreshedAt: undefined
  };
  if (output.InstanceHealthList === "") {
    contents.InstanceHealthList = [];
  }
  if (
    output["InstanceHealthList"] !== undefined &&
    output["InstanceHealthList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["InstanceHealthList"]["member"] instanceof Array
        ? output["InstanceHealthList"]["member"]
        : [output["InstanceHealthList"]["member"]];
    contents.InstanceHealthList = deserializeAws_queryInstanceHealthList(
      wrappedItem,
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output["RefreshedAt"] !== undefined) {
    contents.RefreshedAt = new Date(output["RefreshedAt"]);
  }
  return contents;
};

const deserializeAws_queryDescribePlatformVersionResult = (
  output: any,
  context: __SerdeContext
): DescribePlatformVersionResult => {
  let contents: any = {
    __type: "DescribePlatformVersionResult",
    PlatformDescription: undefined
  };
  if (output["PlatformDescription"] !== undefined) {
    contents.PlatformDescription = deserializeAws_queryPlatformDescription(
      output["PlatformDescription"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryElasticBeanstalkServiceException = (
  output: any,
  context: __SerdeContext
): ElasticBeanstalkServiceException => {
  let contents: any = {
    __type: "ElasticBeanstalkServiceException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryEnvironmentDescription = (
  output: any,
  context: __SerdeContext
): EnvironmentDescription => {
  let contents: any = {
    __type: "EnvironmentDescription",
    AbortableOperationInProgress: undefined,
    ApplicationName: undefined,
    CNAME: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Description: undefined,
    EndpointURL: undefined,
    EnvironmentArn: undefined,
    EnvironmentId: undefined,
    EnvironmentLinks: undefined,
    EnvironmentName: undefined,
    Health: undefined,
    HealthStatus: undefined,
    PlatformArn: undefined,
    Resources: undefined,
    SolutionStackName: undefined,
    Status: undefined,
    TemplateName: undefined,
    Tier: undefined,
    VersionLabel: undefined
  };
  if (output["AbortableOperationInProgress"] !== undefined) {
    contents.AbortableOperationInProgress =
      output["AbortableOperationInProgress"] == "true";
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = output["ApplicationName"];
  }
  if (output["CNAME"] !== undefined) {
    contents.CNAME = output["CNAME"];
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = new Date(output["DateCreated"]);
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = new Date(output["DateUpdated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["EndpointURL"] !== undefined) {
    contents.EndpointURL = output["EndpointURL"];
  }
  if (output["EnvironmentArn"] !== undefined) {
    contents.EnvironmentArn = output["EnvironmentArn"];
  }
  if (output["EnvironmentId"] !== undefined) {
    contents.EnvironmentId = output["EnvironmentId"];
  }
  if (output.EnvironmentLinks === "") {
    contents.EnvironmentLinks = [];
  }
  if (
    output["EnvironmentLinks"] !== undefined &&
    output["EnvironmentLinks"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["EnvironmentLinks"]["member"] instanceof Array
        ? output["EnvironmentLinks"]["member"]
        : [output["EnvironmentLinks"]["member"]];
    contents.EnvironmentLinks = deserializeAws_queryEnvironmentLinks(
      wrappedItem,
      context
    );
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = output["EnvironmentName"];
  }
  if (output["Health"] !== undefined) {
    contents.Health = output["Health"];
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = output["PlatformArn"];
  }
  if (output["Resources"] !== undefined) {
    contents.Resources = deserializeAws_queryEnvironmentResourcesDescription(
      output["Resources"],
      context
    );
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = output["SolutionStackName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = output["TemplateName"];
  }
  if (output["Tier"] !== undefined) {
    contents.Tier = deserializeAws_queryEnvironmentTier(
      output["Tier"],
      context
    );
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = output["VersionLabel"];
  }
  return contents;
};

const deserializeAws_queryEnvironmentDescriptionsList = (
  output: any,
  context: __SerdeContext
): Array<EnvironmentDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEnvironmentDescription(entry, context)
  );
};

const deserializeAws_queryEnvironmentDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EnvironmentDescriptionsMessage => {
  let contents: any = {
    __type: "EnvironmentDescriptionsMessage",
    Environments: undefined,
    NextToken: undefined
  };
  if (output.Environments === "") {
    contents.Environments = [];
  }
  if (
    output["Environments"] !== undefined &&
    output["Environments"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Environments"]["member"] instanceof Array
        ? output["Environments"]["member"]
        : [output["Environments"]["member"]];
    contents.Environments = deserializeAws_queryEnvironmentDescriptionsList(
      wrappedItem,
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryEnvironmentInfoDescription = (
  output: any,
  context: __SerdeContext
): EnvironmentInfoDescription => {
  let contents: any = {
    __type: "EnvironmentInfoDescription",
    Ec2InstanceId: undefined,
    InfoType: undefined,
    Message: undefined,
    SampleTimestamp: undefined
  };
  if (output["Ec2InstanceId"] !== undefined) {
    contents.Ec2InstanceId = output["Ec2InstanceId"];
  }
  if (output["InfoType"] !== undefined) {
    contents.InfoType = output["InfoType"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["SampleTimestamp"] !== undefined) {
    contents.SampleTimestamp = new Date(output["SampleTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryEnvironmentInfoDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<EnvironmentInfoDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEnvironmentInfoDescription(entry, context)
  );
};

const deserializeAws_queryEnvironmentLink = (
  output: any,
  context: __SerdeContext
): EnvironmentLink => {
  let contents: any = {
    __type: "EnvironmentLink",
    EnvironmentName: undefined,
    LinkName: undefined
  };
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = output["EnvironmentName"];
  }
  if (output["LinkName"] !== undefined) {
    contents.LinkName = output["LinkName"];
  }
  return contents;
};

const deserializeAws_queryEnvironmentLinks = (
  output: any,
  context: __SerdeContext
): Array<EnvironmentLink> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEnvironmentLink(entry, context)
  );
};

const deserializeAws_queryEnvironmentResourceDescription = (
  output: any,
  context: __SerdeContext
): EnvironmentResourceDescription => {
  let contents: any = {
    __type: "EnvironmentResourceDescription",
    AutoScalingGroups: undefined,
    EnvironmentName: undefined,
    Instances: undefined,
    LaunchConfigurations: undefined,
    LaunchTemplates: undefined,
    LoadBalancers: undefined,
    Queues: undefined,
    Triggers: undefined
  };
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  }
  if (
    output["AutoScalingGroups"] !== undefined &&
    output["AutoScalingGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AutoScalingGroups"]["member"] instanceof Array
        ? output["AutoScalingGroups"]["member"]
        : [output["AutoScalingGroups"]["member"]];
    contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroupList(
      wrappedItem,
      context
    );
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = output["EnvironmentName"];
  }
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (
    output["Instances"] !== undefined &&
    output["Instances"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Instances"]["member"] instanceof Array
        ? output["Instances"]["member"]
        : [output["Instances"]["member"]];
    contents.Instances = deserializeAws_queryInstanceList(wrappedItem, context);
  }
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  }
  if (
    output["LaunchConfigurations"] !== undefined &&
    output["LaunchConfigurations"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LaunchConfigurations"]["member"] instanceof Array
        ? output["LaunchConfigurations"]["member"]
        : [output["LaunchConfigurations"]["member"]];
    contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurationList(
      wrappedItem,
      context
    );
  }
  if (output.LaunchTemplates === "") {
    contents.LaunchTemplates = [];
  }
  if (
    output["LaunchTemplates"] !== undefined &&
    output["LaunchTemplates"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LaunchTemplates"]["member"] instanceof Array
        ? output["LaunchTemplates"]["member"]
        : [output["LaunchTemplates"]["member"]];
    contents.LaunchTemplates = deserializeAws_queryLaunchTemplateList(
      wrappedItem,
      context
    );
  }
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (
    output["LoadBalancers"] !== undefined &&
    output["LoadBalancers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadBalancers"]["member"] instanceof Array
        ? output["LoadBalancers"]["member"]
        : [output["LoadBalancers"]["member"]];
    contents.LoadBalancers = deserializeAws_queryLoadBalancerList(
      wrappedItem,
      context
    );
  }
  if (output.Queues === "") {
    contents.Queues = [];
  }
  if (
    output["Queues"] !== undefined &&
    output["Queues"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Queues"]["member"] instanceof Array
        ? output["Queues"]["member"]
        : [output["Queues"]["member"]];
    contents.Queues = deserializeAws_queryQueueList(wrappedItem, context);
  }
  if (output.Triggers === "") {
    contents.Triggers = [];
  }
  if (
    output["Triggers"] !== undefined &&
    output["Triggers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Triggers"]["member"] instanceof Array
        ? output["Triggers"]["member"]
        : [output["Triggers"]["member"]];
    contents.Triggers = deserializeAws_queryTriggerList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryEnvironmentResourceDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EnvironmentResourceDescriptionsMessage => {
  let contents: any = {
    __type: "EnvironmentResourceDescriptionsMessage",
    EnvironmentResources: undefined
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
  let contents: any = {
    __type: "EnvironmentResourcesDescription",
    LoadBalancer: undefined
  };
  if (output["LoadBalancer"] !== undefined) {
    contents.LoadBalancer = deserializeAws_queryLoadBalancerDescription(
      output["LoadBalancer"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryEnvironmentTier = (
  output: any,
  context: __SerdeContext
): EnvironmentTier => {
  let contents: any = {
    __type: "EnvironmentTier",
    Name: undefined,
    Type: undefined,
    Version: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  return contents;
};

const deserializeAws_queryEventDescription = (
  output: any,
  context: __SerdeContext
): EventDescription => {
  let contents: any = {
    __type: "EventDescription",
    ApplicationName: undefined,
    EnvironmentName: undefined,
    EventDate: undefined,
    Message: undefined,
    PlatformArn: undefined,
    RequestId: undefined,
    Severity: undefined,
    TemplateName: undefined,
    VersionLabel: undefined
  };
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = output["ApplicationName"];
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = output["EnvironmentName"];
  }
  if (output["EventDate"] !== undefined) {
    contents.EventDate = new Date(output["EventDate"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = output["PlatformArn"];
  }
  if (output["RequestId"] !== undefined) {
    contents.RequestId = output["RequestId"];
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = output["Severity"];
  }
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = output["TemplateName"];
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = output["VersionLabel"];
  }
  return contents;
};

const deserializeAws_queryEventDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<EventDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEventDescription(entry, context)
  );
};

const deserializeAws_queryEventDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EventDescriptionsMessage => {
  let contents: any = {
    __type: "EventDescriptionsMessage",
    Events: undefined,
    NextToken: undefined
  };
  if (output.Events === "") {
    contents.Events = [];
  }
  if (
    output["Events"] !== undefined &&
    output["Events"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Events"]["member"] instanceof Array
        ? output["Events"]["member"]
        : [output["Events"]["member"]];
    contents.Events = deserializeAws_queryEventDescriptionList(
      wrappedItem,
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryInstance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    Id: undefined
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_queryInstanceHealthList = (
  output: any,
  context: __SerdeContext
): Array<SingleInstanceHealth> => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySingleInstanceHealth(entry, context)
  );
};

const deserializeAws_queryInstanceHealthSummary = (
  output: any,
  context: __SerdeContext
): InstanceHealthSummary => {
  let contents: any = {
    __type: "InstanceHealthSummary",
    Degraded: undefined,
    Info: undefined,
    NoData: undefined,
    Ok: undefined,
    Pending: undefined,
    Severe: undefined,
    Unknown: undefined,
    Warning: undefined
  };
  if (output["Degraded"] !== undefined) {
    contents.Degraded = parseInt(output["Degraded"]);
  }
  if (output["Info"] !== undefined) {
    contents.Info = parseInt(output["Info"]);
  }
  if (output["NoData"] !== undefined) {
    contents.NoData = parseInt(output["NoData"]);
  }
  if (output["Ok"] !== undefined) {
    contents.Ok = parseInt(output["Ok"]);
  }
  if (output["Pending"] !== undefined) {
    contents.Pending = parseInt(output["Pending"]);
  }
  if (output["Severe"] !== undefined) {
    contents.Severe = parseInt(output["Severe"]);
  }
  if (output["Unknown"] !== undefined) {
    contents.Unknown = parseInt(output["Unknown"]);
  }
  if (output["Warning"] !== undefined) {
    contents.Warning = parseInt(output["Warning"]);
  }
  return contents;
};

const deserializeAws_queryInstanceList = (
  output: any,
  context: __SerdeContext
): Array<Instance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryInstance(entry, context)
  );
};

const deserializeAws_queryInsufficientPrivilegesException = (
  output: any,
  context: __SerdeContext
): InsufficientPrivilegesException => {
  let contents: any = {
    __type: "InsufficientPrivilegesException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryLatency = (
  output: any,
  context: __SerdeContext
): Latency => {
  let contents: any = {
    __type: "Latency",
    P10: undefined,
    P50: undefined,
    P75: undefined,
    P85: undefined,
    P90: undefined,
    P95: undefined,
    P99: undefined,
    P999: undefined
  };
  if (output["P10"] !== undefined) {
    contents.P10 = parseFloat(output["P10"]);
  }
  if (output["P50"] !== undefined) {
    contents.P50 = parseFloat(output["P50"]);
  }
  if (output["P75"] !== undefined) {
    contents.P75 = parseFloat(output["P75"]);
  }
  if (output["P85"] !== undefined) {
    contents.P85 = parseFloat(output["P85"]);
  }
  if (output["P90"] !== undefined) {
    contents.P90 = parseFloat(output["P90"]);
  }
  if (output["P95"] !== undefined) {
    contents.P95 = parseFloat(output["P95"]);
  }
  if (output["P99"] !== undefined) {
    contents.P99 = parseFloat(output["P99"]);
  }
  if (output["P999"] !== undefined) {
    contents.P999 = parseFloat(output["P999"]);
  }
  return contents;
};

const deserializeAws_queryLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): LaunchConfiguration => {
  let contents: any = {
    __type: "LaunchConfiguration",
    Name: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_queryLaunchConfigurationList = (
  output: any,
  context: __SerdeContext
): Array<LaunchConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLaunchConfiguration(entry, context)
  );
};

const deserializeAws_queryLaunchTemplate = (
  output: any,
  context: __SerdeContext
): LaunchTemplate => {
  let contents: any = {
    __type: "LaunchTemplate",
    Id: undefined
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_queryLaunchTemplateList = (
  output: any,
  context: __SerdeContext
): Array<LaunchTemplate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLaunchTemplate(entry, context)
  );
};

const deserializeAws_queryListAvailableSolutionStacksResultMessage = (
  output: any,
  context: __SerdeContext
): ListAvailableSolutionStacksResultMessage => {
  let contents: any = {
    __type: "ListAvailableSolutionStacksResultMessage",
    SolutionStackDetails: undefined,
    SolutionStacks: undefined
  };
  if (output.SolutionStackDetails === "") {
    contents.SolutionStackDetails = [];
  }
  if (
    output["SolutionStackDetails"] !== undefined &&
    output["SolutionStackDetails"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SolutionStackDetails"]["member"] instanceof Array
        ? output["SolutionStackDetails"]["member"]
        : [output["SolutionStackDetails"]["member"]];
    contents.SolutionStackDetails = deserializeAws_queryAvailableSolutionStackDetailsList(
      wrappedItem,
      context
    );
  }
  if (output.SolutionStacks === "") {
    contents.SolutionStacks = [];
  }
  if (
    output["SolutionStacks"] !== undefined &&
    output["SolutionStacks"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SolutionStacks"]["member"] instanceof Array
        ? output["SolutionStacks"]["member"]
        : [output["SolutionStacks"]["member"]];
    contents.SolutionStacks = deserializeAws_queryAvailableSolutionStackNamesList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListPlatformVersionsResult = (
  output: any,
  context: __SerdeContext
): ListPlatformVersionsResult => {
  let contents: any = {
    __type: "ListPlatformVersionsResult",
    NextToken: undefined,
    PlatformSummaryList: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.PlatformSummaryList === "") {
    contents.PlatformSummaryList = [];
  }
  if (
    output["PlatformSummaryList"] !== undefined &&
    output["PlatformSummaryList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PlatformSummaryList"]["member"] instanceof Array
        ? output["PlatformSummaryList"]["member"]
        : [output["PlatformSummaryList"]["member"]];
    contents.PlatformSummaryList = deserializeAws_queryPlatformSummaryList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryListener = (
  output: any,
  context: __SerdeContext
): Listener => {
  let contents: any = {
    __type: "Listener",
    Port: undefined,
    Protocol: undefined
  };
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  return contents;
};

const deserializeAws_queryLoadAverage = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => parseFloat(entry));
};

const deserializeAws_queryLoadBalancer = (
  output: any,
  context: __SerdeContext
): LoadBalancer => {
  let contents: any = {
    __type: "LoadBalancer",
    Name: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerDescription = (
  output: any,
  context: __SerdeContext
): LoadBalancerDescription => {
  let contents: any = {
    __type: "LoadBalancerDescription",
    Domain: undefined,
    Listeners: undefined,
    LoadBalancerName: undefined
  };
  if (output["Domain"] !== undefined) {
    contents.Domain = output["Domain"];
  }
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (
    output["Listeners"] !== undefined &&
    output["Listeners"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Listeners"]["member"] instanceof Array
        ? output["Listeners"]["member"]
        : [output["Listeners"]["member"]];
    contents.Listeners = deserializeAws_queryLoadBalancerListenersDescription(
      wrappedItem,
      context
    );
  }
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = output["LoadBalancerName"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerList = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLoadBalancer(entry, context)
  );
};

const deserializeAws_queryLoadBalancerListenersDescription = (
  output: any,
  context: __SerdeContext
): Array<Listener> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryListener(entry, context)
  );
};

const deserializeAws_queryManagedAction = (
  output: any,
  context: __SerdeContext
): ManagedAction => {
  let contents: any = {
    __type: "ManagedAction",
    ActionDescription: undefined,
    ActionId: undefined,
    ActionType: undefined,
    Status: undefined,
    WindowStartTime: undefined
  };
  if (output["ActionDescription"] !== undefined) {
    contents.ActionDescription = output["ActionDescription"];
  }
  if (output["ActionId"] !== undefined) {
    contents.ActionId = output["ActionId"];
  }
  if (output["ActionType"] !== undefined) {
    contents.ActionType = output["ActionType"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["WindowStartTime"] !== undefined) {
    contents.WindowStartTime = new Date(output["WindowStartTime"]);
  }
  return contents;
};

const deserializeAws_queryManagedActionHistoryItem = (
  output: any,
  context: __SerdeContext
): ManagedActionHistoryItem => {
  let contents: any = {
    __type: "ManagedActionHistoryItem",
    ActionDescription: undefined,
    ActionId: undefined,
    ActionType: undefined,
    ExecutedTime: undefined,
    FailureDescription: undefined,
    FailureType: undefined,
    FinishedTime: undefined,
    Status: undefined
  };
  if (output["ActionDescription"] !== undefined) {
    contents.ActionDescription = output["ActionDescription"];
  }
  if (output["ActionId"] !== undefined) {
    contents.ActionId = output["ActionId"];
  }
  if (output["ActionType"] !== undefined) {
    contents.ActionType = output["ActionType"];
  }
  if (output["ExecutedTime"] !== undefined) {
    contents.ExecutedTime = new Date(output["ExecutedTime"]);
  }
  if (output["FailureDescription"] !== undefined) {
    contents.FailureDescription = output["FailureDescription"];
  }
  if (output["FailureType"] !== undefined) {
    contents.FailureType = output["FailureType"];
  }
  if (output["FinishedTime"] !== undefined) {
    contents.FinishedTime = new Date(output["FinishedTime"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryManagedActionHistoryItems = (
  output: any,
  context: __SerdeContext
): Array<ManagedActionHistoryItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryManagedActionHistoryItem(entry, context)
  );
};

const deserializeAws_queryManagedActionInvalidStateException = (
  output: any,
  context: __SerdeContext
): ManagedActionInvalidStateException => {
  let contents: any = {
    __type: "ManagedActionInvalidStateException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryManagedActions = (
  output: any,
  context: __SerdeContext
): Array<ManagedAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryManagedAction(entry, context)
  );
};

const deserializeAws_queryMaxAgeRule = (
  output: any,
  context: __SerdeContext
): MaxAgeRule => {
  let contents: any = {
    __type: "MaxAgeRule",
    DeleteSourceFromS3: undefined,
    Enabled: undefined,
    MaxAgeInDays: undefined
  };
  if (output["DeleteSourceFromS3"] !== undefined) {
    contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["MaxAgeInDays"] !== undefined) {
    contents.MaxAgeInDays = parseInt(output["MaxAgeInDays"]);
  }
  return contents;
};

const deserializeAws_queryMaxCountRule = (
  output: any,
  context: __SerdeContext
): MaxCountRule => {
  let contents: any = {
    __type: "MaxCountRule",
    DeleteSourceFromS3: undefined,
    Enabled: undefined,
    MaxCount: undefined
  };
  if (output["DeleteSourceFromS3"] !== undefined) {
    contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["MaxCount"] !== undefined) {
    contents.MaxCount = parseInt(output["MaxCount"]);
  }
  return contents;
};

const deserializeAws_queryOperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  let contents: any = {
    __type: "OperationInProgressException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryOptionRestrictionRegex = (
  output: any,
  context: __SerdeContext
): OptionRestrictionRegex => {
  let contents: any = {
    __type: "OptionRestrictionRegex",
    Label: undefined,
    Pattern: undefined
  };
  if (output["Label"] !== undefined) {
    contents.Label = output["Label"];
  }
  if (output["Pattern"] !== undefined) {
    contents.Pattern = output["Pattern"];
  }
  return contents;
};

const deserializeAws_queryPlatformDescription = (
  output: any,
  context: __SerdeContext
): PlatformDescription => {
  let contents: any = {
    __type: "PlatformDescription",
    CustomAmiList: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Description: undefined,
    Frameworks: undefined,
    Maintainer: undefined,
    OperatingSystemName: undefined,
    OperatingSystemVersion: undefined,
    PlatformArn: undefined,
    PlatformCategory: undefined,
    PlatformName: undefined,
    PlatformOwner: undefined,
    PlatformStatus: undefined,
    PlatformVersion: undefined,
    ProgrammingLanguages: undefined,
    SolutionStackName: undefined,
    SupportedAddonList: undefined,
    SupportedTierList: undefined
  };
  if (output.CustomAmiList === "") {
    contents.CustomAmiList = [];
  }
  if (
    output["CustomAmiList"] !== undefined &&
    output["CustomAmiList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["CustomAmiList"]["member"] instanceof Array
        ? output["CustomAmiList"]["member"]
        : [output["CustomAmiList"]["member"]];
    contents.CustomAmiList = deserializeAws_queryCustomAmiList(
      wrappedItem,
      context
    );
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = new Date(output["DateCreated"]);
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = new Date(output["DateUpdated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.Frameworks === "") {
    contents.Frameworks = [];
  }
  if (
    output["Frameworks"] !== undefined &&
    output["Frameworks"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Frameworks"]["member"] instanceof Array
        ? output["Frameworks"]["member"]
        : [output["Frameworks"]["member"]];
    contents.Frameworks = deserializeAws_queryPlatformFrameworks(
      wrappedItem,
      context
    );
  }
  if (output["Maintainer"] !== undefined) {
    contents.Maintainer = output["Maintainer"];
  }
  if (output["OperatingSystemName"] !== undefined) {
    contents.OperatingSystemName = output["OperatingSystemName"];
  }
  if (output["OperatingSystemVersion"] !== undefined) {
    contents.OperatingSystemVersion = output["OperatingSystemVersion"];
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = output["PlatformArn"];
  }
  if (output["PlatformCategory"] !== undefined) {
    contents.PlatformCategory = output["PlatformCategory"];
  }
  if (output["PlatformName"] !== undefined) {
    contents.PlatformName = output["PlatformName"];
  }
  if (output["PlatformOwner"] !== undefined) {
    contents.PlatformOwner = output["PlatformOwner"];
  }
  if (output["PlatformStatus"] !== undefined) {
    contents.PlatformStatus = output["PlatformStatus"];
  }
  if (output["PlatformVersion"] !== undefined) {
    contents.PlatformVersion = output["PlatformVersion"];
  }
  if (output.ProgrammingLanguages === "") {
    contents.ProgrammingLanguages = [];
  }
  if (
    output["ProgrammingLanguages"] !== undefined &&
    output["ProgrammingLanguages"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ProgrammingLanguages"]["member"] instanceof Array
        ? output["ProgrammingLanguages"]["member"]
        : [output["ProgrammingLanguages"]["member"]];
    contents.ProgrammingLanguages = deserializeAws_queryPlatformProgrammingLanguages(
      wrappedItem,
      context
    );
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = output["SolutionStackName"];
  }
  if (output.SupportedAddonList === "") {
    contents.SupportedAddonList = [];
  }
  if (
    output["SupportedAddonList"] !== undefined &&
    output["SupportedAddonList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SupportedAddonList"]["member"] instanceof Array
        ? output["SupportedAddonList"]["member"]
        : [output["SupportedAddonList"]["member"]];
    contents.SupportedAddonList = deserializeAws_querySupportedAddonList(
      wrappedItem,
      context
    );
  }
  if (output.SupportedTierList === "") {
    contents.SupportedTierList = [];
  }
  if (
    output["SupportedTierList"] !== undefined &&
    output["SupportedTierList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SupportedTierList"]["member"] instanceof Array
        ? output["SupportedTierList"]["member"]
        : [output["SupportedTierList"]["member"]];
    contents.SupportedTierList = deserializeAws_querySupportedTierList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryPlatformFramework = (
  output: any,
  context: __SerdeContext
): PlatformFramework => {
  let contents: any = {
    __type: "PlatformFramework",
    Name: undefined,
    Version: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  return contents;
};

const deserializeAws_queryPlatformFrameworks = (
  output: any,
  context: __SerdeContext
): Array<PlatformFramework> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryPlatformFramework(entry, context)
  );
};

const deserializeAws_queryPlatformProgrammingLanguage = (
  output: any,
  context: __SerdeContext
): PlatformProgrammingLanguage => {
  let contents: any = {
    __type: "PlatformProgrammingLanguage",
    Name: undefined,
    Version: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  return contents;
};

const deserializeAws_queryPlatformProgrammingLanguages = (
  output: any,
  context: __SerdeContext
): Array<PlatformProgrammingLanguage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryPlatformProgrammingLanguage(entry, context)
  );
};

const deserializeAws_queryPlatformSummary = (
  output: any,
  context: __SerdeContext
): PlatformSummary => {
  let contents: any = {
    __type: "PlatformSummary",
    OperatingSystemName: undefined,
    OperatingSystemVersion: undefined,
    PlatformArn: undefined,
    PlatformCategory: undefined,
    PlatformOwner: undefined,
    PlatformStatus: undefined,
    SupportedAddonList: undefined,
    SupportedTierList: undefined
  };
  if (output["OperatingSystemName"] !== undefined) {
    contents.OperatingSystemName = output["OperatingSystemName"];
  }
  if (output["OperatingSystemVersion"] !== undefined) {
    contents.OperatingSystemVersion = output["OperatingSystemVersion"];
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = output["PlatformArn"];
  }
  if (output["PlatformCategory"] !== undefined) {
    contents.PlatformCategory = output["PlatformCategory"];
  }
  if (output["PlatformOwner"] !== undefined) {
    contents.PlatformOwner = output["PlatformOwner"];
  }
  if (output["PlatformStatus"] !== undefined) {
    contents.PlatformStatus = output["PlatformStatus"];
  }
  if (output.SupportedAddonList === "") {
    contents.SupportedAddonList = [];
  }
  if (
    output["SupportedAddonList"] !== undefined &&
    output["SupportedAddonList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SupportedAddonList"]["member"] instanceof Array
        ? output["SupportedAddonList"]["member"]
        : [output["SupportedAddonList"]["member"]];
    contents.SupportedAddonList = deserializeAws_querySupportedAddonList(
      wrappedItem,
      context
    );
  }
  if (output.SupportedTierList === "") {
    contents.SupportedTierList = [];
  }
  if (
    output["SupportedTierList"] !== undefined &&
    output["SupportedTierList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SupportedTierList"]["member"] instanceof Array
        ? output["SupportedTierList"]["member"]
        : [output["SupportedTierList"]["member"]];
    contents.SupportedTierList = deserializeAws_querySupportedTierList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryPlatformSummaryList = (
  output: any,
  context: __SerdeContext
): Array<PlatformSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryPlatformSummary(entry, context)
  );
};

const deserializeAws_queryPlatformVersionStillReferencedException = (
  output: any,
  context: __SerdeContext
): PlatformVersionStillReferencedException => {
  let contents: any = {
    __type: "PlatformVersionStillReferencedException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryQueue = (
  output: any,
  context: __SerdeContext
): Queue => {
  let contents: any = {
    __type: "Queue",
    Name: undefined,
    URL: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["URL"] !== undefined) {
    contents.URL = output["URL"];
  }
  return contents;
};

const deserializeAws_queryQueueList = (
  output: any,
  context: __SerdeContext
): Array<Queue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryQueue(entry, context)
  );
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryResourceQuota = (
  output: any,
  context: __SerdeContext
): ResourceQuota => {
  let contents: any = {
    __type: "ResourceQuota",
    Maximum: undefined
  };
  if (output["Maximum"] !== undefined) {
    contents.Maximum = parseInt(output["Maximum"]);
  }
  return contents;
};

const deserializeAws_queryResourceQuotas = (
  output: any,
  context: __SerdeContext
): ResourceQuotas => {
  let contents: any = {
    __type: "ResourceQuotas",
    ApplicationQuota: undefined,
    ApplicationVersionQuota: undefined,
    ConfigurationTemplateQuota: undefined,
    CustomPlatformQuota: undefined,
    EnvironmentQuota: undefined
  };
  if (output["ApplicationQuota"] !== undefined) {
    contents.ApplicationQuota = deserializeAws_queryResourceQuota(
      output["ApplicationQuota"],
      context
    );
  }
  if (output["ApplicationVersionQuota"] !== undefined) {
    contents.ApplicationVersionQuota = deserializeAws_queryResourceQuota(
      output["ApplicationVersionQuota"],
      context
    );
  }
  if (output["ConfigurationTemplateQuota"] !== undefined) {
    contents.ConfigurationTemplateQuota = deserializeAws_queryResourceQuota(
      output["ConfigurationTemplateQuota"],
      context
    );
  }
  if (output["CustomPlatformQuota"] !== undefined) {
    contents.CustomPlatformQuota = deserializeAws_queryResourceQuota(
      output["CustomPlatformQuota"],
      context
    );
  }
  if (output["EnvironmentQuota"] !== undefined) {
    contents.EnvironmentQuota = deserializeAws_queryResourceQuota(
      output["EnvironmentQuota"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceTagsDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ResourceTagsDescriptionMessage => {
  let contents: any = {
    __type: "ResourceTagsDescriptionMessage",
    ResourceArn: undefined,
    ResourceTags: undefined
  };
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = output["ResourceArn"];
  }
  if (output.ResourceTags === "") {
    contents.ResourceTags = [];
  }
  if (
    output["ResourceTags"] !== undefined &&
    output["ResourceTags"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["ResourceTags"]["member"] instanceof Array
        ? output["ResourceTags"]["member"]
        : [output["ResourceTags"]["member"]];
    contents.ResourceTags = deserializeAws_queryTagList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryResourceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ResourceTypeNotSupportedException => {
  let contents: any = {
    __type: "ResourceTypeNotSupportedException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryRetrieveEnvironmentInfoResultMessage = (
  output: any,
  context: __SerdeContext
): RetrieveEnvironmentInfoResultMessage => {
  let contents: any = {
    __type: "RetrieveEnvironmentInfoResultMessage",
    EnvironmentInfo: undefined
  };
  if (output.EnvironmentInfo === "") {
    contents.EnvironmentInfo = [];
  }
  if (
    output["EnvironmentInfo"] !== undefined &&
    output["EnvironmentInfo"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["EnvironmentInfo"]["member"] instanceof Array
        ? output["EnvironmentInfo"]["member"]
        : [output["EnvironmentInfo"]["member"]];
    contents.EnvironmentInfo = deserializeAws_queryEnvironmentInfoDescriptionList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryS3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  let contents: any = {
    __type: "S3Location",
    S3Bucket: undefined,
    S3Key: undefined
  };
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = output["S3Bucket"];
  }
  if (output["S3Key"] !== undefined) {
    contents.S3Key = output["S3Key"];
  }
  return contents;
};

const deserializeAws_queryS3LocationNotInServiceRegionException = (
  output: any,
  context: __SerdeContext
): S3LocationNotInServiceRegionException => {
  let contents: any = {
    __type: "S3LocationNotInServiceRegionException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryS3SubscriptionRequiredException = (
  output: any,
  context: __SerdeContext
): S3SubscriptionRequiredException => {
  let contents: any = {
    __type: "S3SubscriptionRequiredException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySingleInstanceHealth = (
  output: any,
  context: __SerdeContext
): SingleInstanceHealth => {
  let contents: any = {
    __type: "SingleInstanceHealth",
    ApplicationMetrics: undefined,
    AvailabilityZone: undefined,
    Causes: undefined,
    Color: undefined,
    Deployment: undefined,
    HealthStatus: undefined,
    InstanceId: undefined,
    InstanceType: undefined,
    LaunchedAt: undefined,
    System: undefined
  };
  if (output["ApplicationMetrics"] !== undefined) {
    contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(
      output["ApplicationMetrics"],
      context
    );
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output.Causes === "") {
    contents.Causes = [];
  }
  if (
    output["Causes"] !== undefined &&
    output["Causes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Causes"]["member"] instanceof Array
        ? output["Causes"]["member"]
        : [output["Causes"]["member"]];
    contents.Causes = deserializeAws_queryCauses(wrappedItem, context);
  }
  if (output["Color"] !== undefined) {
    contents.Color = output["Color"];
  }
  if (output["Deployment"] !== undefined) {
    contents.Deployment = deserializeAws_queryDeployment(
      output["Deployment"],
      context
    );
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = output["InstanceId"];
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["LaunchedAt"] !== undefined) {
    contents.LaunchedAt = new Date(output["LaunchedAt"]);
  }
  if (output["System"] !== undefined) {
    contents.System = deserializeAws_querySystemStatus(
      output["System"],
      context
    );
  }
  return contents;
};

const deserializeAws_querySolutionStackDescription = (
  output: any,
  context: __SerdeContext
): SolutionStackDescription => {
  let contents: any = {
    __type: "SolutionStackDescription",
    PermittedFileTypes: undefined,
    SolutionStackName: undefined
  };
  if (output.PermittedFileTypes === "") {
    contents.PermittedFileTypes = [];
  }
  if (
    output["PermittedFileTypes"] !== undefined &&
    output["PermittedFileTypes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["PermittedFileTypes"]["member"] instanceof Array
        ? output["PermittedFileTypes"]["member"]
        : [output["PermittedFileTypes"]["member"]];
    contents.PermittedFileTypes = deserializeAws_querySolutionStackFileTypeList(
      wrappedItem,
      context
    );
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = output["SolutionStackName"];
  }
  return contents;
};

const deserializeAws_querySolutionStackFileTypeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_querySourceBuildInformation = (
  output: any,
  context: __SerdeContext
): SourceBuildInformation => {
  let contents: any = {
    __type: "SourceBuildInformation",
    SourceLocation: undefined,
    SourceRepository: undefined,
    SourceType: undefined
  };
  if (output["SourceLocation"] !== undefined) {
    contents.SourceLocation = output["SourceLocation"];
  }
  if (output["SourceRepository"] !== undefined) {
    contents.SourceRepository = output["SourceRepository"];
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = output["SourceType"];
  }
  return contents;
};

const deserializeAws_querySourceBundleDeletionException = (
  output: any,
  context: __SerdeContext
): SourceBundleDeletionException => {
  let contents: any = {
    __type: "SourceBundleDeletionException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryStatusCodes = (
  output: any,
  context: __SerdeContext
): StatusCodes => {
  let contents: any = {
    __type: "StatusCodes",
    Status2xx: undefined,
    Status3xx: undefined,
    Status4xx: undefined,
    Status5xx: undefined
  };
  if (output["Status2xx"] !== undefined) {
    contents.Status2xx = parseInt(output["Status2xx"]);
  }
  if (output["Status3xx"] !== undefined) {
    contents.Status3xx = parseInt(output["Status3xx"]);
  }
  if (output["Status4xx"] !== undefined) {
    contents.Status4xx = parseInt(output["Status4xx"]);
  }
  if (output["Status5xx"] !== undefined) {
    contents.Status5xx = parseInt(output["Status5xx"]);
  }
  return contents;
};

const deserializeAws_querySupportedAddonList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_querySupportedTierList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_querySystemStatus = (
  output: any,
  context: __SerdeContext
): SystemStatus => {
  let contents: any = {
    __type: "SystemStatus",
    CPUUtilization: undefined,
    LoadAverage: undefined
  };
  if (output["CPUUtilization"] !== undefined) {
    contents.CPUUtilization = deserializeAws_queryCPUUtilization(
      output["CPUUtilization"],
      context
    );
  }
  if (output.LoadAverage === "") {
    contents.LoadAverage = [];
  }
  if (
    output["LoadAverage"] !== undefined &&
    output["LoadAverage"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadAverage"]["member"] instanceof Array
        ? output["LoadAverage"]["member"]
        : [output["LoadAverage"]["member"]];
    contents.LoadAverage = deserializeAws_queryLoadAverage(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTag(entry, context)
  );
};

const deserializeAws_queryTooManyApplicationVersionsException = (
  output: any,
  context: __SerdeContext
): TooManyApplicationVersionsException => {
  let contents: any = {
    __type: "TooManyApplicationVersionsException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTooManyApplicationsException = (
  output: any,
  context: __SerdeContext
): TooManyApplicationsException => {
  let contents: any = {
    __type: "TooManyApplicationsException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTooManyBucketsException = (
  output: any,
  context: __SerdeContext
): TooManyBucketsException => {
  let contents: any = {
    __type: "TooManyBucketsException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTooManyConfigurationTemplatesException = (
  output: any,
  context: __SerdeContext
): TooManyConfigurationTemplatesException => {
  let contents: any = {
    __type: "TooManyConfigurationTemplatesException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTooManyEnvironmentsException = (
  output: any,
  context: __SerdeContext
): TooManyEnvironmentsException => {
  let contents: any = {
    __type: "TooManyEnvironmentsException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTooManyPlatformsException = (
  output: any,
  context: __SerdeContext
): TooManyPlatformsException => {
  let contents: any = {
    __type: "TooManyPlatformsException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTrigger = (
  output: any,
  context: __SerdeContext
): Trigger => {
  let contents: any = {
    __type: "Trigger",
    Name: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_queryTriggerList = (
  output: any,
  context: __SerdeContext
): Array<Trigger> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTrigger(entry, context)
  );
};

const deserializeAws_queryValidationMessage = (
  output: any,
  context: __SerdeContext
): ValidationMessage => {
  let contents: any = {
    __type: "ValidationMessage",
    Message: undefined,
    Namespace: undefined,
    OptionName: undefined,
    Severity: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output["OptionName"] !== undefined) {
    contents.OptionName = output["OptionName"];
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = output["Severity"];
  }
  return contents;
};

const deserializeAws_queryValidationMessagesList = (
  output: any,
  context: __SerdeContext
): Array<ValidationMessage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryValidationMessage(entry, context)
  );
};

const deserializeAws_queryVersionLabelsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries)
    .map(
      key =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(entries[key])
    )
    .join("&");
};

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
