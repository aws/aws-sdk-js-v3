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
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "../commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "../commands/CreateDeploymentStrategyCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
} from "../commands/CreateExtensionAssociationCommand";
import { CreateExtensionCommandInput, CreateExtensionCommandOutput } from "../commands/CreateExtensionCommand";
import {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "../commands/CreateHostedConfigurationVersionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "../commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "../commands/DeleteDeploymentStrategyCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteExtensionAssociationCommandInput,
  DeleteExtensionAssociationCommandOutput,
} from "../commands/DeleteExtensionAssociationCommand";
import { DeleteExtensionCommandInput, DeleteExtensionCommandOutput } from "../commands/DeleteExtensionCommand";
import {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "../commands/DeleteHostedConfigurationVersionCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "../commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "../commands/GetConfigurationProfileCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "../commands/GetDeploymentStrategyCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  GetExtensionAssociationCommandInput,
  GetExtensionAssociationCommandOutput,
} from "../commands/GetExtensionAssociationCommand";
import { GetExtensionCommandInput, GetExtensionCommandOutput } from "../commands/GetExtensionCommand";
import {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "../commands/GetHostedConfigurationVersionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "../commands/ListExtensionAssociationsCommand";
import { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "../commands/ListExtensionsCommand";
import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "../commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "../commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "../commands/UpdateDeploymentStrategyCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
} from "../commands/UpdateExtensionAssociationCommand";
import { UpdateExtensionCommandInput, UpdateExtensionCommandOutput } from "../commands/UpdateExtensionCommand";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "../commands/ValidateConfigurationCommand";
import { AppConfigServiceException as __BaseException } from "../models/AppConfigServiceException";
import {
  Action,
  ActionPoint,
  BadRequestException,
  ConflictException,
  DeletionProtectionSettings,
  DeploymentEvent,
  DeploymentStrategy,
  DeploymentSummary,
  InternalServerException,
  Monitor,
  Parameter,
  PayloadTooLargeException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Validator,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfigurationProfileCommand
 */
export const se_CreateConfigurationProfileCommand = async (
  input: CreateConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/configurationprofiles");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      KmsKeyIdentifier: [],
      LocationUri: [],
      Name: [],
      RetrievalRoleArn: [],
      Tags: (_) => _json(_),
      Type: [],
      Validators: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeploymentStrategyCommand
 */
export const se_CreateDeploymentStrategyCommand = async (
  input: CreateDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deploymentstrategies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeploymentDurationInMinutes: [],
      Description: [],
      FinalBakeTimeInMinutes: [],
      GrowthFactor: (_) => __serializeFloat(_),
      GrowthType: [],
      Name: [],
      ReplicateTo: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/environments");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Monitors: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateExtensionCommand
 */
export const se_CreateExtensionCommand = async (
  input: CreateExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_lvn]: [() => isSerializableHeaderValue(input[_LVN]), () => input[_LVN]!.toString()],
  });
  b.bp("/extensions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Actions: (_) => _json(_),
      Description: [],
      Name: [],
      Parameters: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateExtensionAssociationCommand
 */
export const se_CreateExtensionAssociationCommand = async (
  input: CreateExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/extensionassociations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExtensionIdentifier: [],
      ExtensionVersionNumber: [],
      Parameters: (_) => _json(_),
      ResourceIdentifier: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateHostedConfigurationVersionCommand
 */
export const se_CreateHostedConfigurationVersionCommand = async (
  input: CreateHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_CT] || "application/octet-stream",
    [_d]: input[_D]!,
    [_lvn]: [() => isSerializableHeaderValue(input[_LVN]), () => input[_LVN]!.toString()],
    [_v]: input[_VL]!,
  });
  b.bp("/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  let body: any;
  if (input.Content !== undefined) {
    body = input.Content;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfigurationProfileCommand
 */
export const se_DeleteConfigurationProfileCommand = async (
  input: DeleteConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xadpc]: input[_DPC]!,
  });
  b.bp("/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeploymentStrategyCommand
 */
export const se_DeleteDeploymentStrategyCommand = async (
  input: DeleteDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/deployementstrategies/{DeploymentStrategyId}");
  b.p("DeploymentStrategyId", () => input.DeploymentStrategyId!, "{DeploymentStrategyId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xadpc]: input[_DPC]!,
  });
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}");
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteExtensionCommand
 */
export const se_DeleteExtensionCommand = async (
  input: DeleteExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/extensions/{ExtensionIdentifier}");
  b.p("ExtensionIdentifier", () => input.ExtensionIdentifier!, "{ExtensionIdentifier}", false);
  const query: any = map({
    [_ve]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteExtensionAssociationCommand
 */
export const se_DeleteExtensionAssociationCommand = async (
  input: DeleteExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/extensionassociations/{ExtensionAssociationId}");
  b.p("ExtensionAssociationId", () => input.ExtensionAssociationId!, "{ExtensionAssociationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteHostedConfigurationVersionCommand
 */
export const se_DeleteHostedConfigurationVersionCommand = async (
  input: DeleteHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}"
  );
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationCommand
 */
export const se_GetConfigurationCommand = async (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{Application}/environments/{Environment}/configurations/{Configuration}");
  b.p("Application", () => input.Application!, "{Application}", false);
  b.p("Environment", () => input.Environment!, "{Environment}", false);
  b.p("Configuration", () => input.Configuration!, "{Configuration}", false);
  const query: any = map({
    [_ci]: [, __expectNonNull(input[_CI]!, `ClientId`)],
    [_ccv]: [, input[_CCV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationProfileCommand
 */
export const se_GetConfigurationProfileCommand = async (
  input: GetConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  b.p("DeploymentNumber", () => input.DeploymentNumber!.toString(), "{DeploymentNumber}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeploymentStrategyCommand
 */
export const se_GetDeploymentStrategyCommand = async (
  input: GetDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/deploymentstrategies/{DeploymentStrategyId}");
  b.p("DeploymentStrategyId", () => input.DeploymentStrategyId!, "{DeploymentStrategyId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExtensionCommand
 */
export const se_GetExtensionCommand = async (
  input: GetExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/extensions/{ExtensionIdentifier}");
  b.p("ExtensionIdentifier", () => input.ExtensionIdentifier!, "{ExtensionIdentifier}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExtensionAssociationCommand
 */
export const se_GetExtensionAssociationCommand = async (
  input: GetExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/extensionassociations/{ExtensionAssociationId}");
  b.p("ExtensionAssociationId", () => input.ExtensionAssociationId!, "{ExtensionAssociationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetHostedConfigurationVersionCommand
 */
export const se_GetHostedConfigurationVersionCommand = async (
  input: GetHostedConfigurationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}"
  );
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications");
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfigurationProfilesCommand
 */
export const se_ListConfigurationProfilesCommand = async (
  input: ListConfigurationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/configurationprofiles");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
    [_t]: [, input[_T]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}/deployments");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeploymentStrategiesCommand
 */
export const se_ListDeploymentStrategiesCommand = async (
  input: ListDeploymentStrategiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/deploymentstrategies");
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/environments");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExtensionAssociationsCommand
 */
export const se_ListExtensionAssociationsCommand = async (
  input: ListExtensionAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/extensionassociations");
  const query: any = map({
    [_ri]: [, input[_RI]!],
    [_ei]: [, input[_EI]!],
    [_evn]: [() => input.ExtensionVersionNumber !== void 0, () => input[_EVN]!.toString()],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExtensionsCommand
 */
export const se_ListExtensionsCommand = async (
  input: ListExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/extensions");
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
    [_n]: [, input[_N]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListHostedConfigurationVersionsCommand
 */
export const se_ListHostedConfigurationVersionsCommand = async (
  input: ListHostedConfigurationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
    [_vl]: [, input[_VL]!],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDeploymentCommand
 */
export const se_StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}/deployments");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationProfileId: [],
      ConfigurationVersion: [],
      DeploymentStrategyId: [],
      Description: [],
      DynamicExtensionParameters: (_) => _json(_),
      KmsKeyIdentifier: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopDeploymentCommand
 */
export const se_StopDeploymentCommand = async (
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ar]: [() => isSerializableHeaderValue(input[_AR]), () => input[_AR]!.toString()],
  });
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  b.p("DeploymentNumber", () => input.DeploymentNumber!.toString(), "{DeploymentNumber}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeletionProtection: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfigurationProfileCommand
 */
export const se_UpdateConfigurationProfileCommand = async (
  input: UpdateConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      KmsKeyIdentifier: [],
      Name: [],
      RetrievalRoleArn: [],
      Validators: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeploymentStrategyCommand
 */
export const se_UpdateDeploymentStrategyCommand = async (
  input: UpdateDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deploymentstrategies/{DeploymentStrategyId}");
  b.p("DeploymentStrategyId", () => input.DeploymentStrategyId!, "{DeploymentStrategyId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeploymentDurationInMinutes: [],
      Description: [],
      FinalBakeTimeInMinutes: [],
      GrowthFactor: (_) => __serializeFloat(_),
      GrowthType: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/environments/{EnvironmentId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("EnvironmentId", () => input.EnvironmentId!, "{EnvironmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Monitors: (_) => _json(_),
      Name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateExtensionCommand
 */
export const se_UpdateExtensionCommand = async (
  input: UpdateExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/extensions/{ExtensionIdentifier}");
  b.p("ExtensionIdentifier", () => input.ExtensionIdentifier!, "{ExtensionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Actions: (_) => _json(_),
      Description: [],
      Parameters: (_) => _json(_),
      VersionNumber: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateExtensionAssociationCommand
 */
export const se_UpdateExtensionAssociationCommand = async (
  input: UpdateExtensionAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/extensionassociations/{ExtensionAssociationId}");
  b.p("ExtensionAssociationId", () => input.ExtensionAssociationId!, "{ExtensionAssociationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Parameters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateConfigurationCommand
 */
export const se_ValidateConfigurationCommand = async (
  input: ValidateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("ConfigurationProfileId", () => input.ConfigurationProfileId!, "{ConfigurationProfileId}", false);
  const query: any = map({
    [_cv]: [, __expectNonNull(input[_CV]!, `ConfigurationVersion`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationProfileCommand
 */
export const de_CreateConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Description: __expectString,
    Id: __expectString,
    KmsKeyArn: __expectString,
    KmsKeyIdentifier: __expectString,
    LocationUri: __expectString,
    Name: __expectString,
    RetrievalRoleArn: __expectString,
    Type: __expectString,
    Validators: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentStrategyCommand
 */
export const de_CreateDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeploymentDurationInMinutes: __expectInt32,
    Description: __expectString,
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    Id: __expectString,
    Name: __expectString,
    ReplicateTo: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Monitors: _json,
    Name: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateExtensionCommand
 */
export const de_CreateExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Actions: _json,
    Arn: __expectString,
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Parameters: _json,
    VersionNumber: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateExtensionAssociationCommand
 */
export const de_CreateExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ExtensionArn: __expectString,
    ExtensionVersionNumber: __expectInt32,
    Id: __expectString,
    Parameters: _json,
    ResourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateHostedConfigurationVersionCommand
 */
export const de_CreateHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_AI]: [, output.headers[_ai]],
    [_CPI]: [, output.headers[_cpi]],
    [_VN]: [() => void 0 !== output.headers[_vn_], () => __strictParseInt32(output.headers[_vn_])],
    [_D]: [, output.headers[_d]],
    [_CT]: [, output.headers[_ct]],
    [_VL]: [, output.headers[_v]],
    [_KKA]: [, output.headers[_k]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfigurationProfileCommand
 */
export const de_DeleteConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDeploymentStrategyCommand
 */
export const de_DeleteDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
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
 * deserializeAws_restJson1DeleteExtensionCommand
 */
export const de_DeleteExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteExtensionAssociationCommand
 */
export const de_DeleteExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExtensionAssociationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteHostedConfigurationVersionCommand
 */
export const de_DeleteHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedConfigurationVersionCommandOutput> => {
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
 * deserializeAws_restJson1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeletionProtection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationCommand
 */
export const de_GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CV]: [, output.headers[_cv_]],
    [_CT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationProfileCommand
 */
export const de_GetConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Description: __expectString,
    Id: __expectString,
    KmsKeyArn: __expectString,
    KmsKeyIdentifier: __expectString,
    LocationUri: __expectString,
    Name: __expectString,
    RetrievalRoleArn: __expectString,
    Type: __expectString,
    Validators: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    AppliedExtensions: _json,
    CompletedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ConfigurationLocationUri: __expectString,
    ConfigurationName: __expectString,
    ConfigurationProfileId: __expectString,
    ConfigurationVersion: __expectString,
    DeploymentDurationInMinutes: __expectInt32,
    DeploymentNumber: __expectInt32,
    DeploymentStrategyId: __expectString,
    Description: __expectString,
    EnvironmentId: __expectString,
    EventLog: (_) => de_DeploymentEvents(_, context),
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    KmsKeyArn: __expectString,
    KmsKeyIdentifier: __expectString,
    PercentageComplete: __limitedParseFloat32,
    StartedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    State: __expectString,
    VersionLabel: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentStrategyCommand
 */
export const de_GetDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeploymentDurationInMinutes: __expectInt32,
    Description: __expectString,
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    Id: __expectString,
    Name: __expectString,
    ReplicateTo: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Monitors: _json,
    Name: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExtensionCommand
 */
export const de_GetExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Actions: _json,
    Arn: __expectString,
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Parameters: _json,
    VersionNumber: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExtensionAssociationCommand
 */
export const de_GetExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ExtensionArn: __expectString,
    ExtensionVersionNumber: __expectInt32,
    Id: __expectString,
    Parameters: _json,
    ResourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetHostedConfigurationVersionCommand
 */
export const de_GetHostedConfigurationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedConfigurationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_AI]: [, output.headers[_ai]],
    [_CPI]: [, output.headers[_cpi]],
    [_VN]: [() => void 0 !== output.headers[_vn_], () => __strictParseInt32(output.headers[_vn_])],
    [_D]: [, output.headers[_d]],
    [_CT]: [, output.headers[_ct]],
    [_VL]: [, output.headers[_v]],
    [_KKA]: [, output.headers[_k]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationProfilesCommand
 */
export const de_ListConfigurationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_DeploymentList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentStrategiesCommand
 */
export const de_ListDeploymentStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_DeploymentStrategyList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensionAssociationsCommand
 */
export const de_ListExtensionAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensionsCommand
 */
export const de_ListExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListHostedConfigurationVersionsCommand
 */
export const de_ListHostedConfigurationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDeploymentCommand
 */
export const de_StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    AppliedExtensions: _json,
    CompletedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ConfigurationLocationUri: __expectString,
    ConfigurationName: __expectString,
    ConfigurationProfileId: __expectString,
    ConfigurationVersion: __expectString,
    DeploymentDurationInMinutes: __expectInt32,
    DeploymentNumber: __expectInt32,
    DeploymentStrategyId: __expectString,
    Description: __expectString,
    EnvironmentId: __expectString,
    EventLog: (_) => de_DeploymentEvents(_, context),
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    KmsKeyArn: __expectString,
    KmsKeyIdentifier: __expectString,
    PercentageComplete: __limitedParseFloat32,
    StartedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    State: __expectString,
    VersionLabel: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopDeploymentCommand
 */
export const de_StopDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    AppliedExtensions: _json,
    CompletedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ConfigurationLocationUri: __expectString,
    ConfigurationName: __expectString,
    ConfigurationProfileId: __expectString,
    ConfigurationVersion: __expectString,
    DeploymentDurationInMinutes: __expectInt32,
    DeploymentNumber: __expectInt32,
    DeploymentStrategyId: __expectString,
    Description: __expectString,
    EnvironmentId: __expectString,
    EventLog: (_) => de_DeploymentEvents(_, context),
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    KmsKeyArn: __expectString,
    KmsKeyIdentifier: __expectString,
    PercentageComplete: __limitedParseFloat32,
    StartedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    State: __expectString,
    VersionLabel: __expectString,
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeletionProtection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationProfileCommand
 */
export const de_UpdateConfigurationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Description: __expectString,
    Id: __expectString,
    KmsKeyArn: __expectString,
    KmsKeyIdentifier: __expectString,
    LocationUri: __expectString,
    Name: __expectString,
    RetrievalRoleArn: __expectString,
    Type: __expectString,
    Validators: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeploymentStrategyCommand
 */
export const de_UpdateDeploymentStrategyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeploymentDurationInMinutes: __expectInt32,
    Description: __expectString,
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    Id: __expectString,
    Name: __expectString,
    ReplicateTo: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Monitors: _json,
    Name: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExtensionCommand
 */
export const de_UpdateExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Actions: _json,
    Arn: __expectString,
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Parameters: _json,
    VersionNumber: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExtensionAssociationCommand
 */
export const de_UpdateExtensionAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExtensionAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ExtensionArn: __expectString,
    ExtensionVersionNumber: __expectInt32,
    Id: __expectString,
    Parameters: _json,
    ResourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateConfigurationCommand
 */
export const de_ValidateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> => {
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfig#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfig#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appconfig#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfig#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appconfig#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.appconfig#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Details: (_) => _json(__expectUnion(_)),
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
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
    Message: __expectString,
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PayloadTooLargeExceptionRes
 */
const de_PayloadTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Limit: __limitedParseFloat32,
    Measure: __expectString,
    Message: __expectString,
    Size: __limitedParseFloat32,
  });
  Object.assign(contents, doc);
  const exception = new PayloadTooLargeException({
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
    Message: __expectString,
    ResourceName: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Action omitted.

// se_ActionList omitted.

// se_ActionsMap omitted.

// se_DeletionProtectionSettings omitted.

// se_DynamicParameterMap omitted.

// se_Monitor omitted.

// se_MonitorList omitted.

// se_Parameter omitted.

// se_ParameterMap omitted.

// se_ParameterValueMap omitted.

// se_TagMap omitted.

// se_Validator omitted.

// se_ValidatorList omitted.

// de_Action omitted.

// de_ActionInvocation omitted.

// de_ActionInvocations omitted.

// de_ActionList omitted.

// de_ActionsMap omitted.

// de_Application omitted.

// de_ApplicationList omitted.

// de_AppliedExtension omitted.

// de_AppliedExtensions omitted.

// de_BadRequestDetails omitted.

// de_ConfigurationProfileSummary omitted.

// de_ConfigurationProfileSummaryList omitted.

// de_DeletionProtectionSettings omitted.

/**
 * deserializeAws_restJson1DeploymentEvent
 */
const de_DeploymentEvent = (output: any, context: __SerdeContext): DeploymentEvent => {
  return take(output, {
    ActionInvocations: _json,
    Description: __expectString,
    EventType: __expectString,
    OccurredAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TriggeredBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentEvents
 */
const de_DeploymentEvents = (output: any, context: __SerdeContext): DeploymentEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentList
 */
const de_DeploymentList = (output: any, context: __SerdeContext): DeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentStrategy
 */
const de_DeploymentStrategy = (output: any, context: __SerdeContext): DeploymentStrategy => {
  return take(output, {
    DeploymentDurationInMinutes: __expectInt32,
    Description: __expectString,
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    Id: __expectString,
    Name: __expectString,
    ReplicateTo: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentStrategyList
 */
const de_DeploymentStrategyList = (output: any, context: __SerdeContext): DeploymentStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentSummary
 */
const de_DeploymentSummary = (output: any, context: __SerdeContext): DeploymentSummary => {
  return take(output, {
    CompletedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ConfigurationName: __expectString,
    ConfigurationVersion: __expectString,
    DeploymentDurationInMinutes: __expectInt32,
    DeploymentNumber: __expectInt32,
    FinalBakeTimeInMinutes: __expectInt32,
    GrowthFactor: __limitedParseFloat32,
    GrowthType: __expectString,
    PercentageComplete: __limitedParseFloat32,
    StartedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    State: __expectString,
    VersionLabel: __expectString,
  }) as any;
};

// de_Environment omitted.

// de_EnvironmentList omitted.

// de_ExtensionAssociationSummaries omitted.

// de_ExtensionAssociationSummary omitted.

// de_ExtensionSummaries omitted.

// de_ExtensionSummary omitted.

// de_HostedConfigurationVersionSummary omitted.

// de_HostedConfigurationVersionSummaryList omitted.

// de_InvalidConfigurationDetail omitted.

// de_InvalidConfigurationDetailList omitted.

// de_Monitor omitted.

// de_MonitorList omitted.

// de_Parameter omitted.

// de_ParameterMap omitted.

// de_ParameterValueMap omitted.

// de_TagMap omitted.

// de_Validator omitted.

// de_ValidatorList omitted.

// de_ValidatorTypeList omitted.

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

const _AI = "ApplicationId";
const _AR = "AllowRevert";
const _CCV = "ClientConfigurationVersion";
const _CI = "ClientId";
const _CPI = "ConfigurationProfileId";
const _CT = "ContentType";
const _CV = "ConfigurationVersion";
const _D = "Description";
const _DPC = "DeletionProtectionCheck";
const _EI = "ExtensionIdentifier";
const _EVN = "ExtensionVersionNumber";
const _KKA = "KmsKeyArn";
const _LVN = "LatestVersionNumber";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _RI = "ResourceIdentifier";
const _T = "Type";
const _TK = "TagKeys";
const _VL = "VersionLabel";
const _VN = "VersionNumber";
const _ai = "application-id";
const _ar = "allow-revert";
const _ccv = "client_configuration_version";
const _ci = "client_id";
const _cpi = "configuration-profile-id";
const _ct = "content-type";
const _cv = "configuration_version";
const _cv_ = "configuration-version";
const _d = "description";
const _ei = "extension_identifier";
const _evn = "extension_version_number";
const _k = "kmskeyarn";
const _lvn = "latest-version-number";
const _mr = "max_results";
const _n = "name";
const _nt = "next_token";
const _ri = "resource_identifier";
const _t = "type";
const _tK = "tagKeys";
const _v = "versionlabel";
const _ve = "version";
const _vl = "version_label";
const _vn = "version_number";
const _vn_ = "version-number";
const _xadpc = "x-amzn-deletion-protection-check";
