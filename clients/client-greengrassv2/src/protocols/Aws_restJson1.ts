// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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

import {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "../commands/AssociateServiceRoleToAccountCommand";
import {
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
} from "../commands/BatchAssociateClientDeviceWithCoreDeviceCommand";
import {
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
} from "../commands/BatchDisassociateClientDeviceFromCoreDeviceCommand";
import { CancelDeploymentCommandInput, CancelDeploymentCommandOutput } from "../commands/CancelDeploymentCommand";
import {
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "../commands/CreateComponentVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput } from "../commands/DeleteCoreDeviceCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "../commands/DescribeComponentCommand";
import {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "../commands/DisassociateServiceRoleFromAccountCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import {
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "../commands/GetComponentVersionArtifactCommand";
import {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "../commands/GetConnectivityInfoCommand";
import { GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput } from "../commands/GetCoreDeviceCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "../commands/GetServiceRoleForAccountCommand";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "../commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "../commands/ListComponentVersionsCommand";
import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "../commands/ListCoreDevicesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "../commands/ListEffectiveDeploymentsCommand";
import {
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "../commands/ListInstalledComponentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "../commands/ResolveComponentCandidatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "../commands/UpdateConnectivityInfoCommand";
import { GreengrassV2ServiceException as __BaseException } from "../models/GreengrassV2ServiceException";
import {
  AccessDeniedException,
  AssociateClientDeviceWithCoreDeviceEntry,
  AssociatedClientDevice,
  Component,
  ComponentCandidate,
  ComponentConfigurationUpdate,
  ComponentDependencyRequirement,
  ComponentDeploymentSpecification,
  ComponentLatestVersion,
  ComponentPlatform,
  ComponentRunWith,
  ConflictException,
  ConnectivityInfo,
  CoreDevice,
  Deployment,
  DeploymentComponentUpdatePolicy,
  DeploymentConfigurationValidationPolicy,
  DeploymentIoTJobConfiguration,
  DeploymentPolicies,
  DisassociateClientDeviceFromCoreDeviceEntry,
  EffectiveDeployment,
  InstalledComponent,
  InternalServerException,
  IoTJobAbortConfig,
  IoTJobAbortCriteria,
  IoTJobExecutionsRolloutConfig,
  IoTJobExponentialRolloutRate,
  IoTJobRateIncreaseCriteria,
  IoTJobTimeoutConfig,
  LambdaContainerParams,
  LambdaDeviceMount,
  LambdaEventSource,
  LambdaExecutionParameters,
  LambdaFunctionRecipeSource,
  LambdaLinuxProcessParams,
  LambdaVolumeMount,
  RequestAlreadyInProgressException,
  ResolvedComponentVersion,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SystemResourceLimits,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const se_AssociateServiceRoleToAccountCommand = async (
  input: AssociateServiceRoleToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/servicerole");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RoleArn: [, , `roleArn`],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand
 */
export const se_BatchAssociateClientDeviceWithCoreDeviceCommand = async (
  input: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand
 */
export const se_BatchDisassociateClientDeviceFromCoreDeviceCommand = async (
  input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelDeploymentCommand
 */
export const se_CancelDeploymentCommand = async (
  input: CancelDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/deployments/{deploymentId}/cancel");
  b.p("deploymentId", () => input.deploymentId!, "{deploymentId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateComponentVersionCommand
 */
export const se_CreateComponentVersionCommand = async (
  input: CreateComponentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/v2/createComponentVersion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      inlineRecipe: (_) => context.base64Encoder(_),
      lambdaFunction: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/v2/deployments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      components: (_) => se_ComponentDeploymentSpecifications(_, context),
      deploymentName: [],
      deploymentPolicies: (_) => _json(_),
      iotJobConfiguration: (_) => se_DeploymentIoTJobConfiguration(_, context),
      parentTargetArn: [],
      tags: (_) => _json(_),
      targetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/components/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCoreDeviceCommand
 */
export const se_DeleteCoreDeviceCommand = async (
  input: DeleteCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeploymentCommand
 */
export const se_DeleteDeploymentCommand = async (
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/deployments/{deploymentId}");
  b.p("deploymentId", () => input.deploymentId!, "{deploymentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeComponentCommand
 */
export const se_DescribeComponentCommand = async (
  input: DescribeComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/components/{arn}/metadata");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const se_DisassociateServiceRoleFromAccountCommand = async (
  input: DisassociateServiceRoleFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/servicerole");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/components/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_rOF]: [, input[_rOF]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetComponentVersionArtifactCommand
 */
export const se_GetComponentVersionArtifactCommand = async (
  input: GetComponentVersionArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaiet]: input[_iET]!,
  });
  b.bp("/greengrass/v2/components/{arn}/artifacts/{artifactName+}");
  b.p("arn", () => input.arn!, "{arn}", false);
  b.p("artifactName", () => input.artifactName!, "{artifactName+}", true);
  const query: any = map({
    [_sET]: [, input[_sET]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectivityInfoCommand
 */
export const se_GetConnectivityInfoCommand = async (
  input: GetConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/things/{thingName}/connectivityInfo");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreDeviceCommand
 */
export const se_GetCoreDeviceCommand = async (
  input: GetCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
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
  b.bp("/greengrass/v2/deployments/{deploymentId}");
  b.p("deploymentId", () => input.deploymentId!, "{deploymentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const se_GetServiceRoleForAccountCommand = async (
  input: GetServiceRoleForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/servicerole");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand
 */
export const se_ListClientDevicesAssociatedWithCoreDeviceCommand = async (
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/components");
  const query: any = map({
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListComponentVersionsCommand
 */
export const se_ListComponentVersionsCommand = async (
  input: ListComponentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/components/{arn}/versions");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoreDevicesCommand
 */
export const se_ListCoreDevicesCommand = async (
  input: ListCoreDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/coreDevices");
  const query: any = map({
    [_tGA]: [, input[_tGA]!],
    [_st]: [, input[_st]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_r]: [, input[_r]!],
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
  b.bp("/greengrass/v2/deployments");
  const query: any = map({
    [_tA]: [, input[_tA]!],
    [_hF]: [, input[_hF]!],
    [_pTA]: [, input[_pTA]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEffectiveDeploymentsCommand
 */
export const se_ListEffectiveDeploymentsCommand = async (
  input: ListEffectiveDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInstalledComponentsCommand
 */
export const se_ListInstalledComponentsCommand = async (
  input: ListInstalledComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents");
  b.p("coreDeviceThingName", () => input.coreDeviceThingName!, "{coreDeviceThingName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_tF]: [, input[_tF]!],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResolveComponentCandidatesCommand
 */
export const se_ResolveComponentCandidatesCommand = async (
  input: ResolveComponentCandidatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/v2/resolveComponentCandidates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentCandidates: (_) => _json(_),
      platform: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const se_UpdateConnectivityInfoCommand = async (
  input: UpdateConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/things/{thingName}/connectivityInfo");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectivityInfo: [, (_) => se_connectivityInfoList(_, context), `connectivityInfo`],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const de_AssociateServiceRoleToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associatedAt: [, __expectString, `AssociatedAt`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand
 */
export const de_BatchAssociateClientDeviceWithCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand
 */
export const de_BatchDisassociateClientDeviceFromCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelDeploymentCommand
 */
export const de_CancelDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentVersionCommand
 */
export const de_CreateComponentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    componentName: __expectString,
    componentVersion: __expectString,
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deploymentId: __expectString,
    iotJobArn: __expectString,
    iotJobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
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
 * deserializeAws_restJson1DeleteCoreDeviceCommand
 */
export const de_DeleteCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDeviceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDeploymentCommand
 */
export const de_DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
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
 * deserializeAws_restJson1DescribeComponentCommand
 */
export const de_DescribeComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    componentName: __expectString,
    componentVersion: __expectString,
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    platforms: _json,
    publisher: __expectString,
    status: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const de_DisassociateServiceRoleFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    disassociatedAt: [, __expectString, `DisassociatedAt`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentCommand
 */
export const de_GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recipe: context.base64Decoder,
    recipeOutputFormat: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentVersionArtifactCommand
 */
export const de_GetComponentVersionArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentVersionArtifactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    preSignedUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectivityInfoCommand
 */
export const de_GetConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectivityInfo: [, (_) => de_connectivityInfoList(_, context), `ConnectivityInfo`],
    message: [, __expectString, `Message`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreDeviceCommand
 */
export const de_GetCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    architecture: __expectString,
    coreDeviceThingName: __expectString,
    coreVersion: __expectString,
    lastStatusUpdateTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    platform: __expectString,
    runtime: __expectString,
    status: __expectString,
    tags: _json,
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
    components: (_) => de_ComponentDeploymentSpecifications(_, context),
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    deploymentName: __expectString,
    deploymentPolicies: _json,
    deploymentStatus: __expectString,
    iotJobArn: __expectString,
    iotJobConfiguration: (_) => de_DeploymentIoTJobConfiguration(_, context),
    iotJobId: __expectString,
    isLatestForTarget: __expectBoolean,
    parentTargetArn: __expectString,
    revisionId: __expectString,
    tags: _json,
    targetArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const de_GetServiceRoleForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associatedAt: [, __expectString, `AssociatedAt`],
    roleArn: [, __expectString, `RoleArn`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand
 */
export const de_ListClientDevicesAssociatedWithCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associatedClientDevices: (_) => de_AssociatedClientDeviceList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    components: (_) => de_ComponentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentVersionsCommand
 */
export const de_ListComponentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentVersions: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreDevicesCommand
 */
export const de_ListCoreDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    coreDevices: (_) => de_CoreDevicesList(_, context),
    nextToken: __expectString,
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
    deployments: (_) => de_DeploymentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEffectiveDeploymentsCommand
 */
export const de_ListEffectiveDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEffectiveDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    effectiveDeployments: (_) => de_EffectiveDeploymentsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInstalledComponentsCommand
 */
export const de_ListInstalledComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstalledComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    installedComponents: (_) => de_InstalledComponentList(_, context),
    nextToken: __expectString,
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResolveComponentCandidatesCommand
 */
export const de_ResolveComponentCandidatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveComponentCandidatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resolvedComponentVersions: (_) => de_ResolvedComponentVersionsList(_, context),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const de_UpdateConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: [, __expectString, `Message`],
    version: [, __expectString, `Version`],
  });
  Object.assign(contents, doc);
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
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "RequestAlreadyInProgressException":
    case "com.amazonaws.greengrassv2#RequestAlreadyInProgressException":
      throw await de_RequestAlreadyInProgressExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.greengrassv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
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
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestAlreadyInProgressExceptionRes
 */
const de_RequestAlreadyInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestAlreadyInProgressException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestAlreadyInProgressException({
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
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fields: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AssociateClientDeviceWithCoreDeviceEntry omitted.

// se_AssociateClientDeviceWithCoreDeviceEntryList omitted.

// se_ComponentCandidate omitted.

// se_ComponentCandidateList omitted.

// se_ComponentConfigurationPathList omitted.

// se_ComponentConfigurationUpdate omitted.

// se_ComponentDependencyMap omitted.

// se_ComponentDependencyRequirement omitted.

/**
 * serializeAws_restJson1ComponentDeploymentSpecification
 */
const se_ComponentDeploymentSpecification = (input: ComponentDeploymentSpecification, context: __SerdeContext): any => {
  return take(input, {
    componentVersion: [],
    configurationUpdate: _json,
    runWith: (_) => se_ComponentRunWith(_, context),
  });
};

/**
 * serializeAws_restJson1ComponentDeploymentSpecifications
 */
const se_ComponentDeploymentSpecifications = (
  input: Record<string, ComponentDeploymentSpecification>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentDeploymentSpecification(value, context);
    return acc;
  }, {});
};

// se_ComponentPlatform omitted.

// se_ComponentPlatformList omitted.

/**
 * serializeAws_restJson1ComponentRunWith
 */
const se_ComponentRunWith = (input: ComponentRunWith, context: __SerdeContext): any => {
  return take(input, {
    posixUser: [],
    systemResourceLimits: (_) => se_SystemResourceLimits(_, context),
    windowsUser: [],
  });
};

// se_ComponentVersionRequirementMap omitted.

/**
 * serializeAws_restJson1ConnectivityInfo
 */
const se_ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return take(input, {
    HostAddress: [, , `hostAddress`],
    Id: [, , `id`],
    Metadata: [, , `metadata`],
    PortNumber: [, , `portNumber`],
  });
};

/**
 * serializeAws_restJson1connectivityInfoList
 */
const se_connectivityInfoList = (input: ConnectivityInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConnectivityInfo(entry, context);
    });
};

// se_DeploymentComponentUpdatePolicy omitted.

// se_DeploymentConfigurationValidationPolicy omitted.

/**
 * serializeAws_restJson1DeploymentIoTJobConfiguration
 */
const se_DeploymentIoTJobConfiguration = (input: DeploymentIoTJobConfiguration, context: __SerdeContext): any => {
  return take(input, {
    abortConfig: (_) => se_IoTJobAbortConfig(_, context),
    jobExecutionsRolloutConfig: (_) => se_IoTJobExecutionsRolloutConfig(_, context),
    timeoutConfig: _json,
  });
};

// se_DeploymentPolicies omitted.

// se_DisassociateClientDeviceFromCoreDeviceEntry omitted.

// se_DisassociateClientDeviceFromCoreDeviceEntryList omitted.

/**
 * serializeAws_restJson1IoTJobAbortConfig
 */
const se_IoTJobAbortConfig = (input: IoTJobAbortConfig, context: __SerdeContext): any => {
  return take(input, {
    criteriaList: (_) => se_IoTJobAbortCriteriaList(_, context),
  });
};

/**
 * serializeAws_restJson1IoTJobAbortCriteria
 */
const se_IoTJobAbortCriteria = (input: IoTJobAbortCriteria, context: __SerdeContext): any => {
  return take(input, {
    action: [],
    failureType: [],
    minNumberOfExecutedThings: [],
    thresholdPercentage: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1IoTJobAbortCriteriaList
 */
const se_IoTJobAbortCriteriaList = (input: IoTJobAbortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IoTJobAbortCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1IoTJobExecutionsRolloutConfig
 */
const se_IoTJobExecutionsRolloutConfig = (input: IoTJobExecutionsRolloutConfig, context: __SerdeContext): any => {
  return take(input, {
    exponentialRate: (_) => se_IoTJobExponentialRolloutRate(_, context),
    maximumPerMinute: [],
  });
};

/**
 * serializeAws_restJson1IoTJobExponentialRolloutRate
 */
const se_IoTJobExponentialRolloutRate = (input: IoTJobExponentialRolloutRate, context: __SerdeContext): any => {
  return take(input, {
    baseRatePerMinute: [],
    incrementFactor: __serializeFloat,
    rateIncreaseCriteria: _json,
  });
};

// se_IoTJobRateIncreaseCriteria omitted.

// se_IoTJobTimeoutConfig omitted.

// se_LambdaContainerParams omitted.

// se_LambdaDeviceList omitted.

// se_LambdaDeviceMount omitted.

// se_LambdaEnvironmentVariables omitted.

// se_LambdaEventSource omitted.

// se_LambdaEventSourceList omitted.

// se_LambdaExecArgsList omitted.

// se_LambdaExecutionParameters omitted.

// se_LambdaFunctionRecipeSource omitted.

// se_LambdaLinuxProcessParams omitted.

// se_LambdaVolumeList omitted.

// se_LambdaVolumeMount omitted.

// se_PlatformAttributesMap omitted.

/**
 * serializeAws_restJson1SystemResourceLimits
 */
const se_SystemResourceLimits = (input: SystemResourceLimits, context: __SerdeContext): any => {
  return take(input, {
    cpus: __serializeFloat,
    memory: [],
  });
};

// se_TagMap omitted.

// de_AssociateClientDeviceWithCoreDeviceErrorEntry omitted.

// de_AssociateClientDeviceWithCoreDeviceErrorList omitted.

/**
 * deserializeAws_restJson1AssociatedClientDevice
 */
const de_AssociatedClientDevice = (output: any, context: __SerdeContext): AssociatedClientDevice => {
  return take(output, {
    associationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    thingName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssociatedClientDeviceList
 */
const de_AssociatedClientDeviceList = (output: any, context: __SerdeContext): AssociatedClientDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociatedClientDevice(entry, context);
    });
  return retVal;
};

// de_CloudComponentStatus omitted.

/**
 * deserializeAws_restJson1Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return take(output, {
    arn: __expectString,
    componentName: __expectString,
    latestVersion: (_: any) => de_ComponentLatestVersion(_, context),
  }) as any;
};

// de_ComponentConfigurationPathList omitted.

// de_ComponentConfigurationUpdate omitted.

/**
 * deserializeAws_restJson1ComponentDeploymentSpecification
 */
const de_ComponentDeploymentSpecification = (
  output: any,
  context: __SerdeContext
): ComponentDeploymentSpecification => {
  return take(output, {
    componentVersion: __expectString,
    configurationUpdate: _json,
    runWith: (_: any) => de_ComponentRunWith(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentDeploymentSpecifications
 */
const de_ComponentDeploymentSpecifications = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentDeploymentSpecification> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentDeploymentSpecification>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_ComponentDeploymentSpecification(value, context);
      return acc;
    },
    {} as Record<string, ComponentDeploymentSpecification>
  );
};

/**
 * deserializeAws_restJson1ComponentLatestVersion
 */
const de_ComponentLatestVersion = (output: any, context: __SerdeContext): ComponentLatestVersion => {
  return take(output, {
    arn: __expectString,
    componentVersion: __expectString,
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    platforms: _json,
    publisher: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentList
 */
const de_ComponentList = (output: any, context: __SerdeContext): Component[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Component(entry, context);
    });
  return retVal;
};

// de_ComponentPlatform omitted.

// de_ComponentPlatformList omitted.

/**
 * deserializeAws_restJson1ComponentRunWith
 */
const de_ComponentRunWith = (output: any, context: __SerdeContext): ComponentRunWith => {
  return take(output, {
    posixUser: __expectString,
    systemResourceLimits: (_: any) => de_SystemResourceLimits(_, context),
    windowsUser: __expectString,
  }) as any;
};

// de_ComponentVersionList omitted.

// de_ComponentVersionListItem omitted.

/**
 * deserializeAws_restJson1ConnectivityInfo
 */
const de_ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return take(output, {
    hostAddress: [, __expectString, `HostAddress`],
    id: [, __expectString, `Id`],
    metadata: [, __expectString, `Metadata`],
    portNumber: [, __expectInt32, `PortNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1connectivityInfoList
 */
const de_connectivityInfoList = (output: any, context: __SerdeContext): ConnectivityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectivityInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreDevice
 */
const de_CoreDevice = (output: any, context: __SerdeContext): CoreDevice => {
  return take(output, {
    architecture: __expectString,
    coreDeviceThingName: __expectString,
    lastStatusUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    platform: __expectString,
    runtime: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CoreDevicesList
 */
const de_CoreDevicesList = (output: any, context: __SerdeContext): CoreDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CoreDevice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return take(output, {
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    deploymentName: __expectString,
    deploymentStatus: __expectString,
    isLatestForTarget: __expectBoolean,
    parentTargetArn: __expectString,
    revisionId: __expectString,
    targetArn: __expectString,
  }) as any;
};

// de_DeploymentComponentUpdatePolicy omitted.

// de_DeploymentConfigurationValidationPolicy omitted.

/**
 * deserializeAws_restJson1DeploymentIoTJobConfiguration
 */
const de_DeploymentIoTJobConfiguration = (output: any, context: __SerdeContext): DeploymentIoTJobConfiguration => {
  return take(output, {
    abortConfig: (_: any) => de_IoTJobAbortConfig(_, context),
    jobExecutionsRolloutConfig: (_: any) => de_IoTJobExecutionsRolloutConfig(_, context),
    timeoutConfig: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentList
 */
const de_DeploymentList = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Deployment(entry, context);
    });
  return retVal;
};

// de_DeploymentPolicies omitted.

// de_DisassociateClientDeviceFromCoreDeviceErrorEntry omitted.

// de_DisassociateClientDeviceFromCoreDeviceErrorList omitted.

/**
 * deserializeAws_restJson1EffectiveDeployment
 */
const de_EffectiveDeployment = (output: any, context: __SerdeContext): EffectiveDeployment => {
  return take(output, {
    coreDeviceExecutionStatus: __expectString,
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    deploymentName: __expectString,
    description: __expectString,
    iotJobArn: __expectString,
    iotJobId: __expectString,
    modifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    reason: __expectString,
    statusDetails: _json,
    targetArn: __expectString,
  }) as any;
};

// de_EffectiveDeploymentErrorStack omitted.

// de_EffectiveDeploymentErrorTypeList omitted.

/**
 * deserializeAws_restJson1EffectiveDeploymentsList
 */
const de_EffectiveDeploymentsList = (output: any, context: __SerdeContext): EffectiveDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EffectiveDeployment(entry, context);
    });
  return retVal;
};

// de_EffectiveDeploymentStatusDetails omitted.

/**
 * deserializeAws_restJson1InstalledComponent
 */
const de_InstalledComponent = (output: any, context: __SerdeContext): InstalledComponent => {
  return take(output, {
    componentName: __expectString,
    componentVersion: __expectString,
    isRoot: __expectBoolean,
    lastInstallationSource: __expectString,
    lastReportedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStatusChangeTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleState: __expectString,
    lifecycleStateDetails: __expectString,
    lifecycleStatusCodes: _json,
  }) as any;
};

// de_InstalledComponentLifecycleStatusCodeList omitted.

/**
 * deserializeAws_restJson1InstalledComponentList
 */
const de_InstalledComponentList = (output: any, context: __SerdeContext): InstalledComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstalledComponent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IoTJobAbortConfig
 */
const de_IoTJobAbortConfig = (output: any, context: __SerdeContext): IoTJobAbortConfig => {
  return take(output, {
    criteriaList: (_: any) => de_IoTJobAbortCriteriaList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1IoTJobAbortCriteria
 */
const de_IoTJobAbortCriteria = (output: any, context: __SerdeContext): IoTJobAbortCriteria => {
  return take(output, {
    action: __expectString,
    failureType: __expectString,
    minNumberOfExecutedThings: __expectInt32,
    thresholdPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1IoTJobAbortCriteriaList
 */
const de_IoTJobAbortCriteriaList = (output: any, context: __SerdeContext): IoTJobAbortCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IoTJobAbortCriteria(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IoTJobExecutionsRolloutConfig
 */
const de_IoTJobExecutionsRolloutConfig = (output: any, context: __SerdeContext): IoTJobExecutionsRolloutConfig => {
  return take(output, {
    exponentialRate: (_: any) => de_IoTJobExponentialRolloutRate(_, context),
    maximumPerMinute: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1IoTJobExponentialRolloutRate
 */
const de_IoTJobExponentialRolloutRate = (output: any, context: __SerdeContext): IoTJobExponentialRolloutRate => {
  return take(output, {
    baseRatePerMinute: __expectInt32,
    incrementFactor: __limitedParseDouble,
    rateIncreaseCriteria: _json,
  }) as any;
};

// de_IoTJobRateIncreaseCriteria omitted.

// de_IoTJobTimeoutConfig omitted.

// de_PlatformAttributesMap omitted.

/**
 * deserializeAws_restJson1ResolvedComponentVersion
 */
const de_ResolvedComponentVersion = (output: any, context: __SerdeContext): ResolvedComponentVersion => {
  return take(output, {
    arn: __expectString,
    componentName: __expectString,
    componentVersion: __expectString,
    message: __expectString,
    recipe: context.base64Decoder,
    vendorGuidance: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResolvedComponentVersionsList
 */
const de_ResolvedComponentVersionsList = (output: any, context: __SerdeContext): ResolvedComponentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResolvedComponentVersion(entry, context);
    });
  return retVal;
};

// de_StringMap omitted.

/**
 * deserializeAws_restJson1SystemResourceLimits
 */
const de_SystemResourceLimits = (output: any, context: __SerdeContext): SystemResourceLimits => {
  return take(output, {
    cpus: __limitedParseDouble,
    memory: __expectLong,
  }) as any;
};

// de_TagMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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

const _hF = "historyFilter";
const _iET = "iotEndpointType";
const _mR = "maxResults";
const _nT = "nextToken";
const _pTA = "parentTargetArn";
const _r = "runtime";
const _rAS = "retryAfterSeconds";
const _rOF = "recipeOutputFormat";
const _ra = "retry-after";
const _s = "scope";
const _sET = "s3EndpointType";
const _st = "status";
const _tA = "targetArn";
const _tF = "topologyFilter";
const _tGA = "thingGroupArn";
const _tK = "tagKeys";
const _xaiet = "x-amz-iot-endpoint-type";
