// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  convertMap,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "../commands/CreateApiKeyCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "../commands/CreateAuthorizerCommand";
import {
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "../commands/CreateBasePathMappingCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import {
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "../commands/CreateDocumentationPartCommand";
import {
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "../commands/CreateDocumentationVersionCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "../commands/CreateDomainNameCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import {
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "../commands/CreateRequestValidatorCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "../commands/CreateResourceCommand";
import { CreateRestApiCommandInput, CreateRestApiCommandOutput } from "../commands/CreateRestApiCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "../commands/CreateStageCommand";
import { CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput } from "../commands/CreateUsagePlanCommand";
import { CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput } from "../commands/CreateUsagePlanKeyCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "../commands/CreateVpcLinkCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "../commands/DeleteApiKeyCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "../commands/DeleteAuthorizerCommand";
import {
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "../commands/DeleteBasePathMappingCommand";
import {
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "../commands/DeleteClientCertificateCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import {
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "../commands/DeleteDocumentationPartCommand";
import {
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "../commands/DeleteDocumentationVersionCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "../commands/DeleteDomainNameCommand";
import {
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "../commands/DeleteGatewayResponseCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "../commands/DeleteIntegrationResponseCommand";
import { DeleteMethodCommandInput, DeleteMethodCommandOutput } from "../commands/DeleteMethodCommand";
import {
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "../commands/DeleteMethodResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import {
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "../commands/DeleteRequestValidatorCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "../commands/DeleteResourceCommand";
import { DeleteRestApiCommandInput, DeleteRestApiCommandOutput } from "../commands/DeleteRestApiCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "../commands/DeleteStageCommand";
import { DeleteUsagePlanCommandInput, DeleteUsagePlanCommandOutput } from "../commands/DeleteUsagePlanCommand";
import { DeleteUsagePlanKeyCommandInput, DeleteUsagePlanKeyCommandOutput } from "../commands/DeleteUsagePlanKeyCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "../commands/DeleteVpcLinkCommand";
import {
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "../commands/FlushStageAuthorizersCacheCommand";
import { FlushStageCacheCommandInput, FlushStageCacheCommandOutput } from "../commands/FlushStageCacheCommand";
import {
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "../commands/GenerateClientCertificateCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "../commands/GetAccountCommand";
import { GetApiKeyCommandInput, GetApiKeyCommandOutput } from "../commands/GetApiKeyCommand";
import { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "../commands/GetApiKeysCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "../commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "../commands/GetAuthorizersCommand";
import { GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput } from "../commands/GetBasePathMappingCommand";
import {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "../commands/GetBasePathMappingsCommand";
import {
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "../commands/GetClientCertificateCommand";
import {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "../commands/GetClientCertificatesCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import {
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "../commands/GetDocumentationPartCommand";
import {
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "../commands/GetDocumentationPartsCommand";
import {
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "../commands/GetDocumentationVersionCommand";
import {
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "../commands/GetDocumentationVersionsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "../commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "../commands/GetDomainNamesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "../commands/GetExportCommand";
import { GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput } from "../commands/GetGatewayResponseCommand";
import {
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "../commands/GetGatewayResponsesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "../commands/GetIntegrationResponseCommand";
import { GetMethodCommandInput, GetMethodCommandOutput } from "../commands/GetMethodCommand";
import { GetMethodResponseCommandInput, GetMethodResponseCommandOutput } from "../commands/GetMethodResponseCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "../commands/GetModelCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "../commands/GetModelTemplateCommand";
import {
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "../commands/GetRequestValidatorCommand";
import {
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "../commands/GetRequestValidatorsCommand";
import { GetResourceCommandInput, GetResourceCommandOutput } from "../commands/GetResourceCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "../commands/GetResourcesCommand";
import { GetRestApiCommandInput, GetRestApiCommandOutput } from "../commands/GetRestApiCommand";
import { GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand";
import { GetSdkCommandInput, GetSdkCommandOutput } from "../commands/GetSdkCommand";
import { GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "../commands/GetSdkTypeCommand";
import { GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "../commands/GetSdkTypesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "../commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetUsageCommandInput, GetUsageCommandOutput } from "../commands/GetUsageCommand";
import { GetUsagePlanCommandInput, GetUsagePlanCommandOutput } from "../commands/GetUsagePlanCommand";
import { GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput } from "../commands/GetUsagePlanKeyCommand";
import { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput } from "../commands/GetUsagePlanKeysCommand";
import { GetUsagePlansCommandInput, GetUsagePlansCommandOutput } from "../commands/GetUsagePlansCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "../commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { ImportApiKeysCommandInput, ImportApiKeysCommandOutput } from "../commands/ImportApiKeysCommand";
import {
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "../commands/ImportDocumentationPartsCommand";
import { ImportRestApiCommandInput, ImportRestApiCommandOutput } from "../commands/ImportRestApiCommand";
import { PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput } from "../commands/PutGatewayResponseCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "../commands/PutIntegrationCommand";
import {
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "../commands/PutIntegrationResponseCommand";
import { PutMethodCommandInput, PutMethodCommandOutput } from "../commands/PutMethodCommand";
import { PutMethodResponseCommandInput, PutMethodResponseCommandOutput } from "../commands/PutMethodResponseCommand";
import { PutRestApiCommandInput, PutRestApiCommandOutput } from "../commands/PutRestApiCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "../commands/TestInvokeAuthorizerCommand";
import { TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput } from "../commands/TestInvokeMethodCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "../commands/UpdateAccountCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "../commands/UpdateApiKeyCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "../commands/UpdateAuthorizerCommand";
import {
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "../commands/UpdateBasePathMappingCommand";
import {
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "../commands/UpdateClientCertificateCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "../commands/UpdateDeploymentCommand";
import {
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "../commands/UpdateDocumentationPartCommand";
import {
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "../commands/UpdateDocumentationVersionCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "../commands/UpdateDomainNameCommand";
import {
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "../commands/UpdateGatewayResponseCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "../commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "../commands/UpdateIntegrationResponseCommand";
import { UpdateMethodCommandInput, UpdateMethodCommandOutput } from "../commands/UpdateMethodCommand";
import {
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "../commands/UpdateMethodResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "../commands/UpdateModelCommand";
import {
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "../commands/UpdateRequestValidatorCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "../commands/UpdateResourceCommand";
import { UpdateRestApiCommandInput, UpdateRestApiCommandOutput } from "../commands/UpdateRestApiCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "../commands/UpdateStageCommand";
import { UpdateUsageCommandInput, UpdateUsageCommandOutput } from "../commands/UpdateUsageCommand";
import { UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput } from "../commands/UpdateUsagePlanCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "../commands/UpdateVpcLinkCommand";
import { APIGatewayServiceException as __BaseException } from "../models/APIGatewayServiceException";
import {
  AccessLogSettings,
  ApiKey,
  ApiStage,
  Authorizer,
  BadRequestException,
  BasePathMapping,
  CanarySettings,
  ClientCertificate,
  ConflictException,
  Deployment,
  DeploymentCanarySettings,
  DocumentationPart,
  DocumentationPartLocation,
  DocumentationVersion,
  DomainName,
  EndpointConfiguration,
  EndpointType,
  GatewayResponse,
  Integration,
  IntegrationResponse,
  LimitExceededException,
  Method,
  MethodResponse,
  MethodSetting,
  MethodSnapshot,
  Model,
  MutualTlsAuthentication,
  MutualTlsAuthenticationInput,
  NotFoundException,
  PatchOperation,
  QuotaSettings,
  RequestValidator,
  Resource,
  RestApi,
  SdkConfigurationProperty,
  SdkType,
  ServiceUnavailableException,
  Stage,
  StageKey,
  ThrottleSettings,
  TlsConfig,
  TooManyRequestsException,
  UnauthorizedException,
  UsagePlan,
  UsagePlanKey,
  VpcLink,
} from "../models/models_0";

export const serializeAws_restJson1CreateApiKeyCommand = async (
  input: CreateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apikeys";
  let body: any;
  body = JSON.stringify({
    ...(input.customerId != null && { customerId: input.customerId }),
    ...(input.description != null && { description: input.description }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.generateDistinctId != null && { generateDistinctId: input.generateDistinctId }),
    ...(input.name != null && { name: input.name }),
    ...(input.stageKeys != null && { stageKeys: serializeAws_restJson1ListOfStageKeys(input.stageKeys, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.value != null && { value: input.value }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAuthorizerCommand = async (
  input: CreateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/authorizers";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.authType != null && { authType: input.authType }),
    ...(input.authorizerCredentials != null && { authorizerCredentials: input.authorizerCredentials }),
    ...(input.authorizerResultTtlInSeconds != null && {
      authorizerResultTtlInSeconds: input.authorizerResultTtlInSeconds,
    }),
    ...(input.authorizerUri != null && { authorizerUri: input.authorizerUri }),
    ...(input.identitySource != null && { identitySource: input.identitySource }),
    ...(input.identityValidationExpression != null && {
      identityValidationExpression: input.identityValidationExpression,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.providerARNs != null && { providerARNs: serializeAws_restJson1ListOfARNs(input.providerARNs, context) }),
    ...(input.type != null && { type: input.type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateBasePathMappingCommand = async (
  input: CreateBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domainnames/{domainName}/basepathmappings";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.basePath != null && { basePath: input.basePath }),
    ...(input.restApiId != null && { restApiId: input.restApiId }),
    ...(input.stage != null && { stage: input.stage }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.cacheClusterEnabled != null && { cacheClusterEnabled: input.cacheClusterEnabled }),
    ...(input.cacheClusterSize != null && { cacheClusterSize: input.cacheClusterSize }),
    ...(input.canarySettings != null && {
      canarySettings: serializeAws_restJson1DeploymentCanarySettings(input.canarySettings, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.stageDescription != null && { stageDescription: input.stageDescription }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.tracingEnabled != null && { tracingEnabled: input.tracingEnabled }),
    ...(input.variables != null && { variables: serializeAws_restJson1MapOfStringToString(input.variables, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDocumentationPartCommand = async (
  input: CreateDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/documentation/parts";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.location != null && {
      location: serializeAws_restJson1DocumentationPartLocation(input.location, context),
    }),
    ...(input.properties != null && { properties: input.properties }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDocumentationVersionCommand = async (
  input: CreateDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.documentationVersion != null && { documentationVersion: input.documentationVersion }),
    ...(input.stageName != null && { stageName: input.stageName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDomainNameCommand = async (
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domainnames";
  let body: any;
  body = JSON.stringify({
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
    ...(input.certificateBody != null && { certificateBody: input.certificateBody }),
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.certificatePrivateKey != null && { certificatePrivateKey: input.certificatePrivateKey }),
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.endpointConfiguration != null && {
      endpointConfiguration: serializeAws_restJson1EndpointConfiguration(input.endpointConfiguration, context),
    }),
    ...(input.mutualTlsAuthentication != null && {
      mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
        input.mutualTlsAuthentication,
        context
      ),
    }),
    ...(input.ownershipVerificationCertificateArn != null && {
      ownershipVerificationCertificateArn: input.ownershipVerificationCertificateArn,
    }),
    ...(input.regionalCertificateArn != null && { regionalCertificateArn: input.regionalCertificateArn }),
    ...(input.regionalCertificateName != null && { regionalCertificateName: input.regionalCertificateName }),
    ...(input.securityPolicy != null && { securityPolicy: input.securityPolicy }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/models";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.schema != null && { schema: input.schema }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRequestValidatorCommand = async (
  input: CreateRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/requestvalidators";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.name != null && { name: input.name }),
    ...(input.validateRequestBody != null && { validateRequestBody: input.validateRequestBody }),
    ...(input.validateRequestParameters != null && { validateRequestParameters: input.validateRequestParameters }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{parentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "parentId", () => input.parentId!, "{parentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.pathPart != null && { pathPart: input.pathPart }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRestApiCommand = async (
  input: CreateRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis";
  let body: any;
  body = JSON.stringify({
    ...(input.apiKeySource != null && { apiKeySource: input.apiKeySource }),
    ...(input.binaryMediaTypes != null && {
      binaryMediaTypes: serializeAws_restJson1ListOfString(input.binaryMediaTypes, context),
    }),
    ...(input.cloneFrom != null && { cloneFrom: input.cloneFrom }),
    ...(input.description != null && { description: input.description }),
    ...(input.disableExecuteApiEndpoint != null && { disableExecuteApiEndpoint: input.disableExecuteApiEndpoint }),
    ...(input.endpointConfiguration != null && {
      endpointConfiguration: serializeAws_restJson1EndpointConfiguration(input.endpointConfiguration, context),
    }),
    ...(input.minimumCompressionSize != null && { minimumCompressionSize: input.minimumCompressionSize }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.version != null && { version: input.version }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateStageCommand = async (
  input: CreateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/stages";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.cacheClusterEnabled != null && { cacheClusterEnabled: input.cacheClusterEnabled }),
    ...(input.cacheClusterSize != null && { cacheClusterSize: input.cacheClusterSize }),
    ...(input.canarySettings != null && {
      canarySettings: serializeAws_restJson1CanarySettings(input.canarySettings, context),
    }),
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.description != null && { description: input.description }),
    ...(input.documentationVersion != null && { documentationVersion: input.documentationVersion }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.tracingEnabled != null && { tracingEnabled: input.tracingEnabled }),
    ...(input.variables != null && { variables: serializeAws_restJson1MapOfStringToString(input.variables, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUsagePlanCommand = async (
  input: CreateUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans";
  let body: any;
  body = JSON.stringify({
    ...(input.apiStages != null && { apiStages: serializeAws_restJson1ListOfApiStage(input.apiStages, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.quota != null && { quota: serializeAws_restJson1QuotaSettings(input.quota, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.throttle != null && { throttle: serializeAws_restJson1ThrottleSettings(input.throttle, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUsagePlanKeyCommand = async (
  input: CreateUsagePlanKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}/keys";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.keyId != null && { keyId: input.keyId }),
    ...(input.keyType != null && { keyType: input.keyType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateVpcLinkCommand = async (
  input: CreateVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpclinks";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.targetArns != null && { targetArns: serializeAws_restJson1ListOfString(input.targetArns, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteApiKeyCommand = async (
  input: DeleteApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apikeys/{apiKey}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiKey", () => input.apiKey!, "{apiKey}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAuthorizerCommand = async (
  input: DeleteAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/authorizers/{authorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "authorizerId",
    () => input.authorizerId!,
    "{authorizerId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteBasePathMappingCommand = async (
  input: DeleteBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domainnames/{domainName}/basepathmappings/{basePath}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "basePath", () => input.basePath!, "{basePath}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteClientCertificateCommand = async (
  input: DeleteClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clientcertificates/{clientCertificateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "clientCertificateId",
    () => input.clientCertificateId!,
    "{clientCertificateId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDeploymentCommand = async (
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/deployments/{deploymentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deploymentId",
    () => input.deploymentId!,
    "{deploymentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDocumentationPartCommand = async (
  input: DeleteDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "documentationPartId",
    () => input.documentationPartId!,
    "{documentationPartId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDocumentationVersionCommand = async (
  input: DeleteDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "documentationVersion",
    () => input.documentationVersion!,
    "{documentationVersion}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDomainNameCommand = async (
  input: DeleteDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domainnames/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteGatewayResponseCommand = async (
  input: DeleteGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/gatewayresponses/{responseType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "responseType",
    () => input.responseType!,
    "{responseType}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteIntegrationResponseCommand = async (
  input: DeleteIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMethodCommand = async (
  input: DeleteMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMethodResponseCommand = async (
  input: DeleteMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/models/{modelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "modelName", () => input.modelName!, "{modelName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRequestValidatorCommand = async (
  input: DeleteRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "requestValidatorId",
    () => input.requestValidatorId!,
    "{requestValidatorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRestApiCommand = async (
  input: DeleteRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteStageCommand = async (
  input: DeleteStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/stages/{stageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUsagePlanCommand = async (
  input: DeleteUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUsagePlanKeyCommand = async (
  input: DeleteUsagePlanKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}/keys/{keyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "keyId", () => input.keyId!, "{keyId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVpcLinkCommand = async (
  input: DeleteVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpclinks/{vpcLinkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "vpcLinkId", () => input.vpcLinkId!, "{vpcLinkId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1FlushStageAuthorizersCacheCommand = async (
  input: FlushStageAuthorizersCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/stages/{stageName}/cache/authorizers";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1FlushStageCacheCommand = async (
  input: FlushStageCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/stages/{stageName}/cache/data";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GenerateClientCertificateCommand = async (
  input: GenerateClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clientcertificates";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApiKeyCommand = async (
  input: GetApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apikeys/{apiKey}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiKey", () => input.apiKey!, "{apiKey}", false);
  const query: any = map({
    includeValue: [() => input.includeValue !== void 0, () => input.includeValue!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetApiKeysCommand = async (
  input: GetApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apikeys";
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    name: [, input.nameQuery!],
    customerId: [, input.customerId!],
    includeValues: [() => input.includeValues !== void 0, () => input.includeValues!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetAuthorizerCommand = async (
  input: GetAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/authorizers/{authorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "authorizerId",
    () => input.authorizerId!,
    "{authorizerId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAuthorizersCommand = async (
  input: GetAuthorizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/authorizers";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBasePathMappingCommand = async (
  input: GetBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domainnames/{domainName}/basepathmappings/{basePath}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "basePath", () => input.basePath!, "{basePath}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetBasePathMappingsCommand = async (
  input: GetBasePathMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domainnames/{domainName}/basepathmappings";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetClientCertificateCommand = async (
  input: GetClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clientcertificates/{clientCertificateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "clientCertificateId",
    () => input.clientCertificateId!,
    "{clientCertificateId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetClientCertificatesCommand = async (
  input: GetClientCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clientcertificates";
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/deployments/{deploymentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deploymentId",
    () => input.deploymentId!,
    "{deploymentId}",
    false
  );
  const query: any = map({
    embed: [() => input.embed !== void 0, () => (input.embed! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDeploymentsCommand = async (
  input: GetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDocumentationPartCommand = async (
  input: GetDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "documentationPartId",
    () => input.documentationPartId!,
    "{documentationPartId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDocumentationPartsCommand = async (
  input: GetDocumentationPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/documentation/parts";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    type: [, input.type!],
    name: [, input.nameQuery!],
    path: [, input.path!],
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    locationStatus: [, input.locationStatus!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDocumentationVersionCommand = async (
  input: GetDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "documentationVersion",
    () => input.documentationVersion!,
    "{documentationVersion}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDocumentationVersionsCommand = async (
  input: GetDocumentationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDomainNameCommand = async (
  input: GetDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domainnames/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDomainNamesCommand = async (
  input: GetDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domainnames";
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetExportCommand = async (
  input: GetExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    accept: input.accepts!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/stages/{stageName}/exports/{exportType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "exportType", () => input.exportType!, "{exportType}", false);
  const query: any = map({
    ...convertMap(input.parameters),
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetGatewayResponseCommand = async (
  input: GetGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/gatewayresponses/{responseType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "responseType",
    () => input.responseType!,
    "{responseType}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetGatewayResponsesCommand = async (
  input: GetGatewayResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/gatewayresponses";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetIntegrationCommand = async (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetIntegrationResponseCommand = async (
  input: GetIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMethodCommand = async (
  input: GetMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMethodResponseCommand = async (
  input: GetMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetModelCommand = async (
  input: GetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/models/{modelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "modelName", () => input.modelName!, "{modelName}", false);
  const query: any = map({
    flatten: [() => input.flatten !== void 0, () => input.flatten!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/models";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetModelTemplateCommand = async (
  input: GetModelTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/models/{modelName}/default_template";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "modelName", () => input.modelName!, "{modelName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRequestValidatorCommand = async (
  input: GetRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "requestValidatorId",
    () => input.requestValidatorId!,
    "{requestValidatorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRequestValidatorsCommand = async (
  input: GetRequestValidatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/requestvalidators";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetResourceCommand = async (
  input: GetResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  const query: any = map({
    embed: [() => input.embed !== void 0, () => (input.embed! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/resources";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    embed: [() => input.embed !== void 0, () => (input.embed! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetRestApiCommand = async (
  input: GetRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRestApisCommand = async (
  input: GetRestApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis";
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSdkCommand = async (
  input: GetSdkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sdkType", () => input.sdkType!, "{sdkType}", false);
  const query: any = map({
    ...convertMap(input.parameters),
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSdkTypeCommand = async (
  input: GetSdkTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdktypes/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSdkTypesCommand = async (
  input: GetSdkTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdktypes";
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetStageCommand = async (
  input: GetStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/stages/{stageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetStagesCommand = async (
  input: GetStagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/stages";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    deploymentId: [, input.deploymentId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetUsageCommand = async (
  input: GetUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}/usage";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  const query: any = map({
    keyId: [, input.keyId!],
    startDate: [, __expectNonNull(input.startDate!, `startDate`)],
    endDate: [, __expectNonNull(input.endDate!, `endDate`)],
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetUsagePlanCommand = async (
  input: GetUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetUsagePlanKeyCommand = async (
  input: GetUsagePlanKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}/keys/{keyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "keyId", () => input.keyId!, "{keyId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetUsagePlanKeysCommand = async (
  input: GetUsagePlanKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}/keys";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    name: [, input.nameQuery!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetUsagePlansCommand = async (
  input: GetUsagePlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans";
  const query: any = map({
    position: [, input.position!],
    keyId: [, input.keyId!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetVpcLinkCommand = async (
  input: GetVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpclinks/{vpcLinkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "vpcLinkId", () => input.vpcLinkId!, "{vpcLinkId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVpcLinksCommand = async (
  input: GetVpcLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpclinks";
  const query: any = map({
    position: [, input.position!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ImportApiKeysCommand = async (
  input: ImportApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apikeys";
  const query: any = map({
    mode: [, "import"],
    format: [, __expectNonNull(input.format!, `format`)],
    failonwarnings: [() => input.failOnWarnings !== void 0, () => input.failOnWarnings!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ImportDocumentationPartsCommand = async (
  input: ImportDocumentationPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/documentation/parts";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    mode: [, input.mode!],
    failonwarnings: [() => input.failOnWarnings !== void 0, () => input.failOnWarnings!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ImportRestApiCommand = async (
  input: ImportRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis";
  const query: any = map({
    mode: [, "import"],
    ...convertMap(input.parameters),
    failonwarnings: [() => input.failOnWarnings !== void 0, () => input.failOnWarnings!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PutGatewayResponseCommand = async (
  input: PutGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/gatewayresponses/{responseType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "responseType",
    () => input.responseType!,
    "{responseType}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.responseParameters != null && {
      responseParameters: serializeAws_restJson1MapOfStringToString(input.responseParameters, context),
    }),
    ...(input.responseTemplates != null && {
      responseTemplates: serializeAws_restJson1MapOfStringToString(input.responseTemplates, context),
    }),
    ...(input.statusCode != null && { statusCode: input.statusCode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutIntegrationCommand = async (
  input: PutIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.cacheKeyParameters != null && {
      cacheKeyParameters: serializeAws_restJson1ListOfString(input.cacheKeyParameters, context),
    }),
    ...(input.cacheNamespace != null && { cacheNamespace: input.cacheNamespace }),
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.connectionType != null && { connectionType: input.connectionType }),
    ...(input.contentHandling != null && { contentHandling: input.contentHandling }),
    ...(input.credentials != null && { credentials: input.credentials }),
    ...(input.integrationHttpMethod != null && { httpMethod: input.integrationHttpMethod }),
    ...(input.passthroughBehavior != null && { passthroughBehavior: input.passthroughBehavior }),
    ...(input.requestParameters != null && {
      requestParameters: serializeAws_restJson1MapOfStringToString(input.requestParameters, context),
    }),
    ...(input.requestTemplates != null && {
      requestTemplates: serializeAws_restJson1MapOfStringToString(input.requestTemplates, context),
    }),
    ...(input.timeoutInMillis != null && { timeoutInMillis: input.timeoutInMillis }),
    ...(input.tlsConfig != null && { tlsConfig: serializeAws_restJson1TlsConfig(input.tlsConfig, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.uri != null && { uri: input.uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutIntegrationResponseCommand = async (
  input: PutIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.contentHandling != null && { contentHandling: input.contentHandling }),
    ...(input.responseParameters != null && {
      responseParameters: serializeAws_restJson1MapOfStringToString(input.responseParameters, context),
    }),
    ...(input.responseTemplates != null && {
      responseTemplates: serializeAws_restJson1MapOfStringToString(input.responseTemplates, context),
    }),
    ...(input.selectionPattern != null && { selectionPattern: input.selectionPattern }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutMethodCommand = async (
  input: PutMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.apiKeyRequired != null && { apiKeyRequired: input.apiKeyRequired }),
    ...(input.authorizationScopes != null && {
      authorizationScopes: serializeAws_restJson1ListOfString(input.authorizationScopes, context),
    }),
    ...(input.authorizationType != null && { authorizationType: input.authorizationType }),
    ...(input.authorizerId != null && { authorizerId: input.authorizerId }),
    ...(input.operationName != null && { operationName: input.operationName }),
    ...(input.requestModels != null && {
      requestModels: serializeAws_restJson1MapOfStringToString(input.requestModels, context),
    }),
    ...(input.requestParameters != null && {
      requestParameters: serializeAws_restJson1MapOfStringToBoolean(input.requestParameters, context),
    }),
    ...(input.requestValidatorId != null && { requestValidatorId: input.requestValidatorId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutMethodResponseCommand = async (
  input: PutMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.responseModels != null && {
      responseModels: serializeAws_restJson1MapOfStringToString(input.responseModels, context),
    }),
    ...(input.responseParameters != null && {
      responseParameters: serializeAws_restJson1MapOfStringToBoolean(input.responseParameters, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutRestApiCommand = async (
  input: PutRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    ...convertMap(input.parameters),
    mode: [, input.mode!],
    failonwarnings: [() => input.failOnWarnings !== void 0, () => input.failOnWarnings!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TestInvokeAuthorizerCommand = async (
  input: TestInvokeAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/authorizers/{authorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "authorizerId",
    () => input.authorizerId!,
    "{authorizerId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.additionalContext != null && {
      additionalContext: serializeAws_restJson1MapOfStringToString(input.additionalContext, context),
    }),
    ...(input.body != null && { body: input.body }),
    ...(input.headers != null && { headers: serializeAws_restJson1MapOfStringToString(input.headers, context) }),
    ...(input.multiValueHeaders != null && {
      multiValueHeaders: serializeAws_restJson1MapOfStringToList(input.multiValueHeaders, context),
    }),
    ...(input.pathWithQueryString != null && { pathWithQueryString: input.pathWithQueryString }),
    ...(input.stageVariables != null && {
      stageVariables: serializeAws_restJson1MapOfStringToString(input.stageVariables, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TestInvokeMethodCommand = async (
  input: TestInvokeMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.body != null && { body: input.body }),
    ...(input.clientCertificateId != null && { clientCertificateId: input.clientCertificateId }),
    ...(input.headers != null && { headers: serializeAws_restJson1MapOfStringToString(input.headers, context) }),
    ...(input.multiValueHeaders != null && {
      multiValueHeaders: serializeAws_restJson1MapOfStringToList(input.multiValueHeaders, context),
    }),
    ...(input.pathWithQueryString != null && { pathWithQueryString: input.pathWithQueryString }),
    ...(input.stageVariables != null && {
      stageVariables: serializeAws_restJson1MapOfStringToString(input.stageVariables, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAccountCommand = async (
  input: UpdateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account";
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateApiKeyCommand = async (
  input: UpdateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/apikeys/{apiKey}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiKey", () => input.apiKey!, "{apiKey}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateAuthorizerCommand = async (
  input: UpdateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/authorizers/{authorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "authorizerId",
    () => input.authorizerId!,
    "{authorizerId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateBasePathMappingCommand = async (
  input: UpdateBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domainnames/{domainName}/basepathmappings/{basePath}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "basePath", () => input.basePath!, "{basePath}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateClientCertificateCommand = async (
  input: UpdateClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clientcertificates/{clientCertificateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "clientCertificateId",
    () => input.clientCertificateId!,
    "{clientCertificateId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDeploymentCommand = async (
  input: UpdateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/deployments/{deploymentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deploymentId",
    () => input.deploymentId!,
    "{deploymentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDocumentationPartCommand = async (
  input: UpdateDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "documentationPartId",
    () => input.documentationPartId!,
    "{documentationPartId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDocumentationVersionCommand = async (
  input: UpdateDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "documentationVersion",
    () => input.documentationVersion!,
    "{documentationVersion}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDomainNameCommand = async (
  input: UpdateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domainnames/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateGatewayResponseCommand = async (
  input: UpdateGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/gatewayresponses/{responseType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "responseType",
    () => input.responseType!,
    "{responseType}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateIntegrationCommand = async (
  input: UpdateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateIntegrationResponseCommand = async (
  input: UpdateIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateMethodCommand = async (
  input: UpdateMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateMethodResponseCommand = async (
  input: UpdateMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateModelCommand = async (
  input: UpdateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/models/{modelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "modelName", () => input.modelName!, "{modelName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRequestValidatorCommand = async (
  input: UpdateRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "requestValidatorId",
    () => input.requestValidatorId!,
    "{requestValidatorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/restapis/{restApiId}/resources/{resourceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceId", () => input.resourceId!, "{resourceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRestApiCommand = async (
  input: UpdateRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateStageCommand = async (
  input: UpdateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restapis/{restApiId}/stages/{stageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "restApiId", () => input.restApiId!, "{restApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUsageCommand = async (
  input: UpdateUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/usageplans/{usagePlanId}/keys/{keyId}/usage";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "keyId", () => input.keyId!, "{keyId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUsagePlanCommand = async (
  input: UpdateUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/usageplans/{usagePlanId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateVpcLinkCommand = async (
  input: UpdateVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpclinks/{vpcLinkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "vpcLinkId", () => input.vpcLinkId!, "{vpcLinkId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.patchOperations != null && {
      patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.customerId != null) {
    contents.customerId = __expectString(data.customerId);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.enabled != null) {
    contents.enabled = __expectBoolean(data.enabled);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stageKeys != null) {
    contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.value != null) {
    contents.value = __expectString(data.value);
  }
  return contents;
};

const deserializeAws_restJson1CreateApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authType != null) {
    contents.authType = __expectString(data.authType);
  }
  if (data.authorizerCredentials != null) {
    contents.authorizerCredentials = __expectString(data.authorizerCredentials);
  }
  if (data.authorizerResultTtlInSeconds != null) {
    contents.authorizerResultTtlInSeconds = __expectInt32(data.authorizerResultTtlInSeconds);
  }
  if (data.authorizerUri != null) {
    contents.authorizerUri = __expectString(data.authorizerUri);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.identitySource != null) {
    contents.identitySource = __expectString(data.identitySource);
  }
  if (data.identityValidationExpression != null) {
    contents.identityValidationExpression = __expectString(data.identityValidationExpression);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.providerARNs != null) {
    contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1CreateAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBasePathMappingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBasePathMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.basePath != null) {
    contents.basePath = __expectString(data.basePath);
  }
  if (data.restApiId != null) {
    contents.restApiId = __expectString(data.restApiId);
  }
  if (data.stage != null) {
    contents.stage = __expectString(data.stage);
  }
  return contents;
};

const deserializeAws_restJson1CreateBasePathMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBasePathMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiSummary != null) {
    contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentationPartCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDocumentationPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.location != null) {
    contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
  }
  if (data.properties != null) {
    contents.properties = __expectString(data.properties);
  }
  return contents;
};

const deserializeAws_restJson1CreateDocumentationPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentationPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDocumentationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateDocumentationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificateArn != null) {
    contents.certificateArn = __expectString(data.certificateArn);
  }
  if (data.certificateName != null) {
    contents.certificateName = __expectString(data.certificateName);
  }
  if (data.certificateUploadDate != null) {
    contents.certificateUploadDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.certificateUploadDate)));
  }
  if (data.distributionDomainName != null) {
    contents.distributionDomainName = __expectString(data.distributionDomainName);
  }
  if (data.distributionHostedZoneId != null) {
    contents.distributionHostedZoneId = __expectString(data.distributionHostedZoneId);
  }
  if (data.domainName != null) {
    contents.domainName = __expectString(data.domainName);
  }
  if (data.domainNameStatus != null) {
    contents.domainNameStatus = __expectString(data.domainNameStatus);
  }
  if (data.domainNameStatusMessage != null) {
    contents.domainNameStatusMessage = __expectString(data.domainNameStatusMessage);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.mutualTlsAuthentication != null) {
    contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.ownershipVerificationCertificateArn != null) {
    contents.ownershipVerificationCertificateArn = __expectString(data.ownershipVerificationCertificateArn);
  }
  if (data.regionalCertificateArn != null) {
    contents.regionalCertificateArn = __expectString(data.regionalCertificateArn);
  }
  if (data.regionalCertificateName != null) {
    contents.regionalCertificateName = __expectString(data.regionalCertificateName);
  }
  if (data.regionalDomainName != null) {
    contents.regionalDomainName = __expectString(data.regionalDomainName);
  }
  if (data.regionalHostedZoneId != null) {
    contents.regionalHostedZoneId = __expectString(data.regionalHostedZoneId);
  }
  if (data.securityPolicy != null) {
    contents.securityPolicy = __expectString(data.securityPolicy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentType != null) {
    contents.contentType = __expectString(data.contentType);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.schema != null) {
    contents.schema = __expectString(data.schema);
  }
  return contents;
};

const deserializeAws_restJson1CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRequestValidatorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRequestValidatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.validateRequestBody != null) {
    contents.validateRequestBody = __expectBoolean(data.validateRequestBody);
  }
  if (data.validateRequestParameters != null) {
    contents.validateRequestParameters = __expectBoolean(data.validateRequestParameters);
  }
  return contents;
};

const deserializeAws_restJson1CreateRequestValidatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRequestValidatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.parentId != null) {
    contents.parentId = __expectString(data.parentId);
  }
  if (data.path != null) {
    contents.path = __expectString(data.path);
  }
  if (data.pathPart != null) {
    contents.pathPart = __expectString(data.pathPart);
  }
  if (data.resourceMethods != null) {
    contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRestApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRestApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeySource != null) {
    contents.apiKeySource = __expectString(data.apiKeySource);
  }
  if (data.binaryMediaTypes != null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.disableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.minimumCompressionSize != null) {
    contents.minimumCompressionSize = __expectInt32(data.minimumCompressionSize);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateRestApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRestApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessLogSettings != null) {
    contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.cacheClusterEnabled != null) {
    contents.cacheClusterEnabled = __expectBoolean(data.cacheClusterEnabled);
  }
  if (data.cacheClusterSize != null) {
    contents.cacheClusterSize = __expectString(data.cacheClusterSize);
  }
  if (data.cacheClusterStatus != null) {
    contents.cacheClusterStatus = __expectString(data.cacheClusterStatus);
  }
  if (data.canarySettings != null) {
    contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
  }
  if (data.clientCertificateId != null) {
    contents.clientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.deploymentId != null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.documentationVersion != null) {
    contents.documentationVersion = __expectString(data.documentationVersion);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.methodSettings != null) {
    contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
  }
  if (data.stageName != null) {
    contents.stageName = __expectString(data.stageName);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.tracingEnabled != null) {
    contents.tracingEnabled = __expectBoolean(data.tracingEnabled);
  }
  if (data.variables != null) {
    contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
  }
  if (data.webAclArn != null) {
    contents.webAclArn = __expectString(data.webAclArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsagePlanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUsagePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiStages != null) {
    contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.productCode != null) {
    contents.productCode = __expectString(data.productCode);
  }
  if (data.quota != null) {
    contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.throttle != null) {
    contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateUsagePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsagePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUsagePlanKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsagePlanKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUsagePlanKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.value != null) {
    contents.value = __expectString(data.value);
  }
  return contents;
};

const deserializeAws_restJson1CreateUsagePlanKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsagePlanKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcLinkCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.targetArns != null) {
    contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBasePathMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBasePathMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBasePathMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBasePathMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientCertificateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteClientCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteClientCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentationPartCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDocumentationPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDocumentationPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentationPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDocumentationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDocumentationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayResponseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGatewayResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteGatewayResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMethodCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMethodCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMethodResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMethodResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMethodResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMethodResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRequestValidatorCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRequestValidatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRequestValidatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRequestValidatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRestApiCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRestApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRestApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRestApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsagePlanCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUsagePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUsagePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsagePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUsagePlanKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsagePlanKeyCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUsagePlanKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUsagePlanKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsagePlanKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcLinkCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1FlushStageAuthorizersCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushStageAuthorizersCacheCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushStageAuthorizersCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1FlushStageAuthorizersCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushStageAuthorizersCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1FlushStageCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushStageCacheCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushStageCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1FlushStageCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushStageCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GenerateClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateClientCertificateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateClientCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientCertificateId != null) {
    contents.clientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.expirationDate != null) {
    contents.expirationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.expirationDate)));
  }
  if (data.pemEncodedCertificate != null) {
    contents.pemEncodedCertificate = __expectString(data.pemEncodedCertificate);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GenerateClientCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateClientCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeyVersion != null) {
    contents.apiKeyVersion = __expectString(data.apiKeyVersion);
  }
  if (data.cloudwatchRoleArn != null) {
    contents.cloudwatchRoleArn = __expectString(data.cloudwatchRoleArn);
  }
  if (data.features != null) {
    contents.features = deserializeAws_restJson1ListOfString(data.features, context);
  }
  if (data.throttleSettings != null) {
    contents.throttleSettings = deserializeAws_restJson1ThrottleSettings(data.throttleSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.customerId != null) {
    contents.customerId = __expectString(data.customerId);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.enabled != null) {
    contents.enabled = __expectBoolean(data.enabled);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stageKeys != null) {
    contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.value != null) {
    contents.value = __expectString(data.value);
  }
  return contents;
};

const deserializeAws_restJson1GetApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfApiKey(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApiKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authType != null) {
    contents.authType = __expectString(data.authType);
  }
  if (data.authorizerCredentials != null) {
    contents.authorizerCredentials = __expectString(data.authorizerCredentials);
  }
  if (data.authorizerResultTtlInSeconds != null) {
    contents.authorizerResultTtlInSeconds = __expectInt32(data.authorizerResultTtlInSeconds);
  }
  if (data.authorizerUri != null) {
    contents.authorizerUri = __expectString(data.authorizerUri);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.identitySource != null) {
    contents.identitySource = __expectString(data.identitySource);
  }
  if (data.identityValidationExpression != null) {
    contents.identityValidationExpression = __expectString(data.identityValidationExpression);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.providerARNs != null) {
    contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1GetAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAuthorizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfAuthorizer(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetAuthorizersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBasePathMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBasePathMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.basePath != null) {
    contents.basePath = __expectString(data.basePath);
  }
  if (data.restApiId != null) {
    contents.restApiId = __expectString(data.restApiId);
  }
  if (data.stage != null) {
    contents.stage = __expectString(data.stage);
  }
  return contents;
};

const deserializeAws_restJson1GetBasePathMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBasePathMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetBasePathMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBasePathMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBasePathMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfBasePathMapping(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetBasePathMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBasePathMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClientCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClientCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientCertificateId != null) {
    contents.clientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.expirationDate != null) {
    contents.expirationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.expirationDate)));
  }
  if (data.pemEncodedCertificate != null) {
    contents.pemEncodedCertificate = __expectString(data.pemEncodedCertificate);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetClientCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClientCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetClientCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClientCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClientCertificatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfClientCertificate(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetClientCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClientCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiSummary != null) {
    contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfDeployment(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.location != null) {
    contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
  }
  if (data.properties != null) {
    contents.properties = __expectString(data.properties);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentationPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDocumentationPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationPartsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfDocumentationPart(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentationPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDocumentationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfDocumentationVersion(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificateArn != null) {
    contents.certificateArn = __expectString(data.certificateArn);
  }
  if (data.certificateName != null) {
    contents.certificateName = __expectString(data.certificateName);
  }
  if (data.certificateUploadDate != null) {
    contents.certificateUploadDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.certificateUploadDate)));
  }
  if (data.distributionDomainName != null) {
    contents.distributionDomainName = __expectString(data.distributionDomainName);
  }
  if (data.distributionHostedZoneId != null) {
    contents.distributionHostedZoneId = __expectString(data.distributionHostedZoneId);
  }
  if (data.domainName != null) {
    contents.domainName = __expectString(data.domainName);
  }
  if (data.domainNameStatus != null) {
    contents.domainNameStatus = __expectString(data.domainNameStatus);
  }
  if (data.domainNameStatusMessage != null) {
    contents.domainNameStatusMessage = __expectString(data.domainNameStatusMessage);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.mutualTlsAuthentication != null) {
    contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.ownershipVerificationCertificateArn != null) {
    contents.ownershipVerificationCertificateArn = __expectString(data.ownershipVerificationCertificateArn);
  }
  if (data.regionalCertificateArn != null) {
    contents.regionalCertificateArn = __expectString(data.regionalCertificateArn);
  }
  if (data.regionalCertificateName != null) {
    contents.regionalCertificateName = __expectString(data.regionalCertificateName);
  }
  if (data.regionalDomainName != null) {
    contents.regionalDomainName = __expectString(data.regionalDomainName);
  }
  if (data.regionalHostedZoneId != null) {
    contents.regionalHostedZoneId = __expectString(data.regionalHostedZoneId);
  }
  if (data.securityPolicy != null) {
    contents.securityPolicy = __expectString(data.securityPolicy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfDomainName(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
    contentDisposition: [, output.headers["content-disposition"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

const deserializeAws_restJson1GetExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGatewayResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.defaultResponse != null) {
    contents.defaultResponse = __expectBoolean(data.defaultResponse);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.responseType != null) {
    contents.responseType = __expectString(data.responseType);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1GetGatewayResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetGatewayResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGatewayResponsesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfGatewayResponse(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetGatewayResponsesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayResponsesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cacheKeyParameters != null) {
    contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
  }
  if (data.cacheNamespace != null) {
    contents.cacheNamespace = __expectString(data.cacheNamespace);
  }
  if (data.connectionId != null) {
    contents.connectionId = __expectString(data.connectionId);
  }
  if (data.connectionType != null) {
    contents.connectionType = __expectString(data.connectionType);
  }
  if (data.contentHandling != null) {
    contents.contentHandling = __expectString(data.contentHandling);
  }
  if (data.credentials != null) {
    contents.credentials = __expectString(data.credentials);
  }
  if (data.httpMethod != null) {
    contents.httpMethod = __expectString(data.httpMethod);
  }
  if (data.integrationResponses != null) {
    contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
      data.integrationResponses,
      context
    );
  }
  if (data.passthroughBehavior != null) {
    contents.passthroughBehavior = __expectString(data.passthroughBehavior);
  }
  if (data.requestParameters != null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
  }
  if (data.requestTemplates != null) {
    contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
  }
  if (data.timeoutInMillis != null) {
    contents.timeoutInMillis = __expectInt32(data.timeoutInMillis);
  }
  if (data.tlsConfig != null) {
    contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.uri != null) {
    contents.uri = __expectString(data.uri);
  }
  return contents;
};

const deserializeAws_restJson1GetIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentHandling != null) {
    contents.contentHandling = __expectString(data.contentHandling);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.selectionPattern != null) {
    contents.selectionPattern = __expectString(data.selectionPattern);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1GetIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMethodCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeyRequired != null) {
    contents.apiKeyRequired = __expectBoolean(data.apiKeyRequired);
  }
  if (data.authorizationScopes != null) {
    contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
  }
  if (data.authorizationType != null) {
    contents.authorizationType = __expectString(data.authorizationType);
  }
  if (data.authorizerId != null) {
    contents.authorizerId = __expectString(data.authorizerId);
  }
  if (data.httpMethod != null) {
    contents.httpMethod = __expectString(data.httpMethod);
  }
  if (data.methodIntegration != null) {
    contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
  }
  if (data.methodResponses != null) {
    contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
  }
  if (data.operationName != null) {
    contents.operationName = __expectString(data.operationName);
  }
  if (data.requestModels != null) {
    contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
  }
  if (data.requestParameters != null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
  }
  if (data.requestValidatorId != null) {
    contents.requestValidatorId = __expectString(data.requestValidatorId);
  }
  return contents;
};

const deserializeAws_restJson1GetMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMethodResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMethodResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.responseModels != null) {
    contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(data.responseParameters, context);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1GetMethodResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMethodResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentType != null) {
    contents.contentType = __expectString(data.contentType);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.schema != null) {
    contents.schema = __expectString(data.schema);
  }
  return contents;
};

const deserializeAws_restJson1GetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfModel(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetModelTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.value != null) {
    contents.value = __expectString(data.value);
  }
  return contents;
};

const deserializeAws_restJson1GetModelTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestValidatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRequestValidatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.validateRequestBody != null) {
    contents.validateRequestBody = __expectBoolean(data.validateRequestBody);
  }
  if (data.validateRequestParameters != null) {
    contents.validateRequestParameters = __expectBoolean(data.validateRequestParameters);
  }
  return contents;
};

const deserializeAws_restJson1GetRequestValidatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestValidatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetRequestValidatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestValidatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRequestValidatorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfRequestValidator(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetRequestValidatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestValidatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.parentId != null) {
    contents.parentId = __expectString(data.parentId);
  }
  if (data.path != null) {
    contents.path = __expectString(data.path);
  }
  if (data.pathPart != null) {
    contents.pathPart = __expectString(data.pathPart);
  }
  if (data.resourceMethods != null) {
    contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfResource(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRestApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeySource != null) {
    contents.apiKeySource = __expectString(data.apiKeySource);
  }
  if (data.binaryMediaTypes != null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.disableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.minimumCompressionSize != null) {
    contents.minimumCompressionSize = __expectInt32(data.minimumCompressionSize);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRestApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetRestApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRestApisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfRestApi(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetRestApisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestApisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSdkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSdkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
    contentDisposition: [, output.headers["content-disposition"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

const deserializeAws_restJson1GetSdkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSdkTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSdkTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationProperties != null) {
    contents.configurationProperties = deserializeAws_restJson1ListOfSdkConfigurationProperty(
      data.configurationProperties,
      context
    );
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.friendlyName != null) {
    contents.friendlyName = __expectString(data.friendlyName);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1GetSdkTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSdkTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSdkTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfSdkType(data.item, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSdkTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessLogSettings != null) {
    contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.cacheClusterEnabled != null) {
    contents.cacheClusterEnabled = __expectBoolean(data.cacheClusterEnabled);
  }
  if (data.cacheClusterSize != null) {
    contents.cacheClusterSize = __expectString(data.cacheClusterSize);
  }
  if (data.cacheClusterStatus != null) {
    contents.cacheClusterStatus = __expectString(data.cacheClusterStatus);
  }
  if (data.canarySettings != null) {
    contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
  }
  if (data.clientCertificateId != null) {
    contents.clientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.deploymentId != null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.documentationVersion != null) {
    contents.documentationVersion = __expectString(data.documentationVersion);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.methodSettings != null) {
    contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
  }
  if (data.stageName != null) {
    contents.stageName = __expectString(data.stageName);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.tracingEnabled != null) {
    contents.tracingEnabled = __expectBoolean(data.tracingEnabled);
  }
  if (data.variables != null) {
    contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
  }
  if (data.webAclArn != null) {
    contents.webAclArn = __expectString(data.webAclArn);
  }
  return contents;
};

const deserializeAws_restJson1GetStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.item = deserializeAws_restJson1ListOfStage(data.item, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endDate != null) {
    contents.endDate = __expectString(data.endDate);
  }
  if (data.values != null) {
    contents.items = deserializeAws_restJson1MapOfKeyUsages(data.values, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  if (data.startDate != null) {
    contents.startDate = __expectString(data.startDate);
  }
  if (data.usagePlanId != null) {
    contents.usagePlanId = __expectString(data.usagePlanId);
  }
  return contents;
};

const deserializeAws_restJson1GetUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiStages != null) {
    contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.productCode != null) {
    contents.productCode = __expectString(data.productCode);
  }
  if (data.quota != null) {
    contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.throttle != null) {
    contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUsagePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUsagePlanKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlanKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.value != null) {
    contents.value = __expectString(data.value);
  }
  return contents;
};

const deserializeAws_restJson1GetUsagePlanKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUsagePlanKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlanKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfUsagePlanKey(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetUsagePlanKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUsagePlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfUsagePlan(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetUsagePlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.targetArns != null) {
    contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVpcLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.item != null) {
    contents.items = deserializeAws_restJson1ListOfVpcLink(data.item, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  return contents;
};

const deserializeAws_restJson1GetVpcLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ImportApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiKeysCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportApiKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ids != null) {
    contents.ids = deserializeAws_restJson1ListOfString(data.ids, context);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1ImportApiKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ImportDocumentationPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDocumentationPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportDocumentationPartsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ids != null) {
    contents.ids = deserializeAws_restJson1ListOfString(data.ids, context);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1ImportDocumentationPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDocumentationPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ImportRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportRestApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportRestApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeySource != null) {
    contents.apiKeySource = __expectString(data.apiKeySource);
  }
  if (data.binaryMediaTypes != null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.disableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.minimumCompressionSize != null) {
    contents.minimumCompressionSize = __expectInt32(data.minimumCompressionSize);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1ImportRestApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportRestApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGatewayResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutGatewayResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.defaultResponse != null) {
    contents.defaultResponse = __expectBoolean(data.defaultResponse);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.responseType != null) {
    contents.responseType = __expectString(data.responseType);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1PutGatewayResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGatewayResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cacheKeyParameters != null) {
    contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
  }
  if (data.cacheNamespace != null) {
    contents.cacheNamespace = __expectString(data.cacheNamespace);
  }
  if (data.connectionId != null) {
    contents.connectionId = __expectString(data.connectionId);
  }
  if (data.connectionType != null) {
    contents.connectionType = __expectString(data.connectionType);
  }
  if (data.contentHandling != null) {
    contents.contentHandling = __expectString(data.contentHandling);
  }
  if (data.credentials != null) {
    contents.credentials = __expectString(data.credentials);
  }
  if (data.httpMethod != null) {
    contents.httpMethod = __expectString(data.httpMethod);
  }
  if (data.integrationResponses != null) {
    contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
      data.integrationResponses,
      context
    );
  }
  if (data.passthroughBehavior != null) {
    contents.passthroughBehavior = __expectString(data.passthroughBehavior);
  }
  if (data.requestParameters != null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
  }
  if (data.requestTemplates != null) {
    contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
  }
  if (data.timeoutInMillis != null) {
    contents.timeoutInMillis = __expectInt32(data.timeoutInMillis);
  }
  if (data.tlsConfig != null) {
    contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.uri != null) {
    contents.uri = __expectString(data.uri);
  }
  return contents;
};

const deserializeAws_restJson1PutIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentHandling != null) {
    contents.contentHandling = __expectString(data.contentHandling);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.selectionPattern != null) {
    contents.selectionPattern = __expectString(data.selectionPattern);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1PutIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMethodCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutMethodCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeyRequired != null) {
    contents.apiKeyRequired = __expectBoolean(data.apiKeyRequired);
  }
  if (data.authorizationScopes != null) {
    contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
  }
  if (data.authorizationType != null) {
    contents.authorizationType = __expectString(data.authorizationType);
  }
  if (data.authorizerId != null) {
    contents.authorizerId = __expectString(data.authorizerId);
  }
  if (data.httpMethod != null) {
    contents.httpMethod = __expectString(data.httpMethod);
  }
  if (data.methodIntegration != null) {
    contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
  }
  if (data.methodResponses != null) {
    contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
  }
  if (data.operationName != null) {
    contents.operationName = __expectString(data.operationName);
  }
  if (data.requestModels != null) {
    contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
  }
  if (data.requestParameters != null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
  }
  if (data.requestValidatorId != null) {
    contents.requestValidatorId = __expectString(data.requestValidatorId);
  }
  return contents;
};

const deserializeAws_restJson1PutMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMethodResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutMethodResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.responseModels != null) {
    contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(data.responseParameters, context);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1PutMethodResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMethodResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRestApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRestApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeySource != null) {
    contents.apiKeySource = __expectString(data.apiKeySource);
  }
  if (data.binaryMediaTypes != null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.disableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.minimumCompressionSize != null) {
    contents.minimumCompressionSize = __expectInt32(data.minimumCompressionSize);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1PutRestApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRestApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TestInvokeAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestInvokeAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authorization != null) {
    contents.authorization = deserializeAws_restJson1MapOfStringToList(data.authorization, context);
  }
  if (data.claims != null) {
    contents.claims = deserializeAws_restJson1MapOfStringToString(data.claims, context);
  }
  if (data.clientStatus != null) {
    contents.clientStatus = __expectInt32(data.clientStatus);
  }
  if (data.latency != null) {
    contents.latency = __expectLong(data.latency);
  }
  if (data.log != null) {
    contents.log = __expectString(data.log);
  }
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.principalId != null) {
    contents.principalId = __expectString(data.principalId);
  }
  return contents;
};

const deserializeAws_restJson1TestInvokeAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TestInvokeMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestInvokeMethodCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.body != null) {
    contents.body = __expectString(data.body);
  }
  if (data.headers != null) {
    contents.headers = deserializeAws_restJson1MapOfStringToString(data.headers, context);
  }
  if (data.latency != null) {
    contents.latency = __expectLong(data.latency);
  }
  if (data.log != null) {
    contents.log = __expectString(data.log);
  }
  if (data.multiValueHeaders != null) {
    contents.multiValueHeaders = deserializeAws_restJson1MapOfStringToList(data.multiValueHeaders, context);
  }
  if (data.status != null) {
    contents.status = __expectInt32(data.status);
  }
  return contents;
};

const deserializeAws_restJson1TestInvokeMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeyVersion != null) {
    contents.apiKeyVersion = __expectString(data.apiKeyVersion);
  }
  if (data.cloudwatchRoleArn != null) {
    contents.cloudwatchRoleArn = __expectString(data.cloudwatchRoleArn);
  }
  if (data.features != null) {
    contents.features = deserializeAws_restJson1ListOfString(data.features, context);
  }
  if (data.throttleSettings != null) {
    contents.throttleSettings = deserializeAws_restJson1ThrottleSettings(data.throttleSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.customerId != null) {
    contents.customerId = __expectString(data.customerId);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.enabled != null) {
    contents.enabled = __expectBoolean(data.enabled);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.stageKeys != null) {
    contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.value != null) {
    contents.value = __expectString(data.value);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authType != null) {
    contents.authType = __expectString(data.authType);
  }
  if (data.authorizerCredentials != null) {
    contents.authorizerCredentials = __expectString(data.authorizerCredentials);
  }
  if (data.authorizerResultTtlInSeconds != null) {
    contents.authorizerResultTtlInSeconds = __expectInt32(data.authorizerResultTtlInSeconds);
  }
  if (data.authorizerUri != null) {
    contents.authorizerUri = __expectString(data.authorizerUri);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.identitySource != null) {
    contents.identitySource = __expectString(data.identitySource);
  }
  if (data.identityValidationExpression != null) {
    contents.identityValidationExpression = __expectString(data.identityValidationExpression);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.providerARNs != null) {
    contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBasePathMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBasePathMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.basePath != null) {
    contents.basePath = __expectString(data.basePath);
  }
  if (data.restApiId != null) {
    contents.restApiId = __expectString(data.restApiId);
  }
  if (data.stage != null) {
    contents.stage = __expectString(data.stage);
  }
  return contents;
};

const deserializeAws_restJson1UpdateBasePathMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBasePathMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClientCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClientCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientCertificateId != null) {
    contents.clientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.expirationDate != null) {
    contents.expirationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.expirationDate)));
  }
  if (data.pemEncodedCertificate != null) {
    contents.pemEncodedCertificate = __expectString(data.pemEncodedCertificate);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateClientCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClientCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiSummary != null) {
    contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentationPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDocumentationPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.location != null) {
    contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
  }
  if (data.properties != null) {
    contents.properties = __expectString(data.properties);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDocumentationPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentationPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDocumentationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDocumentationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificateArn != null) {
    contents.certificateArn = __expectString(data.certificateArn);
  }
  if (data.certificateName != null) {
    contents.certificateName = __expectString(data.certificateName);
  }
  if (data.certificateUploadDate != null) {
    contents.certificateUploadDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.certificateUploadDate)));
  }
  if (data.distributionDomainName != null) {
    contents.distributionDomainName = __expectString(data.distributionDomainName);
  }
  if (data.distributionHostedZoneId != null) {
    contents.distributionHostedZoneId = __expectString(data.distributionHostedZoneId);
  }
  if (data.domainName != null) {
    contents.domainName = __expectString(data.domainName);
  }
  if (data.domainNameStatus != null) {
    contents.domainNameStatus = __expectString(data.domainNameStatus);
  }
  if (data.domainNameStatusMessage != null) {
    contents.domainNameStatusMessage = __expectString(data.domainNameStatusMessage);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.mutualTlsAuthentication != null) {
    contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.ownershipVerificationCertificateArn != null) {
    contents.ownershipVerificationCertificateArn = __expectString(data.ownershipVerificationCertificateArn);
  }
  if (data.regionalCertificateArn != null) {
    contents.regionalCertificateArn = __expectString(data.regionalCertificateArn);
  }
  if (data.regionalCertificateName != null) {
    contents.regionalCertificateName = __expectString(data.regionalCertificateName);
  }
  if (data.regionalDomainName != null) {
    contents.regionalDomainName = __expectString(data.regionalDomainName);
  }
  if (data.regionalHostedZoneId != null) {
    contents.regionalHostedZoneId = __expectString(data.regionalHostedZoneId);
  }
  if (data.securityPolicy != null) {
    contents.securityPolicy = __expectString(data.securityPolicy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.defaultResponse != null) {
    contents.defaultResponse = __expectBoolean(data.defaultResponse);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.responseType != null) {
    contents.responseType = __expectString(data.responseType);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1UpdateGatewayResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cacheKeyParameters != null) {
    contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
  }
  if (data.cacheNamespace != null) {
    contents.cacheNamespace = __expectString(data.cacheNamespace);
  }
  if (data.connectionId != null) {
    contents.connectionId = __expectString(data.connectionId);
  }
  if (data.connectionType != null) {
    contents.connectionType = __expectString(data.connectionType);
  }
  if (data.contentHandling != null) {
    contents.contentHandling = __expectString(data.contentHandling);
  }
  if (data.credentials != null) {
    contents.credentials = __expectString(data.credentials);
  }
  if (data.httpMethod != null) {
    contents.httpMethod = __expectString(data.httpMethod);
  }
  if (data.integrationResponses != null) {
    contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
      data.integrationResponses,
      context
    );
  }
  if (data.passthroughBehavior != null) {
    contents.passthroughBehavior = __expectString(data.passthroughBehavior);
  }
  if (data.requestParameters != null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
  }
  if (data.requestTemplates != null) {
    contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
  }
  if (data.timeoutInMillis != null) {
    contents.timeoutInMillis = __expectInt32(data.timeoutInMillis);
  }
  if (data.tlsConfig != null) {
    contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.uri != null) {
    contents.uri = __expectString(data.uri);
  }
  return contents;
};

const deserializeAws_restJson1UpdateIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentHandling != null) {
    contents.contentHandling = __expectString(data.contentHandling);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.selectionPattern != null) {
    contents.selectionPattern = __expectString(data.selectionPattern);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1UpdateIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMethodCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeyRequired != null) {
    contents.apiKeyRequired = __expectBoolean(data.apiKeyRequired);
  }
  if (data.authorizationScopes != null) {
    contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
  }
  if (data.authorizationType != null) {
    contents.authorizationType = __expectString(data.authorizationType);
  }
  if (data.authorizerId != null) {
    contents.authorizerId = __expectString(data.authorizerId);
  }
  if (data.httpMethod != null) {
    contents.httpMethod = __expectString(data.httpMethod);
  }
  if (data.methodIntegration != null) {
    contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
  }
  if (data.methodResponses != null) {
    contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
  }
  if (data.operationName != null) {
    contents.operationName = __expectString(data.operationName);
  }
  if (data.requestModels != null) {
    contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
  }
  if (data.requestParameters != null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
  }
  if (data.requestValidatorId != null) {
    contents.requestValidatorId = __expectString(data.requestValidatorId);
  }
  return contents;
};

const deserializeAws_restJson1UpdateMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMethodResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMethodResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.responseModels != null) {
    contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
  }
  if (data.responseParameters != null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(data.responseParameters, context);
  }
  if (data.statusCode != null) {
    contents.statusCode = __expectString(data.statusCode);
  }
  return contents;
};

const deserializeAws_restJson1UpdateMethodResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMethodResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentType != null) {
    contents.contentType = __expectString(data.contentType);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.schema != null) {
    contents.schema = __expectString(data.schema);
  }
  return contents;
};

const deserializeAws_restJson1UpdateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRequestValidatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRequestValidatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.validateRequestBody != null) {
    contents.validateRequestBody = __expectBoolean(data.validateRequestBody);
  }
  if (data.validateRequestParameters != null) {
    contents.validateRequestParameters = __expectBoolean(data.validateRequestParameters);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRequestValidatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRequestValidatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.parentId != null) {
    contents.parentId = __expectString(data.parentId);
  }
  if (data.path != null) {
    contents.path = __expectString(data.path);
  }
  if (data.pathPart != null) {
    contents.pathPart = __expectString(data.pathPart);
  }
  if (data.resourceMethods != null) {
    contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRestApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRestApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeySource != null) {
    contents.apiKeySource = __expectString(data.apiKeySource);
  }
  if (data.binaryMediaTypes != null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.disableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.endpointConfiguration != null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.minimumCompressionSize != null) {
    contents.minimumCompressionSize = __expectInt32(data.minimumCompressionSize);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRestApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRestApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessLogSettings != null) {
    contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.cacheClusterEnabled != null) {
    contents.cacheClusterEnabled = __expectBoolean(data.cacheClusterEnabled);
  }
  if (data.cacheClusterSize != null) {
    contents.cacheClusterSize = __expectString(data.cacheClusterSize);
  }
  if (data.cacheClusterStatus != null) {
    contents.cacheClusterStatus = __expectString(data.cacheClusterStatus);
  }
  if (data.canarySettings != null) {
    contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
  }
  if (data.clientCertificateId != null) {
    contents.clientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.createdDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdDate)));
  }
  if (data.deploymentId != null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.documentationVersion != null) {
    contents.documentationVersion = __expectString(data.documentationVersion);
  }
  if (data.lastUpdatedDate != null) {
    contents.lastUpdatedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDate)));
  }
  if (data.methodSettings != null) {
    contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
  }
  if (data.stageName != null) {
    contents.stageName = __expectString(data.stageName);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.tracingEnabled != null) {
    contents.tracingEnabled = __expectBoolean(data.tracingEnabled);
  }
  if (data.variables != null) {
    contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
  }
  if (data.webAclArn != null) {
    contents.webAclArn = __expectString(data.webAclArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUsageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endDate != null) {
    contents.endDate = __expectString(data.endDate);
  }
  if (data.values != null) {
    contents.items = deserializeAws_restJson1MapOfKeyUsages(data.values, context);
  }
  if (data.position != null) {
    contents.position = __expectString(data.position);
  }
  if (data.startDate != null) {
    contents.startDate = __expectString(data.startDate);
  }
  if (data.usagePlanId != null) {
    contents.usagePlanId = __expectString(data.usagePlanId);
  }
  return contents;
};

const deserializeAws_restJson1UpdateUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsagePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUsagePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiStages != null) {
    contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.productCode != null) {
    contents.productCode = __expectString(data.productCode);
  }
  if (data.quota != null) {
    contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.throttle != null) {
    contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateUsagePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsagePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.targetArns != null) {
    contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ApiStage = (input: ApiStage, context: __SerdeContext): any => {
  return {
    ...(input.apiId != null && { apiId: input.apiId }),
    ...(input.stage != null && { stage: input.stage }),
    ...(input.throttle != null && {
      throttle: serializeAws_restJson1MapOfApiStageThrottleSettings(input.throttle, context),
    }),
  };
};

const serializeAws_restJson1CanarySettings = (input: CanarySettings, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.percentTraffic != null && { percentTraffic: __serializeFloat(input.percentTraffic) }),
    ...(input.stageVariableOverrides != null && {
      stageVariableOverrides: serializeAws_restJson1MapOfStringToString(input.stageVariableOverrides, context),
    }),
    ...(input.useStageCache != null && { useStageCache: input.useStageCache }),
  };
};

const serializeAws_restJson1DeploymentCanarySettings = (
  input: DeploymentCanarySettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.percentTraffic != null && { percentTraffic: __serializeFloat(input.percentTraffic) }),
    ...(input.stageVariableOverrides != null && {
      stageVariableOverrides: serializeAws_restJson1MapOfStringToString(input.stageVariableOverrides, context),
    }),
    ...(input.useStageCache != null && { useStageCache: input.useStageCache }),
  };
};

const serializeAws_restJson1DocumentationPartLocation = (
  input: DocumentationPartLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.method != null && { method: input.method }),
    ...(input.name != null && { name: input.name }),
    ...(input.path != null && { path: input.path }),
    ...(input.statusCode != null && { statusCode: input.statusCode }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1EndpointConfiguration = (input: EndpointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.types != null && { types: serializeAws_restJson1ListOfEndpointType(input.types, context) }),
    ...(input.vpcEndpointIds != null && {
      vpcEndpointIds: serializeAws_restJson1ListOfString(input.vpcEndpointIds, context),
    }),
  };
};

const serializeAws_restJson1ListOfApiStage = (input: ApiStage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ApiStage(entry, context);
    });
};

const serializeAws_restJson1ListOfARNs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOfEndpointType = (input: (EndpointType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOfPatchOperation = (input: PatchOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PatchOperation(entry, context);
    });
};

const serializeAws_restJson1ListOfStageKeys = (input: StageKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StageKey(entry, context);
    });
};

const serializeAws_restJson1ListOfString = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1MapOfApiStageThrottleSettings = (
  input: Record<string, ThrottleSettings>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ThrottleSettings(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfStringToBoolean = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfStringToList = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ListOfString(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfStringToString = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1MutualTlsAuthenticationInput = (
  input: MutualTlsAuthenticationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.truststoreUri != null && { truststoreUri: input.truststoreUri }),
    ...(input.truststoreVersion != null && { truststoreVersion: input.truststoreVersion }),
  };
};

const serializeAws_restJson1PatchOperation = (input: PatchOperation, context: __SerdeContext): any => {
  return {
    ...(input.from != null && { from: input.from }),
    ...(input.op != null && { op: input.op }),
    ...(input.path != null && { path: input.path }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1QuotaSettings = (input: QuotaSettings, context: __SerdeContext): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.offset != null && { offset: input.offset }),
    ...(input.period != null && { period: input.period }),
  };
};

const serializeAws_restJson1StageKey = (input: StageKey, context: __SerdeContext): any => {
  return {
    ...(input.restApiId != null && { restApiId: input.restApiId }),
    ...(input.stageName != null && { stageName: input.stageName }),
  };
};

const serializeAws_restJson1ThrottleSettings = (input: ThrottleSettings, context: __SerdeContext): any => {
  return {
    ...(input.burstLimit != null && { burstLimit: input.burstLimit }),
    ...(input.rateLimit != null && { rateLimit: __serializeFloat(input.rateLimit) }),
  };
};

const serializeAws_restJson1TlsConfig = (input: TlsConfig, context: __SerdeContext): any => {
  return {
    ...(input.insecureSkipVerification != null && { insecureSkipVerification: input.insecureSkipVerification }),
  };
};

const deserializeAws_restJson1AccessLogSettings = (output: any, context: __SerdeContext): AccessLogSettings => {
  return {
    destinationArn: __expectString(output.destinationArn),
    format: __expectString(output.format),
  } as any;
};

const deserializeAws_restJson1ApiKey = (output: any, context: __SerdeContext): ApiKey => {
  return {
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    customerId: __expectString(output.customerId),
    description: __expectString(output.description),
    enabled: __expectBoolean(output.enabled),
    id: __expectString(output.id),
    lastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDate)))
        : undefined,
    name: __expectString(output.name),
    stageKeys: output.stageKeys != null ? deserializeAws_restJson1ListOfString(output.stageKeys, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ApiStage = (output: any, context: __SerdeContext): ApiStage => {
  return {
    apiId: __expectString(output.apiId),
    stage: __expectString(output.stage),
    throttle:
      output.throttle != null
        ? deserializeAws_restJson1MapOfApiStageThrottleSettings(output.throttle, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Authorizer = (output: any, context: __SerdeContext): Authorizer => {
  return {
    authType: __expectString(output.authType),
    authorizerCredentials: __expectString(output.authorizerCredentials),
    authorizerResultTtlInSeconds: __expectInt32(output.authorizerResultTtlInSeconds),
    authorizerUri: __expectString(output.authorizerUri),
    id: __expectString(output.id),
    identitySource: __expectString(output.identitySource),
    identityValidationExpression: __expectString(output.identityValidationExpression),
    name: __expectString(output.name),
    providerARNs:
      output.providerARNs != null ? deserializeAws_restJson1ListOfARNs(output.providerARNs, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1BasePathMapping = (output: any, context: __SerdeContext): BasePathMapping => {
  return {
    basePath: __expectString(output.basePath),
    restApiId: __expectString(output.restApiId),
    stage: __expectString(output.stage),
  } as any;
};

const deserializeAws_restJson1CanarySettings = (output: any, context: __SerdeContext): CanarySettings => {
  return {
    deploymentId: __expectString(output.deploymentId),
    percentTraffic: __limitedParseDouble(output.percentTraffic),
    stageVariableOverrides:
      output.stageVariableOverrides != null
        ? deserializeAws_restJson1MapOfStringToString(output.stageVariableOverrides, context)
        : undefined,
    useStageCache: __expectBoolean(output.useStageCache),
  } as any;
};

const deserializeAws_restJson1ClientCertificate = (output: any, context: __SerdeContext): ClientCertificate => {
  return {
    clientCertificateId: __expectString(output.clientCertificateId),
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    expirationDate:
      output.expirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expirationDate)))
        : undefined,
    pemEncodedCertificate: __expectString(output.pemEncodedCertificate),
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    apiSummary:
      output.apiSummary != null
        ? deserializeAws_restJson1PathToMapOfMethodSnapshot(output.apiSummary, context)
        : undefined,
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1DocumentationPart = (output: any, context: __SerdeContext): DocumentationPart => {
  return {
    id: __expectString(output.id),
    location:
      output.location != null ? deserializeAws_restJson1DocumentationPartLocation(output.location, context) : undefined,
    properties: __expectString(output.properties),
  } as any;
};

const deserializeAws_restJson1DocumentationPartLocation = (
  output: any,
  context: __SerdeContext
): DocumentationPartLocation => {
  return {
    method: __expectString(output.method),
    name: __expectString(output.name),
    path: __expectString(output.path),
    statusCode: __expectString(output.statusCode),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DocumentationVersion = (output: any, context: __SerdeContext): DocumentationVersion => {
  return {
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1DomainName = (output: any, context: __SerdeContext): DomainName => {
  return {
    certificateArn: __expectString(output.certificateArn),
    certificateName: __expectString(output.certificateName),
    certificateUploadDate:
      output.certificateUploadDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.certificateUploadDate)))
        : undefined,
    distributionDomainName: __expectString(output.distributionDomainName),
    distributionHostedZoneId: __expectString(output.distributionHostedZoneId),
    domainName: __expectString(output.domainName),
    domainNameStatus: __expectString(output.domainNameStatus),
    domainNameStatusMessage: __expectString(output.domainNameStatusMessage),
    endpointConfiguration:
      output.endpointConfiguration != null
        ? deserializeAws_restJson1EndpointConfiguration(output.endpointConfiguration, context)
        : undefined,
    mutualTlsAuthentication:
      output.mutualTlsAuthentication != null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    ownershipVerificationCertificateArn: __expectString(output.ownershipVerificationCertificateArn),
    regionalCertificateArn: __expectString(output.regionalCertificateArn),
    regionalCertificateName: __expectString(output.regionalCertificateName),
    regionalDomainName: __expectString(output.regionalDomainName),
    regionalHostedZoneId: __expectString(output.regionalHostedZoneId),
    securityPolicy: __expectString(output.securityPolicy),
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointConfiguration = (output: any, context: __SerdeContext): EndpointConfiguration => {
  return {
    types: output.types != null ? deserializeAws_restJson1ListOfEndpointType(output.types, context) : undefined,
    vpcEndpointIds:
      output.vpcEndpointIds != null ? deserializeAws_restJson1ListOfString(output.vpcEndpointIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayResponse = (output: any, context: __SerdeContext): GatewayResponse => {
  return {
    defaultResponse: __expectBoolean(output.defaultResponse),
    responseParameters:
      output.responseParameters != null
        ? deserializeAws_restJson1MapOfStringToString(output.responseParameters, context)
        : undefined,
    responseTemplates:
      output.responseTemplates != null
        ? deserializeAws_restJson1MapOfStringToString(output.responseTemplates, context)
        : undefined,
    responseType: __expectString(output.responseType),
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_restJson1Integration = (output: any, context: __SerdeContext): Integration => {
  return {
    cacheKeyParameters:
      output.cacheKeyParameters != null
        ? deserializeAws_restJson1ListOfString(output.cacheKeyParameters, context)
        : undefined,
    cacheNamespace: __expectString(output.cacheNamespace),
    connectionId: __expectString(output.connectionId),
    connectionType: __expectString(output.connectionType),
    contentHandling: __expectString(output.contentHandling),
    credentials: __expectString(output.credentials),
    httpMethod: __expectString(output.httpMethod),
    integrationResponses:
      output.integrationResponses != null
        ? deserializeAws_restJson1MapOfIntegrationResponse(output.integrationResponses, context)
        : undefined,
    passthroughBehavior: __expectString(output.passthroughBehavior),
    requestParameters:
      output.requestParameters != null
        ? deserializeAws_restJson1MapOfStringToString(output.requestParameters, context)
        : undefined,
    requestTemplates:
      output.requestTemplates != null
        ? deserializeAws_restJson1MapOfStringToString(output.requestTemplates, context)
        : undefined,
    timeoutInMillis: __expectInt32(output.timeoutInMillis),
    tlsConfig: output.tlsConfig != null ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context) : undefined,
    type: __expectString(output.type),
    uri: __expectString(output.uri),
  } as any;
};

const deserializeAws_restJson1IntegrationResponse = (output: any, context: __SerdeContext): IntegrationResponse => {
  return {
    contentHandling: __expectString(output.contentHandling),
    responseParameters:
      output.responseParameters != null
        ? deserializeAws_restJson1MapOfStringToString(output.responseParameters, context)
        : undefined,
    responseTemplates:
      output.responseTemplates != null
        ? deserializeAws_restJson1MapOfStringToString(output.responseTemplates, context)
        : undefined,
    selectionPattern: __expectString(output.selectionPattern),
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_restJson1ListOfApiKey = (output: any, context: __SerdeContext): ApiKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApiKey(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfApiStage = (output: any, context: __SerdeContext): ApiStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApiStage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfARNs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ListOfAuthorizer = (output: any, context: __SerdeContext): Authorizer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Authorizer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfBasePathMapping = (output: any, context: __SerdeContext): BasePathMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BasePathMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfClientCertificate = (output: any, context: __SerdeContext): ClientCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClientCertificate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfDeployment = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfDocumentationPart = (output: any, context: __SerdeContext): DocumentationPart[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DocumentationPart(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfDocumentationVersion = (
  output: any,
  context: __SerdeContext
): DocumentationVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DocumentationVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfDomainName = (output: any, context: __SerdeContext): DomainName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainName(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfEndpointType = (
  output: any,
  context: __SerdeContext
): (EndpointType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ListOfGatewayResponse = (output: any, context: __SerdeContext): GatewayResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GatewayResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfLong = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ListOfModel = (output: any, context: __SerdeContext): Model[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Model(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfRequestValidator = (output: any, context: __SerdeContext): RequestValidator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RequestValidator(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfResource = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfRestApi = (output: any, context: __SerdeContext): RestApi[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RestApi(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSdkConfigurationProperty = (
  output: any,
  context: __SerdeContext
): SdkConfigurationProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SdkConfigurationProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSdkType = (output: any, context: __SerdeContext): SdkType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SdkType(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfStage = (output: any, context: __SerdeContext): Stage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Stage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfString = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ListOfUsage = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListOfLong(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfUsagePlan = (output: any, context: __SerdeContext): UsagePlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsagePlan(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfUsagePlanKey = (output: any, context: __SerdeContext): UsagePlanKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsagePlanKey(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfVpcLink = (output: any, context: __SerdeContext): VpcLink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcLink(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MapOfApiStageThrottleSettings = (
  output: any,
  context: __SerdeContext
): Record<string, ThrottleSettings> => {
  return Object.entries(output).reduce((acc: Record<string, ThrottleSettings>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ThrottleSettings(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfIntegrationResponse = (
  output: any,
  context: __SerdeContext
): Record<string, IntegrationResponse> => {
  return Object.entries(output).reduce((acc: Record<string, IntegrationResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1IntegrationResponse(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfKeyUsages = (output: any, context: __SerdeContext): Record<string, number[][]> => {
  return Object.entries(output).reduce((acc: Record<string, number[][]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ListOfUsage(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfMethod = (output: any, context: __SerdeContext): Record<string, Method> => {
  return Object.entries(output).reduce((acc: Record<string, Method>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Method(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfMethodResponse = (
  output: any,
  context: __SerdeContext
): Record<string, MethodResponse> => {
  return Object.entries(output).reduce((acc: Record<string, MethodResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1MethodResponse(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfMethodSettings = (
  output: any,
  context: __SerdeContext
): Record<string, MethodSetting> => {
  return Object.entries(output).reduce((acc: Record<string, MethodSetting>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1MethodSetting(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfMethodSnapshot = (
  output: any,
  context: __SerdeContext
): Record<string, MethodSnapshot> => {
  return Object.entries(output).reduce((acc: Record<string, MethodSnapshot>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1MethodSnapshot(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfStringToBoolean = (
  output: any,
  context: __SerdeContext
): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfStringToList = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ListOfString(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfStringToString = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Method = (output: any, context: __SerdeContext): Method => {
  return {
    apiKeyRequired: __expectBoolean(output.apiKeyRequired),
    authorizationScopes:
      output.authorizationScopes != null
        ? deserializeAws_restJson1ListOfString(output.authorizationScopes, context)
        : undefined,
    authorizationType: __expectString(output.authorizationType),
    authorizerId: __expectString(output.authorizerId),
    httpMethod: __expectString(output.httpMethod),
    methodIntegration:
      output.methodIntegration != null
        ? deserializeAws_restJson1Integration(output.methodIntegration, context)
        : undefined,
    methodResponses:
      output.methodResponses != null
        ? deserializeAws_restJson1MapOfMethodResponse(output.methodResponses, context)
        : undefined,
    operationName: __expectString(output.operationName),
    requestModels:
      output.requestModels != null
        ? deserializeAws_restJson1MapOfStringToString(output.requestModels, context)
        : undefined,
    requestParameters:
      output.requestParameters != null
        ? deserializeAws_restJson1MapOfStringToBoolean(output.requestParameters, context)
        : undefined,
    requestValidatorId: __expectString(output.requestValidatorId),
  } as any;
};

const deserializeAws_restJson1MethodResponse = (output: any, context: __SerdeContext): MethodResponse => {
  return {
    responseModels:
      output.responseModels != null
        ? deserializeAws_restJson1MapOfStringToString(output.responseModels, context)
        : undefined,
    responseParameters:
      output.responseParameters != null
        ? deserializeAws_restJson1MapOfStringToBoolean(output.responseParameters, context)
        : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_restJson1MethodSetting = (output: any, context: __SerdeContext): MethodSetting => {
  return {
    cacheDataEncrypted: __expectBoolean(output.cacheDataEncrypted),
    cacheTtlInSeconds: __expectInt32(output.cacheTtlInSeconds),
    cachingEnabled: __expectBoolean(output.cachingEnabled),
    dataTraceEnabled: __expectBoolean(output.dataTraceEnabled),
    loggingLevel: __expectString(output.loggingLevel),
    metricsEnabled: __expectBoolean(output.metricsEnabled),
    requireAuthorizationForCacheControl: __expectBoolean(output.requireAuthorizationForCacheControl),
    throttlingBurstLimit: __expectInt32(output.throttlingBurstLimit),
    throttlingRateLimit: __limitedParseDouble(output.throttlingRateLimit),
    unauthorizedCacheControlHeaderStrategy: __expectString(output.unauthorizedCacheControlHeaderStrategy),
  } as any;
};

const deserializeAws_restJson1MethodSnapshot = (output: any, context: __SerdeContext): MethodSnapshot => {
  return {
    apiKeyRequired: __expectBoolean(output.apiKeyRequired),
    authorizationType: __expectString(output.authorizationType),
  } as any;
};

const deserializeAws_restJson1Model = (output: any, context: __SerdeContext): Model => {
  return {
    contentType: __expectString(output.contentType),
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    schema: __expectString(output.schema),
  } as any;
};

const deserializeAws_restJson1MutualTlsAuthentication = (
  output: any,
  context: __SerdeContext
): MutualTlsAuthentication => {
  return {
    truststoreUri: __expectString(output.truststoreUri),
    truststoreVersion: __expectString(output.truststoreVersion),
    truststoreWarnings:
      output.truststoreWarnings != null
        ? deserializeAws_restJson1ListOfString(output.truststoreWarnings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PathToMapOfMethodSnapshot = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, MethodSnapshot>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, MethodSnapshot>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1MapOfMethodSnapshot(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1QuotaSettings = (output: any, context: __SerdeContext): QuotaSettings => {
  return {
    limit: __expectInt32(output.limit),
    offset: __expectInt32(output.offset),
    period: __expectString(output.period),
  } as any;
};

const deserializeAws_restJson1RequestValidator = (output: any, context: __SerdeContext): RequestValidator => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    validateRequestBody: __expectBoolean(output.validateRequestBody),
    validateRequestParameters: __expectBoolean(output.validateRequestParameters),
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    id: __expectString(output.id),
    parentId: __expectString(output.parentId),
    path: __expectString(output.path),
    pathPart: __expectString(output.pathPart),
    resourceMethods:
      output.resourceMethods != null ? deserializeAws_restJson1MapOfMethod(output.resourceMethods, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RestApi = (output: any, context: __SerdeContext): RestApi => {
  return {
    apiKeySource: __expectString(output.apiKeySource),
    binaryMediaTypes:
      output.binaryMediaTypes != null
        ? deserializeAws_restJson1ListOfString(output.binaryMediaTypes, context)
        : undefined,
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    description: __expectString(output.description),
    disableExecuteApiEndpoint: __expectBoolean(output.disableExecuteApiEndpoint),
    endpointConfiguration:
      output.endpointConfiguration != null
        ? deserializeAws_restJson1EndpointConfiguration(output.endpointConfiguration, context)
        : undefined,
    id: __expectString(output.id),
    minimumCompressionSize: __expectInt32(output.minimumCompressionSize),
    name: __expectString(output.name),
    policy: __expectString(output.policy),
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
    version: __expectString(output.version),
    warnings: output.warnings != null ? deserializeAws_restJson1ListOfString(output.warnings, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SdkConfigurationProperty = (
  output: any,
  context: __SerdeContext
): SdkConfigurationProperty => {
  return {
    defaultValue: __expectString(output.defaultValue),
    description: __expectString(output.description),
    friendlyName: __expectString(output.friendlyName),
    name: __expectString(output.name),
    required: __expectBoolean(output.required),
  } as any;
};

const deserializeAws_restJson1SdkType = (output: any, context: __SerdeContext): SdkType => {
  return {
    configurationProperties:
      output.configurationProperties != null
        ? deserializeAws_restJson1ListOfSdkConfigurationProperty(output.configurationProperties, context)
        : undefined,
    description: __expectString(output.description),
    friendlyName: __expectString(output.friendlyName),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1Stage = (output: any, context: __SerdeContext): Stage => {
  return {
    accessLogSettings:
      output.accessLogSettings != null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    cacheClusterEnabled: __expectBoolean(output.cacheClusterEnabled),
    cacheClusterSize: __expectString(output.cacheClusterSize),
    cacheClusterStatus: __expectString(output.cacheClusterStatus),
    canarySettings:
      output.canarySettings != null
        ? deserializeAws_restJson1CanarySettings(output.canarySettings, context)
        : undefined,
    clientCertificateId: __expectString(output.clientCertificateId),
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    deploymentId: __expectString(output.deploymentId),
    description: __expectString(output.description),
    documentationVersion: __expectString(output.documentationVersion),
    lastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDate)))
        : undefined,
    methodSettings:
      output.methodSettings != null
        ? deserializeAws_restJson1MapOfMethodSettings(output.methodSettings, context)
        : undefined,
    stageName: __expectString(output.stageName),
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
    tracingEnabled: __expectBoolean(output.tracingEnabled),
    variables:
      output.variables != null ? deserializeAws_restJson1MapOfStringToString(output.variables, context) : undefined,
    webAclArn: __expectString(output.webAclArn),
  } as any;
};

const deserializeAws_restJson1ThrottleSettings = (output: any, context: __SerdeContext): ThrottleSettings => {
  return {
    burstLimit: __expectInt32(output.burstLimit),
    rateLimit: __limitedParseDouble(output.rateLimit),
  } as any;
};

const deserializeAws_restJson1TlsConfig = (output: any, context: __SerdeContext): TlsConfig => {
  return {
    insecureSkipVerification: __expectBoolean(output.insecureSkipVerification),
  } as any;
};

const deserializeAws_restJson1UsagePlan = (output: any, context: __SerdeContext): UsagePlan => {
  return {
    apiStages: output.apiStages != null ? deserializeAws_restJson1ListOfApiStage(output.apiStages, context) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    productCode: __expectString(output.productCode),
    quota: output.quota != null ? deserializeAws_restJson1QuotaSettings(output.quota, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
    throttle: output.throttle != null ? deserializeAws_restJson1ThrottleSettings(output.throttle, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UsagePlanKey = (output: any, context: __SerdeContext): UsagePlanKey => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1VpcLink = (output: any, context: __SerdeContext): VpcLink => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    tags: output.tags != null ? deserializeAws_restJson1MapOfStringToString(output.tags, context) : undefined,
    targetArns:
      output.targetArns != null ? deserializeAws_restJson1ListOfString(output.targetArns, context) : undefined,
  } as any;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
