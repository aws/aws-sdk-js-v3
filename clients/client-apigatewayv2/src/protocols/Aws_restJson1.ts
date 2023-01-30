// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateApiCommandInput, CreateApiCommandOutput } from "../commands/CreateApiCommand";
import { CreateApiMappingCommandInput, CreateApiMappingCommandOutput } from "../commands/CreateApiMappingCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "../commands/CreateAuthorizerCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "../commands/CreateDomainNameCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "../commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "../commands/CreateIntegrationResponseCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "../commands/CreateRouteCommand";
import {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "../commands/CreateRouteResponseCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "../commands/CreateStageCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "../commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "../commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommandInput, DeleteApiCommandOutput } from "../commands/DeleteApiCommand";
import { DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput } from "../commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "../commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "../commands/DeleteCorsConfigurationCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "../commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "../commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "../commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "../commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "../commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "../commands/DeleteRouteSettingsCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "../commands/DeleteStageCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "../commands/DeleteVpcLinkCommand";
import { ExportApiCommandInput, ExportApiCommandOutput } from "../commands/ExportApiCommand";
import { GetApiCommandInput, GetApiCommandOutput } from "../commands/GetApiCommand";
import { GetApiMappingCommandInput, GetApiMappingCommandOutput } from "../commands/GetApiMappingCommand";
import { GetApiMappingsCommandInput, GetApiMappingsCommandOutput } from "../commands/GetApiMappingsCommand";
import { GetApisCommandInput, GetApisCommandOutput } from "../commands/GetApisCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "../commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "../commands/GetAuthorizersCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "../commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "../commands/GetDomainNamesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "../commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "../commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommandInput, GetIntegrationsCommandOutput } from "../commands/GetIntegrationsCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "../commands/GetModelCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "../commands/GetModelTemplateCommand";
import { GetRouteCommandInput, GetRouteCommandOutput } from "../commands/GetRouteCommand";
import { GetRouteResponseCommandInput, GetRouteResponseCommandOutput } from "../commands/GetRouteResponseCommand";
import { GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput } from "../commands/GetRouteResponsesCommand";
import { GetRoutesCommandInput, GetRoutesCommandOutput } from "../commands/GetRoutesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "../commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "../commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { ImportApiCommandInput, ImportApiCommandOutput } from "../commands/ImportApiCommand";
import { ReimportApiCommandInput, ReimportApiCommandOutput } from "../commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "../commands/ResetAuthorizersCacheCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiCommandInput, UpdateApiCommandOutput } from "../commands/UpdateApiCommand";
import { UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput } from "../commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "../commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "../commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "../commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "../commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "../commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "../commands/UpdateModelCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "../commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "../commands/UpdateRouteResponseCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "../commands/UpdateStageCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "../commands/UpdateVpcLinkCommand";
import { ApiGatewayV2ServiceException as __BaseException } from "../models/ApiGatewayV2ServiceException";
import {
  AccessDeniedException,
  AccessLogSettings,
  Api,
  ApiMapping,
  Authorizer,
  BadRequestException,
  ConflictException,
  Cors,
  Deployment,
  DomainName,
  DomainNameConfiguration,
  Integration,
  IntegrationResponse,
  JWTConfiguration,
  Model,
  MutualTlsAuthentication,
  MutualTlsAuthenticationInput,
  NotFoundException,
  ParameterConstraints,
  Route,
  RouteResponse,
  RouteSettings,
  Stage,
  TlsConfig,
  TlsConfigInput,
  TooManyRequestsException,
  VpcLink,
} from "../models/models_0";

export const serializeAws_restJson1CreateApiCommand = async (
  input: CreateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis";
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeySelectionExpression != null && { apiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration != null && {
      corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
    }),
    ...(input.CredentialsArn != null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.DisableExecuteApiEndpoint != null && { disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint }),
    ...(input.DisableSchemaValidation != null && { disableSchemaValidation: input.DisableSchemaValidation }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.ProtocolType != null && { protocolType: input.ProtocolType }),
    ...(input.RouteKey != null && { routeKey: input.RouteKey }),
    ...(input.RouteSelectionExpression != null && { routeSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.Target != null && { target: input.Target }),
    ...(input.Version != null && { version: input.Version }),
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

export const serializeAws_restJson1CreateApiMappingCommand = async (
  input: CreateApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames/{DomainName}/apimappings";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ApiId != null && { apiId: input.ApiId }),
    ...(input.ApiMappingKey != null && { apiMappingKey: input.ApiMappingKey }),
    ...(input.Stage != null && { stage: input.Stage }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/authorizers";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AuthorizerCredentialsArn != null && { authorizerCredentialsArn: input.AuthorizerCredentialsArn }),
    ...(input.AuthorizerPayloadFormatVersion != null && {
      authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
    }),
    ...(input.AuthorizerResultTtlInSeconds != null && {
      authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
    }),
    ...(input.AuthorizerType != null && { authorizerType: input.AuthorizerType }),
    ...(input.AuthorizerUri != null && { authorizerUri: input.AuthorizerUri }),
    ...(input.EnableSimpleResponses != null && { enableSimpleResponses: input.EnableSimpleResponses }),
    ...(input.IdentitySource != null && {
      identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
    }),
    ...(input.IdentityValidationExpression != null && {
      identityValidationExpression: input.IdentityValidationExpression,
    }),
    ...(input.JwtConfiguration != null && {
      jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
    }),
    ...(input.Name != null && { name: input.Name }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
    ...(input.StageName != null && { stageName: input.StageName }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName != null && { domainName: input.DomainName }),
    ...(input.DomainNameConfigurations != null && {
      domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(input.DomainNameConfigurations, context),
    }),
    ...(input.MutualTlsAuthentication != null && {
      mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
        input.MutualTlsAuthentication,
        context
      ),
    }),
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateIntegrationCommand = async (
  input: CreateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/integrations";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionId != null && { connectionId: input.ConnectionId }),
    ...(input.ConnectionType != null && { connectionType: input.ConnectionType }),
    ...(input.ContentHandlingStrategy != null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.CredentialsArn != null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.IntegrationMethod != null && { integrationMethod: input.IntegrationMethod }),
    ...(input.IntegrationSubtype != null && { integrationSubtype: input.IntegrationSubtype }),
    ...(input.IntegrationType != null && { integrationType: input.IntegrationType }),
    ...(input.IntegrationUri != null && { integrationUri: input.IntegrationUri }),
    ...(input.PassthroughBehavior != null && { passthroughBehavior: input.PassthroughBehavior }),
    ...(input.PayloadFormatVersion != null && { payloadFormatVersion: input.PayloadFormatVersion }),
    ...(input.RequestParameters != null && {
      requestParameters: serializeAws_restJson1IntegrationParameters(input.RequestParameters, context),
    }),
    ...(input.RequestTemplates != null && {
      requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
    }),
    ...(input.ResponseParameters != null && {
      responseParameters: serializeAws_restJson1ResponseParameters(input.ResponseParameters, context),
    }),
    ...(input.TemplateSelectionExpression != null && {
      templateSelectionExpression: input.TemplateSelectionExpression,
    }),
    ...(input.TimeoutInMillis != null && { timeoutInMillis: input.TimeoutInMillis }),
    ...(input.TlsConfig != null && { tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context) }),
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

export const serializeAws_restJson1CreateIntegrationResponseCommand = async (
  input: CreateIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ContentHandlingStrategy != null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.IntegrationResponseKey != null && { integrationResponseKey: input.IntegrationResponseKey }),
    ...(input.ResponseParameters != null && {
      responseParameters: serializeAws_restJson1IntegrationParameters(input.ResponseParameters, context),
    }),
    ...(input.ResponseTemplates != null && {
      responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
    }),
    ...(input.TemplateSelectionExpression != null && {
      templateSelectionExpression: input.TemplateSelectionExpression,
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

export const serializeAws_restJson1CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/models";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ContentType != null && { contentType: input.ContentType }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Schema != null && { schema: input.Schema }),
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

export const serializeAws_restJson1CreateRouteCommand = async (
  input: CreateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/routes";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeyRequired != null && { apiKeyRequired: input.ApiKeyRequired }),
    ...(input.AuthorizationScopes != null && {
      authorizationScopes: serializeAws_restJson1AuthorizationScopes(input.AuthorizationScopes, context),
    }),
    ...(input.AuthorizationType != null && { authorizationType: input.AuthorizationType }),
    ...(input.AuthorizerId != null && { authorizerId: input.AuthorizerId }),
    ...(input.ModelSelectionExpression != null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.OperationName != null && { operationName: input.OperationName }),
    ...(input.RequestModels != null && {
      requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
    }),
    ...(input.RequestParameters != null && {
      requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
    }),
    ...(input.RouteKey != null && { routeKey: input.RouteKey }),
    ...(input.RouteResponseSelectionExpression != null && {
      routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
    }),
    ...(input.Target != null && { target: input.Target }),
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

export const serializeAws_restJson1CreateRouteResponseCommand = async (
  input: CreateRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ModelSelectionExpression != null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.ResponseModels != null && {
      responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
    }),
    ...(input.ResponseParameters != null && {
      responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
    }),
    ...(input.RouteResponseKey != null && { routeResponseKey: input.RouteResponseKey }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/stages";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccessLogSettings != null && {
      accessLogSettings: serializeAws_restJson1AccessLogSettings(input.AccessLogSettings, context),
    }),
    ...(input.AutoDeploy != null && { autoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId != null && { clientCertificateId: input.ClientCertificateId }),
    ...(input.DefaultRouteSettings != null && {
      defaultRouteSettings: serializeAws_restJson1RouteSettings(input.DefaultRouteSettings, context),
    }),
    ...(input.DeploymentId != null && { deploymentId: input.DeploymentId }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.RouteSettings != null && {
      routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
    }),
    ...(input.StageName != null && { stageName: input.StageName }),
    ...(input.StageVariables != null && {
      stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
    }),
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/vpclinks";
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { name: input.Name }),
    ...(input.SecurityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { subnetIds: serializeAws_restJson1SubnetIdList(input.SubnetIds, context) }),
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteAccessLogSettingsCommand = async (
  input: DeleteAccessLogSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/stages/{StageName}/accesslogsettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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

export const serializeAws_restJson1DeleteApiCommand = async (
  input: DeleteApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
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

export const serializeAws_restJson1DeleteApiMappingCommand = async (
  input: DeleteApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApiMappingId",
    () => input.ApiMappingId!,
    "{ApiMappingId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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
    "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AuthorizerId",
    () => input.AuthorizerId!,
    "{AuthorizerId}",
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

export const serializeAws_restJson1DeleteCorsConfigurationCommand = async (
  input: DeleteCorsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/cors";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
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
    "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentId",
    () => input.DeploymentId!,
    "{DeploymentId}",
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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
    "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
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

export const serializeAws_restJson1DeleteIntegrationResponseCommand = async (
  input: DeleteIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationResponseId",
    () => input.IntegrationResponseId!,
    "{IntegrationResponseId}",
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

export const serializeAws_restJson1DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/models/{ModelId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ModelId", () => input.ModelId!, "{ModelId}", false);
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

export const serializeAws_restJson1DeleteRouteCommand = async (
  input: DeleteRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/routes/{RouteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
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

export const serializeAws_restJson1DeleteRouteRequestParameterCommand = async (
  input: DeleteRouteRequestParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RequestParameterKey",
    () => input.RequestParameterKey!,
    "{RequestParameterKey}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
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

export const serializeAws_restJson1DeleteRouteResponseCommand = async (
  input: DeleteRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteResponseId",
    () => input.RouteResponseId!,
    "{RouteResponseId}",
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

export const serializeAws_restJson1DeleteRouteSettingsCommand = async (
  input: DeleteRouteSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteKey", () => input.RouteKey!, "{RouteKey}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/stages/{StageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/vpclinks/{VpcLinkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "VpcLinkId", () => input.VpcLinkId!, "{VpcLinkId}", false);
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

export const serializeAws_restJson1ExportApiCommand = async (
  input: ExportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/exports/{Specification}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "Specification",
    () => input.Specification!,
    "{Specification}",
    false
  );
  const query: any = map({
    exportVersion: [, input.ExportVersion!],
    includeExtensions: [() => input.IncludeExtensions !== void 0, () => input.IncludeExtensions!.toString()],
    outputType: [, __expectNonNull(input.OutputType!, `OutputType`)],
    stageName: [, input.StageName!],
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

export const serializeAws_restJson1GetApiCommand = async (
  input: GetApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
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

export const serializeAws_restJson1GetApiMappingCommand = async (
  input: GetApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApiMappingId",
    () => input.ApiMappingId!,
    "{ApiMappingId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

export const serializeAws_restJson1GetApiMappingsCommand = async (
  input: GetApiMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames/{DomainName}/apimappings";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1GetApisCommand = async (
  input: GetApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis";
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
    "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AuthorizerId",
    () => input.AuthorizerId!,
    "{AuthorizerId}",
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/authorizers";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
    "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentId",
    () => input.DeploymentId!,
    "{DeploymentId}",
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

export const serializeAws_restJson1GetDeploymentsCommand = async (
  input: GetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/deployments";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames";
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
    "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
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

export const serializeAws_restJson1GetIntegrationResponseCommand = async (
  input: GetIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationResponseId",
    () => input.IntegrationResponseId!,
    "{IntegrationResponseId}",
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

export const serializeAws_restJson1GetIntegrationResponsesCommand = async (
  input: GetIntegrationResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
    false
  );
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1GetIntegrationsCommand = async (
  input: GetIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/integrations";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1GetModelCommand = async (
  input: GetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/models/{ModelId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ModelId", () => input.ModelId!, "{ModelId}", false);
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

export const serializeAws_restJson1GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/models";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
    "/v2/apis/{ApiId}/models/{ModelId}/template";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ModelId", () => input.ModelId!, "{ModelId}", false);
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

export const serializeAws_restJson1GetRouteCommand = async (
  input: GetRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/routes/{RouteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
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

export const serializeAws_restJson1GetRouteResponseCommand = async (
  input: GetRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteResponseId",
    () => input.RouteResponseId!,
    "{RouteResponseId}",
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

export const serializeAws_restJson1GetRouteResponsesCommand = async (
  input: GetRouteResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1GetRoutesCommand = async (
  input: GetRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/routes";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/stages/{StageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/stages";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1GetVpcLinkCommand = async (
  input: GetVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/vpclinks/{VpcLinkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "VpcLinkId", () => input.VpcLinkId!, "{VpcLinkId}", false);
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/vpclinks";
  const query: any = map({
    maxResults: [, input.MaxResults!],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ImportApiCommand = async (
  input: ImportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis";
  const query: any = map({
    basepath: [, input.Basepath!],
    failOnWarnings: [() => input.FailOnWarnings !== void 0, () => input.FailOnWarnings!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Body != null && { body: input.Body }),
  });
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

export const serializeAws_restJson1ReimportApiCommand = async (
  input: ReimportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    basepath: [, input.Basepath!],
    failOnWarnings: [() => input.FailOnWarnings !== void 0, () => input.FailOnWarnings!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Body != null && { body: input.Body }),
  });
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

export const serializeAws_restJson1ResetAuthorizersCacheCommand = async (
  input: ResetAuthorizersCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/stages/{StageName}/cache/authorizers";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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

export const serializeAws_restJson1UpdateApiCommand = async (
  input: UpdateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeySelectionExpression != null && { apiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration != null && {
      corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
    }),
    ...(input.CredentialsArn != null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.DisableExecuteApiEndpoint != null && { disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint }),
    ...(input.DisableSchemaValidation != null && { disableSchemaValidation: input.DisableSchemaValidation }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.RouteKey != null && { routeKey: input.RouteKey }),
    ...(input.RouteSelectionExpression != null && { routeSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Target != null && { target: input.Target }),
    ...(input.Version != null && { version: input.Version }),
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

export const serializeAws_restJson1UpdateApiMappingCommand = async (
  input: UpdateApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApiMappingId",
    () => input.ApiMappingId!,
    "{ApiMappingId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ApiId != null && { apiId: input.ApiId }),
    ...(input.ApiMappingKey != null && { apiMappingKey: input.ApiMappingKey }),
    ...(input.Stage != null && { stage: input.Stage }),
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
    "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AuthorizerId",
    () => input.AuthorizerId!,
    "{AuthorizerId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AuthorizerCredentialsArn != null && { authorizerCredentialsArn: input.AuthorizerCredentialsArn }),
    ...(input.AuthorizerPayloadFormatVersion != null && {
      authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
    }),
    ...(input.AuthorizerResultTtlInSeconds != null && {
      authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
    }),
    ...(input.AuthorizerType != null && { authorizerType: input.AuthorizerType }),
    ...(input.AuthorizerUri != null && { authorizerUri: input.AuthorizerUri }),
    ...(input.EnableSimpleResponses != null && { enableSimpleResponses: input.EnableSimpleResponses }),
    ...(input.IdentitySource != null && {
      identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
    }),
    ...(input.IdentityValidationExpression != null && {
      identityValidationExpression: input.IdentityValidationExpression,
    }),
    ...(input.JwtConfiguration != null && {
      jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
    }),
    ...(input.Name != null && { name: input.Name }),
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
    "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DeploymentId",
    () => input.DeploymentId!,
    "{DeploymentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DomainNameConfigurations != null && {
      domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(input.DomainNameConfigurations, context),
    }),
    ...(input.MutualTlsAuthentication != null && {
      mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
        input.MutualTlsAuthentication,
        context
      ),
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
    "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionId != null && { connectionId: input.ConnectionId }),
    ...(input.ConnectionType != null && { connectionType: input.ConnectionType }),
    ...(input.ContentHandlingStrategy != null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.CredentialsArn != null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.IntegrationMethod != null && { integrationMethod: input.IntegrationMethod }),
    ...(input.IntegrationSubtype != null && { integrationSubtype: input.IntegrationSubtype }),
    ...(input.IntegrationType != null && { integrationType: input.IntegrationType }),
    ...(input.IntegrationUri != null && { integrationUri: input.IntegrationUri }),
    ...(input.PassthroughBehavior != null && { passthroughBehavior: input.PassthroughBehavior }),
    ...(input.PayloadFormatVersion != null && { payloadFormatVersion: input.PayloadFormatVersion }),
    ...(input.RequestParameters != null && {
      requestParameters: serializeAws_restJson1IntegrationParameters(input.RequestParameters, context),
    }),
    ...(input.RequestTemplates != null && {
      requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
    }),
    ...(input.ResponseParameters != null && {
      responseParameters: serializeAws_restJson1ResponseParameters(input.ResponseParameters, context),
    }),
    ...(input.TemplateSelectionExpression != null && {
      templateSelectionExpression: input.TemplateSelectionExpression,
    }),
    ...(input.TimeoutInMillis != null && { timeoutInMillis: input.TimeoutInMillis }),
    ...(input.TlsConfig != null && { tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context) }),
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
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationId",
    () => input.IntegrationId!,
    "{IntegrationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationResponseId",
    () => input.IntegrationResponseId!,
    "{IntegrationResponseId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ContentHandlingStrategy != null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.IntegrationResponseKey != null && { integrationResponseKey: input.IntegrationResponseKey }),
    ...(input.ResponseParameters != null && {
      responseParameters: serializeAws_restJson1IntegrationParameters(input.ResponseParameters, context),
    }),
    ...(input.ResponseTemplates != null && {
      responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
    }),
    ...(input.TemplateSelectionExpression != null && {
      templateSelectionExpression: input.TemplateSelectionExpression,
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/models/{ModelId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ModelId", () => input.ModelId!, "{ModelId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ContentType != null && { contentType: input.ContentType }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Schema != null && { schema: input.Schema }),
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

export const serializeAws_restJson1UpdateRouteCommand = async (
  input: UpdateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/routes/{RouteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeyRequired != null && { apiKeyRequired: input.ApiKeyRequired }),
    ...(input.AuthorizationScopes != null && {
      authorizationScopes: serializeAws_restJson1AuthorizationScopes(input.AuthorizationScopes, context),
    }),
    ...(input.AuthorizationType != null && { authorizationType: input.AuthorizationType }),
    ...(input.AuthorizerId != null && { authorizerId: input.AuthorizerId }),
    ...(input.ModelSelectionExpression != null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.OperationName != null && { operationName: input.OperationName }),
    ...(input.RequestModels != null && {
      requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
    }),
    ...(input.RequestParameters != null && {
      requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
    }),
    ...(input.RouteKey != null && { routeKey: input.RouteKey }),
    ...(input.RouteResponseSelectionExpression != null && {
      routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
    }),
    ...(input.Target != null && { target: input.Target }),
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

export const serializeAws_restJson1UpdateRouteResponseCommand = async (
  input: UpdateRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RouteId", () => input.RouteId!, "{RouteId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteResponseId",
    () => input.RouteResponseId!,
    "{RouteResponseId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ModelSelectionExpression != null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.ResponseModels != null && {
      responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
    }),
    ...(input.ResponseParameters != null && {
      responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
    }),
    ...(input.RouteResponseKey != null && { routeResponseKey: input.RouteResponseKey }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis/{ApiId}/stages/{StageName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ApiId", () => input.ApiId!, "{ApiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccessLogSettings != null && {
      accessLogSettings: serializeAws_restJson1AccessLogSettings(input.AccessLogSettings, context),
    }),
    ...(input.AutoDeploy != null && { autoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId != null && { clientCertificateId: input.ClientCertificateId }),
    ...(input.DefaultRouteSettings != null && {
      defaultRouteSettings: serializeAws_restJson1RouteSettings(input.DefaultRouteSettings, context),
    }),
    ...(input.DeploymentId != null && { deploymentId: input.DeploymentId }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.RouteSettings != null && {
      routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
    }),
    ...(input.StageVariables != null && {
      stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/vpclinks/{VpcLinkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "VpcLinkId", () => input.VpcLinkId!, "{VpcLinkId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { name: input.Name }),
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

export const deserializeAws_restJson1CreateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiEndpoint != null) {
    contents.ApiEndpoint = __expectString(data.apiEndpoint);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiKeySelectionExpression != null) {
    contents.ApiKeySelectionExpression = __expectString(data.apiKeySelectionExpression);
  }
  if (data.corsConfiguration != null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.DisableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.disableSchemaValidation != null) {
    contents.DisableSchemaValidation = __expectBoolean(data.disableSchemaValidation);
  }
  if (data.importInfo != null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.protocolType != null) {
    contents.ProtocolType = __expectString(data.protocolType);
  }
  if (data.routeSelectionExpression != null) {
    contents.RouteSelectionExpression = __expectString(data.routeSelectionExpression);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version != null) {
    contents.Version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiMappingId != null) {
    contents.ApiMappingId = __expectString(data.apiMappingId);
  }
  if (data.apiMappingKey != null) {
    contents.ApiMappingKey = __expectString(data.apiMappingKey);
  }
  if (data.stage != null) {
    contents.Stage = __expectString(data.stage);
  }
  return contents;
};

const deserializeAws_restJson1CreateApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.authorizerCredentialsArn != null) {
    contents.AuthorizerCredentialsArn = __expectString(data.authorizerCredentialsArn);
  }
  if (data.authorizerId != null) {
    contents.AuthorizerId = __expectString(data.authorizerId);
  }
  if (data.authorizerPayloadFormatVersion != null) {
    contents.AuthorizerPayloadFormatVersion = __expectString(data.authorizerPayloadFormatVersion);
  }
  if (data.authorizerResultTtlInSeconds != null) {
    contents.AuthorizerResultTtlInSeconds = __expectInt32(data.authorizerResultTtlInSeconds);
  }
  if (data.authorizerType != null) {
    contents.AuthorizerType = __expectString(data.authorizerType);
  }
  if (data.authorizerUri != null) {
    contents.AuthorizerUri = __expectString(data.authorizerUri);
  }
  if (data.enableSimpleResponses != null) {
    contents.EnableSimpleResponses = __expectBoolean(data.enableSimpleResponses);
  }
  if (data.identitySource != null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression != null) {
    contents.IdentityValidationExpression = __expectString(data.identityValidationExpression);
  }
  if (data.jwtConfiguration != null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.autoDeployed != null) {
    contents.AutoDeployed = __expectBoolean(data.autoDeployed);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.deploymentId != null) {
    contents.DeploymentId = __expectString(data.deploymentId);
  }
  if (data.deploymentStatus != null) {
    contents.DeploymentStatus = __expectString(data.deploymentStatus);
  }
  if (data.deploymentStatusMessage != null) {
    contents.DeploymentStatusMessage = __expectString(data.deploymentStatusMessage);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.apiMappingSelectionExpression != null) {
    contents.ApiMappingSelectionExpression = __expectString(data.apiMappingSelectionExpression);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.domainNameConfigurations != null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication != null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.apigatewayv2#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.connectionId != null) {
    contents.ConnectionId = __expectString(data.connectionId);
  }
  if (data.connectionType != null) {
    contents.ConnectionType = __expectString(data.connectionType);
  }
  if (data.contentHandlingStrategy != null) {
    contents.ContentHandlingStrategy = __expectString(data.contentHandlingStrategy);
  }
  if (data.credentialsArn != null) {
    contents.CredentialsArn = __expectString(data.credentialsArn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.integrationId != null) {
    contents.IntegrationId = __expectString(data.integrationId);
  }
  if (data.integrationMethod != null) {
    contents.IntegrationMethod = __expectString(data.integrationMethod);
  }
  if (data.integrationResponseSelectionExpression != null) {
    contents.IntegrationResponseSelectionExpression = __expectString(data.integrationResponseSelectionExpression);
  }
  if (data.integrationSubtype != null) {
    contents.IntegrationSubtype = __expectString(data.integrationSubtype);
  }
  if (data.integrationType != null) {
    contents.IntegrationType = __expectString(data.integrationType);
  }
  if (data.integrationUri != null) {
    contents.IntegrationUri = __expectString(data.integrationUri);
  }
  if (data.passthroughBehavior != null) {
    contents.PassthroughBehavior = __expectString(data.passthroughBehavior);
  }
  if (data.payloadFormatVersion != null) {
    contents.PayloadFormatVersion = __expectString(data.payloadFormatVersion);
  }
  if (data.requestParameters != null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates != null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
  }
  if (data.templateSelectionExpression != null) {
    contents.TemplateSelectionExpression = __expectString(data.templateSelectionExpression);
  }
  if (data.timeoutInMillis != null) {
    contents.TimeoutInMillis = __expectInt32(data.timeoutInMillis);
  }
  if (data.tlsConfig != null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentHandlingStrategy != null) {
    contents.ContentHandlingStrategy = __expectString(data.contentHandlingStrategy);
  }
  if (data.integrationResponseId != null) {
    contents.IntegrationResponseId = __expectString(data.integrationResponseId);
  }
  if (data.integrationResponseKey != null) {
    contents.IntegrationResponseKey = __expectString(data.integrationResponseKey);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression != null) {
    contents.TemplateSelectionExpression = __expectString(data.templateSelectionExpression);
  }
  return contents;
};

const deserializeAws_restJson1CreateIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.ContentType = __expectString(data.contentType);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.modelId != null) {
    contents.ModelId = __expectString(data.modelId);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.schema != null) {
    contents.Schema = __expectString(data.schema);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiKeyRequired != null) {
    contents.ApiKeyRequired = __expectBoolean(data.apiKeyRequired);
  }
  if (data.authorizationScopes != null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType != null) {
    contents.AuthorizationType = __expectString(data.authorizationType);
  }
  if (data.authorizerId != null) {
    contents.AuthorizerId = __expectString(data.authorizerId);
  }
  if (data.modelSelectionExpression != null) {
    contents.ModelSelectionExpression = __expectString(data.modelSelectionExpression);
  }
  if (data.operationName != null) {
    contents.OperationName = __expectString(data.operationName);
  }
  if (data.requestModels != null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters != null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId != null) {
    contents.RouteId = __expectString(data.routeId);
  }
  if (data.routeKey != null) {
    contents.RouteKey = __expectString(data.routeKey);
  }
  if (data.routeResponseSelectionExpression != null) {
    contents.RouteResponseSelectionExpression = __expectString(data.routeResponseSelectionExpression);
  }
  if (data.target != null) {
    contents.Target = __expectString(data.target);
  }
  return contents;
};

const deserializeAws_restJson1CreateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.modelSelectionExpression != null) {
    contents.ModelSelectionExpression = __expectString(data.modelSelectionExpression);
  }
  if (data.responseModels != null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId != null) {
    contents.RouteResponseId = __expectString(data.routeResponseId);
  }
  if (data.routeResponseKey != null) {
    contents.RouteResponseKey = __expectString(data.routeResponseKey);
  }
  return contents;
};

const deserializeAws_restJson1CreateRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.autoDeploy != null) {
    contents.AutoDeploy = __expectBoolean(data.autoDeploy);
  }
  if (data.clientCertificateId != null) {
    contents.ClientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.defaultRouteSettings != null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId != null) {
    contents.DeploymentId = __expectString(data.deploymentId);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.lastDeploymentStatusMessage != null) {
    contents.LastDeploymentStatusMessage = __expectString(data.lastDeploymentStatusMessage);
  }
  if (data.lastUpdatedDate != null) {
    contents.LastUpdatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdatedDate));
  }
  if (data.routeSettings != null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName != null) {
    contents.StageName = __expectString(data.stageName);
  }
  if (data.stageVariables != null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.securityGroupIds != null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds != null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId != null) {
    contents.VpcLinkId = __expectString(data.vpcLinkId);
  }
  if (data.vpcLinkStatus != null) {
    contents.VpcLinkStatus = __expectString(data.vpcLinkStatus);
  }
  if (data.vpcLinkStatusMessage != null) {
    contents.VpcLinkStatusMessage = __expectString(data.vpcLinkStatusMessage);
  }
  if (data.vpcLinkVersion != null) {
    contents.VpcLinkVersion = __expectString(data.vpcLinkVersion);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAccessLogSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessLogSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAccessLogSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCorsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCorsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCorsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRouteRequestParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteRequestParameterCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteRequestParameterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRouteRequestParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteRequestParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRouteSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRouteSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ExportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

const deserializeAws_restJson1ExportApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiEndpoint != null) {
    contents.ApiEndpoint = __expectString(data.apiEndpoint);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiKeySelectionExpression != null) {
    contents.ApiKeySelectionExpression = __expectString(data.apiKeySelectionExpression);
  }
  if (data.corsConfiguration != null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.DisableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.disableSchemaValidation != null) {
    contents.DisableSchemaValidation = __expectBoolean(data.disableSchemaValidation);
  }
  if (data.importInfo != null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.protocolType != null) {
    contents.ProtocolType = __expectString(data.protocolType);
  }
  if (data.routeSelectionExpression != null) {
    contents.RouteSelectionExpression = __expectString(data.routeSelectionExpression);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version != null) {
    contents.Version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiMappingId != null) {
    contents.ApiMappingId = __expectString(data.apiMappingId);
  }
  if (data.apiMappingKey != null) {
    contents.ApiMappingKey = __expectString(data.apiMappingKey);
  }
  if (data.stage != null) {
    contents.Stage = __expectString(data.stage);
  }
  return contents;
};

const deserializeAws_restJson1GetApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApiMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfApiMapping(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetApiMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfApi(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetApisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.authorizerCredentialsArn != null) {
    contents.AuthorizerCredentialsArn = __expectString(data.authorizerCredentialsArn);
  }
  if (data.authorizerId != null) {
    contents.AuthorizerId = __expectString(data.authorizerId);
  }
  if (data.authorizerPayloadFormatVersion != null) {
    contents.AuthorizerPayloadFormatVersion = __expectString(data.authorizerPayloadFormatVersion);
  }
  if (data.authorizerResultTtlInSeconds != null) {
    contents.AuthorizerResultTtlInSeconds = __expectInt32(data.authorizerResultTtlInSeconds);
  }
  if (data.authorizerType != null) {
    contents.AuthorizerType = __expectString(data.authorizerType);
  }
  if (data.authorizerUri != null) {
    contents.AuthorizerUri = __expectString(data.authorizerUri);
  }
  if (data.enableSimpleResponses != null) {
    contents.EnableSimpleResponses = __expectBoolean(data.enableSimpleResponses);
  }
  if (data.identitySource != null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression != null) {
    contents.IdentityValidationExpression = __expectString(data.identityValidationExpression);
  }
  if (data.jwtConfiguration != null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfAuthorizer(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.autoDeployed != null) {
    contents.AutoDeployed = __expectBoolean(data.autoDeployed);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.deploymentId != null) {
    contents.DeploymentId = __expectString(data.deploymentId);
  }
  if (data.deploymentStatus != null) {
    contents.DeploymentStatus = __expectString(data.deploymentStatus);
  }
  if (data.deploymentStatusMessage != null) {
    contents.DeploymentStatusMessage = __expectString(data.deploymentStatusMessage);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfDeployment(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.apiMappingSelectionExpression != null) {
    contents.ApiMappingSelectionExpression = __expectString(data.apiMappingSelectionExpression);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.domainNameConfigurations != null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication != null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfDomainName(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.connectionId != null) {
    contents.ConnectionId = __expectString(data.connectionId);
  }
  if (data.connectionType != null) {
    contents.ConnectionType = __expectString(data.connectionType);
  }
  if (data.contentHandlingStrategy != null) {
    contents.ContentHandlingStrategy = __expectString(data.contentHandlingStrategy);
  }
  if (data.credentialsArn != null) {
    contents.CredentialsArn = __expectString(data.credentialsArn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.integrationId != null) {
    contents.IntegrationId = __expectString(data.integrationId);
  }
  if (data.integrationMethod != null) {
    contents.IntegrationMethod = __expectString(data.integrationMethod);
  }
  if (data.integrationResponseSelectionExpression != null) {
    contents.IntegrationResponseSelectionExpression = __expectString(data.integrationResponseSelectionExpression);
  }
  if (data.integrationSubtype != null) {
    contents.IntegrationSubtype = __expectString(data.integrationSubtype);
  }
  if (data.integrationType != null) {
    contents.IntegrationType = __expectString(data.integrationType);
  }
  if (data.integrationUri != null) {
    contents.IntegrationUri = __expectString(data.integrationUri);
  }
  if (data.passthroughBehavior != null) {
    contents.PassthroughBehavior = __expectString(data.passthroughBehavior);
  }
  if (data.payloadFormatVersion != null) {
    contents.PayloadFormatVersion = __expectString(data.payloadFormatVersion);
  }
  if (data.requestParameters != null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates != null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
  }
  if (data.templateSelectionExpression != null) {
    contents.TemplateSelectionExpression = __expectString(data.templateSelectionExpression);
  }
  if (data.timeoutInMillis != null) {
    contents.TimeoutInMillis = __expectInt32(data.timeoutInMillis);
  }
  if (data.tlsConfig != null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.contentHandlingStrategy != null) {
    contents.ContentHandlingStrategy = __expectString(data.contentHandlingStrategy);
  }
  if (data.integrationResponseId != null) {
    contents.IntegrationResponseId = __expectString(data.integrationResponseId);
  }
  if (data.integrationResponseKey != null) {
    contents.IntegrationResponseKey = __expectString(data.integrationResponseKey);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression != null) {
    contents.TemplateSelectionExpression = __expectString(data.templateSelectionExpression);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIntegrationResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponsesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfIntegrationResponse(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetIntegrationResponsesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfIntegration(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.ContentType = __expectString(data.contentType);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.modelId != null) {
    contents.ModelId = __expectString(data.modelId);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.schema != null) {
    contents.Schema = __expectString(data.schema);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfModel(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.Value = __expectString(data.value);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiKeyRequired != null) {
    contents.ApiKeyRequired = __expectBoolean(data.apiKeyRequired);
  }
  if (data.authorizationScopes != null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType != null) {
    contents.AuthorizationType = __expectString(data.authorizationType);
  }
  if (data.authorizerId != null) {
    contents.AuthorizerId = __expectString(data.authorizerId);
  }
  if (data.modelSelectionExpression != null) {
    contents.ModelSelectionExpression = __expectString(data.modelSelectionExpression);
  }
  if (data.operationName != null) {
    contents.OperationName = __expectString(data.operationName);
  }
  if (data.requestModels != null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters != null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId != null) {
    contents.RouteId = __expectString(data.routeId);
  }
  if (data.routeKey != null) {
    contents.RouteKey = __expectString(data.routeKey);
  }
  if (data.routeResponseSelectionExpression != null) {
    contents.RouteResponseSelectionExpression = __expectString(data.routeResponseSelectionExpression);
  }
  if (data.target != null) {
    contents.Target = __expectString(data.target);
  }
  return contents;
};

const deserializeAws_restJson1GetRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.modelSelectionExpression != null) {
    contents.ModelSelectionExpression = __expectString(data.modelSelectionExpression);
  }
  if (data.responseModels != null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId != null) {
    contents.RouteResponseId = __expectString(data.routeResponseId);
  }
  if (data.routeResponseKey != null) {
    contents.RouteResponseKey = __expectString(data.routeResponseKey);
  }
  return contents;
};

const deserializeAws_restJson1GetRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRouteResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteResponsesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfRouteResponse(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetRouteResponsesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfRoute(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.autoDeploy != null) {
    contents.AutoDeploy = __expectBoolean(data.autoDeploy);
  }
  if (data.clientCertificateId != null) {
    contents.ClientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.defaultRouteSettings != null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId != null) {
    contents.DeploymentId = __expectString(data.deploymentId);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.lastDeploymentStatusMessage != null) {
    contents.LastDeploymentStatusMessage = __expectString(data.lastDeploymentStatusMessage);
  }
  if (data.lastUpdatedDate != null) {
    contents.LastUpdatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdatedDate));
  }
  if (data.routeSettings != null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName != null) {
    contents.StageName = __expectString(data.stageName);
  }
  if (data.stageVariables != null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfStage(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.securityGroupIds != null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds != null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId != null) {
    contents.VpcLinkId = __expectString(data.vpcLinkId);
  }
  if (data.vpcLinkStatus != null) {
    contents.VpcLinkStatus = __expectString(data.vpcLinkStatus);
  }
  if (data.vpcLinkStatusMessage != null) {
    contents.VpcLinkStatusMessage = __expectString(data.vpcLinkStatusMessage);
  }
  if (data.vpcLinkVersion != null) {
    contents.VpcLinkVersion = __expectString(data.vpcLinkVersion);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.items != null) {
    contents.Items = deserializeAws_restJson1__listOfVpcLink(data.items, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ImportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiEndpoint != null) {
    contents.ApiEndpoint = __expectString(data.apiEndpoint);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiKeySelectionExpression != null) {
    contents.ApiKeySelectionExpression = __expectString(data.apiKeySelectionExpression);
  }
  if (data.corsConfiguration != null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.DisableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.disableSchemaValidation != null) {
    contents.DisableSchemaValidation = __expectBoolean(data.disableSchemaValidation);
  }
  if (data.importInfo != null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.protocolType != null) {
    contents.ProtocolType = __expectString(data.protocolType);
  }
  if (data.routeSelectionExpression != null) {
    contents.RouteSelectionExpression = __expectString(data.routeSelectionExpression);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version != null) {
    contents.Version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1ImportApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ReimportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReimportApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiEndpoint != null) {
    contents.ApiEndpoint = __expectString(data.apiEndpoint);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiKeySelectionExpression != null) {
    contents.ApiKeySelectionExpression = __expectString(data.apiKeySelectionExpression);
  }
  if (data.corsConfiguration != null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.DisableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.disableSchemaValidation != null) {
    contents.DisableSchemaValidation = __expectBoolean(data.disableSchemaValidation);
  }
  if (data.importInfo != null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.protocolType != null) {
    contents.ProtocolType = __expectString(data.protocolType);
  }
  if (data.routeSelectionExpression != null) {
    contents.RouteSelectionExpression = __expectString(data.routeSelectionExpression);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version != null) {
    contents.Version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1ReimportApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ResetAuthorizersCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAuthorizersCacheCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetAuthorizersCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ResetAuthorizersCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAuthorizersCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 201 && output.statusCode >= 300) {
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiEndpoint != null) {
    contents.ApiEndpoint = __expectString(data.apiEndpoint);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiKeySelectionExpression != null) {
    contents.ApiKeySelectionExpression = __expectString(data.apiKeySelectionExpression);
  }
  if (data.corsConfiguration != null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.disableExecuteApiEndpoint != null) {
    contents.DisableExecuteApiEndpoint = __expectBoolean(data.disableExecuteApiEndpoint);
  }
  if (data.disableSchemaValidation != null) {
    contents.DisableSchemaValidation = __expectBoolean(data.disableSchemaValidation);
  }
  if (data.importInfo != null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.protocolType != null) {
    contents.ProtocolType = __expectString(data.protocolType);
  }
  if (data.routeSelectionExpression != null) {
    contents.RouteSelectionExpression = __expectString(data.routeSelectionExpression);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version != null) {
    contents.Version = __expectString(data.version);
  }
  if (data.warnings != null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiId != null) {
    contents.ApiId = __expectString(data.apiId);
  }
  if (data.apiMappingId != null) {
    contents.ApiMappingId = __expectString(data.apiMappingId);
  }
  if (data.apiMappingKey != null) {
    contents.ApiMappingKey = __expectString(data.apiMappingKey);
  }
  if (data.stage != null) {
    contents.Stage = __expectString(data.stage);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.authorizerCredentialsArn != null) {
    contents.AuthorizerCredentialsArn = __expectString(data.authorizerCredentialsArn);
  }
  if (data.authorizerId != null) {
    contents.AuthorizerId = __expectString(data.authorizerId);
  }
  if (data.authorizerPayloadFormatVersion != null) {
    contents.AuthorizerPayloadFormatVersion = __expectString(data.authorizerPayloadFormatVersion);
  }
  if (data.authorizerResultTtlInSeconds != null) {
    contents.AuthorizerResultTtlInSeconds = __expectInt32(data.authorizerResultTtlInSeconds);
  }
  if (data.authorizerType != null) {
    contents.AuthorizerType = __expectString(data.authorizerType);
  }
  if (data.authorizerUri != null) {
    contents.AuthorizerUri = __expectString(data.authorizerUri);
  }
  if (data.enableSimpleResponses != null) {
    contents.EnableSimpleResponses = __expectBoolean(data.enableSimpleResponses);
  }
  if (data.identitySource != null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression != null) {
    contents.IdentityValidationExpression = __expectString(data.identityValidationExpression);
  }
  if (data.jwtConfiguration != null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.autoDeployed != null) {
    contents.AutoDeployed = __expectBoolean(data.autoDeployed);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.deploymentId != null) {
    contents.DeploymentId = __expectString(data.deploymentId);
  }
  if (data.deploymentStatus != null) {
    contents.DeploymentStatus = __expectString(data.deploymentStatus);
  }
  if (data.deploymentStatusMessage != null) {
    contents.DeploymentStatusMessage = __expectString(data.deploymentStatusMessage);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.apiMappingSelectionExpression != null) {
    contents.ApiMappingSelectionExpression = __expectString(data.apiMappingSelectionExpression);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.domainNameConfigurations != null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication != null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.connectionId != null) {
    contents.ConnectionId = __expectString(data.connectionId);
  }
  if (data.connectionType != null) {
    contents.ConnectionType = __expectString(data.connectionType);
  }
  if (data.contentHandlingStrategy != null) {
    contents.ContentHandlingStrategy = __expectString(data.contentHandlingStrategy);
  }
  if (data.credentialsArn != null) {
    contents.CredentialsArn = __expectString(data.credentialsArn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.integrationId != null) {
    contents.IntegrationId = __expectString(data.integrationId);
  }
  if (data.integrationMethod != null) {
    contents.IntegrationMethod = __expectString(data.integrationMethod);
  }
  if (data.integrationResponseSelectionExpression != null) {
    contents.IntegrationResponseSelectionExpression = __expectString(data.integrationResponseSelectionExpression);
  }
  if (data.integrationSubtype != null) {
    contents.IntegrationSubtype = __expectString(data.integrationSubtype);
  }
  if (data.integrationType != null) {
    contents.IntegrationType = __expectString(data.integrationType);
  }
  if (data.integrationUri != null) {
    contents.IntegrationUri = __expectString(data.integrationUri);
  }
  if (data.passthroughBehavior != null) {
    contents.PassthroughBehavior = __expectString(data.passthroughBehavior);
  }
  if (data.payloadFormatVersion != null) {
    contents.PayloadFormatVersion = __expectString(data.payloadFormatVersion);
  }
  if (data.requestParameters != null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates != null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
  }
  if (data.templateSelectionExpression != null) {
    contents.TemplateSelectionExpression = __expectString(data.templateSelectionExpression);
  }
  if (data.timeoutInMillis != null) {
    contents.TimeoutInMillis = __expectInt32(data.timeoutInMillis);
  }
  if (data.tlsConfig != null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.contentHandlingStrategy != null) {
    contents.ContentHandlingStrategy = __expectString(data.contentHandlingStrategy);
  }
  if (data.integrationResponseId != null) {
    contents.IntegrationResponseId = __expectString(data.integrationResponseId);
  }
  if (data.integrationResponseKey != null) {
    contents.IntegrationResponseKey = __expectString(data.integrationResponseKey);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates != null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression != null) {
    contents.TemplateSelectionExpression = __expectString(data.templateSelectionExpression);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.ContentType = __expectString(data.contentType);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.modelId != null) {
    contents.ModelId = __expectString(data.modelId);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.schema != null) {
    contents.Schema = __expectString(data.schema);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.apiKeyRequired != null) {
    contents.ApiKeyRequired = __expectBoolean(data.apiKeyRequired);
  }
  if (data.authorizationScopes != null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType != null) {
    contents.AuthorizationType = __expectString(data.authorizationType);
  }
  if (data.authorizerId != null) {
    contents.AuthorizerId = __expectString(data.authorizerId);
  }
  if (data.modelSelectionExpression != null) {
    contents.ModelSelectionExpression = __expectString(data.modelSelectionExpression);
  }
  if (data.operationName != null) {
    contents.OperationName = __expectString(data.operationName);
  }
  if (data.requestModels != null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters != null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId != null) {
    contents.RouteId = __expectString(data.routeId);
  }
  if (data.routeKey != null) {
    contents.RouteKey = __expectString(data.routeKey);
  }
  if (data.routeResponseSelectionExpression != null) {
    contents.RouteResponseSelectionExpression = __expectString(data.routeResponseSelectionExpression);
  }
  if (data.target != null) {
    contents.Target = __expectString(data.target);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.modelSelectionExpression != null) {
    contents.ModelSelectionExpression = __expectString(data.modelSelectionExpression);
  }
  if (data.responseModels != null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters != null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId != null) {
    contents.RouteResponseId = __expectString(data.routeResponseId);
  }
  if (data.routeResponseKey != null) {
    contents.RouteResponseKey = __expectString(data.routeResponseKey);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged != null) {
    contents.ApiGatewayManaged = __expectBoolean(data.apiGatewayManaged);
  }
  if (data.autoDeploy != null) {
    contents.AutoDeploy = __expectBoolean(data.autoDeploy);
  }
  if (data.clientCertificateId != null) {
    contents.ClientCertificateId = __expectString(data.clientCertificateId);
  }
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.defaultRouteSettings != null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId != null) {
    contents.DeploymentId = __expectString(data.deploymentId);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.lastDeploymentStatusMessage != null) {
    contents.LastDeploymentStatusMessage = __expectString(data.lastDeploymentStatusMessage);
  }
  if (data.lastUpdatedDate != null) {
    contents.LastUpdatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.lastUpdatedDate));
  }
  if (data.routeSettings != null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName != null) {
    contents.StageName = __expectString(data.stageName);
  }
  if (data.stageVariables != null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.createdDate != null) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdDate));
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.securityGroupIds != null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds != null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId != null) {
    contents.VpcLinkId = __expectString(data.vpcLinkId);
  }
  if (data.vpcLinkStatus != null) {
    contents.VpcLinkStatus = __expectString(data.vpcLinkStatus);
  }
  if (data.vpcLinkStatusMessage != null) {
    contents.VpcLinkStatusMessage = __expectString(data.vpcLinkStatusMessage);
  }
  if (data.vpcLinkVersion != null) {
    contents.VpcLinkVersion = __expectString(data.vpcLinkVersion);
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
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
    contents.Message = __expectString(data.message);
  }
  const exception = new ConflictException({
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
    contents.Message = __expectString(data.message);
  }
  if (data.resourceType != null) {
    contents.ResourceType = __expectString(data.resourceType);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.limitType != null) {
    contents.LimitType = __expectString(data.limitType);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AccessLogSettings = (input: AccessLogSettings, context: __SerdeContext): any => {
  return {
    ...(input.DestinationArn != null && { destinationArn: input.DestinationArn }),
    ...(input.Format != null && { format: input.Format }),
  };
};

const serializeAws_restJson1AuthorizationScopes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Cors = (input: Cors, context: __SerdeContext): any => {
  return {
    ...(input.AllowCredentials != null && { allowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders != null && {
      allowHeaders: serializeAws_restJson1CorsHeaderList(input.AllowHeaders, context),
    }),
    ...(input.AllowMethods != null && {
      allowMethods: serializeAws_restJson1CorsMethodList(input.AllowMethods, context),
    }),
    ...(input.AllowOrigins != null && {
      allowOrigins: serializeAws_restJson1CorsOriginList(input.AllowOrigins, context),
    }),
    ...(input.ExposeHeaders != null && {
      exposeHeaders: serializeAws_restJson1CorsHeaderList(input.ExposeHeaders, context),
    }),
    ...(input.MaxAge != null && { maxAge: input.MaxAge }),
  };
};

const serializeAws_restJson1CorsHeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CorsMethodList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CorsOriginList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DomainNameConfiguration = (
  input: DomainNameConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiGatewayDomainName != null && { apiGatewayDomainName: input.ApiGatewayDomainName }),
    ...(input.CertificateArn != null && { certificateArn: input.CertificateArn }),
    ...(input.CertificateName != null && { certificateName: input.CertificateName }),
    ...(input.CertificateUploadDate != null && {
      certificateUploadDate: input.CertificateUploadDate.toISOString().split(".")[0] + "Z",
    }),
    ...(input.DomainNameStatus != null && { domainNameStatus: input.DomainNameStatus }),
    ...(input.DomainNameStatusMessage != null && { domainNameStatusMessage: input.DomainNameStatusMessage }),
    ...(input.EndpointType != null && { endpointType: input.EndpointType }),
    ...(input.HostedZoneId != null && { hostedZoneId: input.HostedZoneId }),
    ...(input.OwnershipVerificationCertificateArn != null && {
      ownershipVerificationCertificateArn: input.OwnershipVerificationCertificateArn,
    }),
    ...(input.SecurityPolicy != null && { securityPolicy: input.SecurityPolicy }),
  };
};

const serializeAws_restJson1DomainNameConfigurations = (
  input: DomainNameConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};

const serializeAws_restJson1IdentitySourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IntegrationParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1JWTConfiguration = (input: JWTConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Audience != null && { audience: serializeAws_restJson1__listOf__string(input.Audience, context) }),
    ...(input.Issuer != null && { issuer: input.Issuer }),
  };
};

const serializeAws_restJson1MutualTlsAuthenticationInput = (
  input: MutualTlsAuthenticationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TruststoreUri != null && { truststoreUri: input.TruststoreUri }),
    ...(input.TruststoreVersion != null && { truststoreVersion: input.TruststoreVersion }),
  };
};

const serializeAws_restJson1ParameterConstraints = (input: ParameterConstraints, context: __SerdeContext): any => {
  return {
    ...(input.Required != null && { required: input.Required }),
  };
};

const serializeAws_restJson1ResponseParameters = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1IntegrationParameters(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RouteModels = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1RouteParameters = (
  input: Record<string, ParameterConstraints>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ParameterConstraints(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RouteSettings = (input: RouteSettings, context: __SerdeContext): any => {
  return {
    ...(input.DataTraceEnabled != null && { dataTraceEnabled: input.DataTraceEnabled }),
    ...(input.DetailedMetricsEnabled != null && { detailedMetricsEnabled: input.DetailedMetricsEnabled }),
    ...(input.LoggingLevel != null && { loggingLevel: input.LoggingLevel }),
    ...(input.ThrottlingBurstLimit != null && { throttlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit != null && { throttlingRateLimit: __serializeFloat(input.ThrottlingRateLimit) }),
  };
};

const serializeAws_restJson1RouteSettingsMap = (input: Record<string, RouteSettings>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1RouteSettings(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StageVariablesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TemplateMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TlsConfigInput = (input: TlsConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.ServerNameToVerify != null && { serverNameToVerify: input.ServerNameToVerify }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfApi = (output: any, context: __SerdeContext): Api[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Api(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfApiMapping = (output: any, context: __SerdeContext): ApiMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApiMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfAuthorizer = (output: any, context: __SerdeContext): Authorizer[] => {
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

const deserializeAws_restJson1__listOfDeployment = (output: any, context: __SerdeContext): Deployment[] => {
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

const deserializeAws_restJson1__listOfDomainName = (output: any, context: __SerdeContext): DomainName[] => {
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

const deserializeAws_restJson1__listOfIntegration = (output: any, context: __SerdeContext): Integration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Integration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfIntegrationResponse = (
  output: any,
  context: __SerdeContext
): IntegrationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntegrationResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfModel = (output: any, context: __SerdeContext): Model[] => {
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

const deserializeAws_restJson1__listOfRoute = (output: any, context: __SerdeContext): Route[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Route(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfRouteResponse = (output: any, context: __SerdeContext): RouteResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfStage = (output: any, context: __SerdeContext): Stage[] => {
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

const deserializeAws_restJson1__listOfVpcLink = (output: any, context: __SerdeContext): VpcLink[] => {
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

const deserializeAws_restJson1AccessLogSettings = (output: any, context: __SerdeContext): AccessLogSettings => {
  return {
    DestinationArn: __expectString(output.destinationArn),
    Format: __expectString(output.format),
  } as any;
};

const deserializeAws_restJson1Api = (output: any, context: __SerdeContext): Api => {
  return {
    ApiEndpoint: __expectString(output.apiEndpoint),
    ApiGatewayManaged: __expectBoolean(output.apiGatewayManaged),
    ApiId: __expectString(output.apiId),
    ApiKeySelectionExpression: __expectString(output.apiKeySelectionExpression),
    CorsConfiguration:
      output.corsConfiguration != null ? deserializeAws_restJson1Cors(output.corsConfiguration, context) : undefined,
    CreatedDate:
      output.createdDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdDate)) : undefined,
    Description: __expectString(output.description),
    DisableExecuteApiEndpoint: __expectBoolean(output.disableExecuteApiEndpoint),
    DisableSchemaValidation: __expectBoolean(output.disableSchemaValidation),
    ImportInfo:
      output.importInfo != null ? deserializeAws_restJson1__listOf__string(output.importInfo, context) : undefined,
    Name: __expectString(output.name),
    ProtocolType: __expectString(output.protocolType),
    RouteSelectionExpression: __expectString(output.routeSelectionExpression),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    Version: __expectString(output.version),
    Warnings: output.warnings != null ? deserializeAws_restJson1__listOf__string(output.warnings, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ApiMapping = (output: any, context: __SerdeContext): ApiMapping => {
  return {
    ApiId: __expectString(output.apiId),
    ApiMappingId: __expectString(output.apiMappingId),
    ApiMappingKey: __expectString(output.apiMappingKey),
    Stage: __expectString(output.stage),
  } as any;
};

const deserializeAws_restJson1AuthorizationScopes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Authorizer = (output: any, context: __SerdeContext): Authorizer => {
  return {
    AuthorizerCredentialsArn: __expectString(output.authorizerCredentialsArn),
    AuthorizerId: __expectString(output.authorizerId),
    AuthorizerPayloadFormatVersion: __expectString(output.authorizerPayloadFormatVersion),
    AuthorizerResultTtlInSeconds: __expectInt32(output.authorizerResultTtlInSeconds),
    AuthorizerType: __expectString(output.authorizerType),
    AuthorizerUri: __expectString(output.authorizerUri),
    EnableSimpleResponses: __expectBoolean(output.enableSimpleResponses),
    IdentitySource:
      output.identitySource != null
        ? deserializeAws_restJson1IdentitySourceList(output.identitySource, context)
        : undefined,
    IdentityValidationExpression: __expectString(output.identityValidationExpression),
    JwtConfiguration:
      output.jwtConfiguration != null
        ? deserializeAws_restJson1JWTConfiguration(output.jwtConfiguration, context)
        : undefined,
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1Cors = (output: any, context: __SerdeContext): Cors => {
  return {
    AllowCredentials: __expectBoolean(output.allowCredentials),
    AllowHeaders:
      output.allowHeaders != null ? deserializeAws_restJson1CorsHeaderList(output.allowHeaders, context) : undefined,
    AllowMethods:
      output.allowMethods != null ? deserializeAws_restJson1CorsMethodList(output.allowMethods, context) : undefined,
    AllowOrigins:
      output.allowOrigins != null ? deserializeAws_restJson1CorsOriginList(output.allowOrigins, context) : undefined,
    ExposeHeaders:
      output.exposeHeaders != null ? deserializeAws_restJson1CorsHeaderList(output.exposeHeaders, context) : undefined,
    MaxAge: __expectInt32(output.maxAge),
  } as any;
};

const deserializeAws_restJson1CorsHeaderList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CorsMethodList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CorsOriginList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    AutoDeployed: __expectBoolean(output.autoDeployed),
    CreatedDate:
      output.createdDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdDate)) : undefined,
    DeploymentId: __expectString(output.deploymentId),
    DeploymentStatus: __expectString(output.deploymentStatus),
    DeploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    Description: __expectString(output.description),
  } as any;
};

const deserializeAws_restJson1DomainName = (output: any, context: __SerdeContext): DomainName => {
  return {
    ApiMappingSelectionExpression: __expectString(output.apiMappingSelectionExpression),
    DomainName: __expectString(output.domainName),
    DomainNameConfigurations:
      output.domainNameConfigurations != null
        ? deserializeAws_restJson1DomainNameConfigurations(output.domainNameConfigurations, context)
        : undefined,
    MutualTlsAuthentication:
      output.mutualTlsAuthentication != null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DomainNameConfiguration = (
  output: any,
  context: __SerdeContext
): DomainNameConfiguration => {
  return {
    ApiGatewayDomainName: __expectString(output.apiGatewayDomainName),
    CertificateArn: __expectString(output.certificateArn),
    CertificateName: __expectString(output.certificateName),
    CertificateUploadDate:
      output.certificateUploadDate != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.certificateUploadDate))
        : undefined,
    DomainNameStatus: __expectString(output.domainNameStatus),
    DomainNameStatusMessage: __expectString(output.domainNameStatusMessage),
    EndpointType: __expectString(output.endpointType),
    HostedZoneId: __expectString(output.hostedZoneId),
    OwnershipVerificationCertificateArn: __expectString(output.ownershipVerificationCertificateArn),
    SecurityPolicy: __expectString(output.securityPolicy),
  } as any;
};

const deserializeAws_restJson1DomainNameConfigurations = (
  output: any,
  context: __SerdeContext
): DomainNameConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainNameConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IdentitySourceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Integration = (output: any, context: __SerdeContext): Integration => {
  return {
    ApiGatewayManaged: __expectBoolean(output.apiGatewayManaged),
    ConnectionId: __expectString(output.connectionId),
    ConnectionType: __expectString(output.connectionType),
    ContentHandlingStrategy: __expectString(output.contentHandlingStrategy),
    CredentialsArn: __expectString(output.credentialsArn),
    Description: __expectString(output.description),
    IntegrationId: __expectString(output.integrationId),
    IntegrationMethod: __expectString(output.integrationMethod),
    IntegrationResponseSelectionExpression: __expectString(output.integrationResponseSelectionExpression),
    IntegrationSubtype: __expectString(output.integrationSubtype),
    IntegrationType: __expectString(output.integrationType),
    IntegrationUri: __expectString(output.integrationUri),
    PassthroughBehavior: __expectString(output.passthroughBehavior),
    PayloadFormatVersion: __expectString(output.payloadFormatVersion),
    RequestParameters:
      output.requestParameters != null
        ? deserializeAws_restJson1IntegrationParameters(output.requestParameters, context)
        : undefined,
    RequestTemplates:
      output.requestTemplates != null
        ? deserializeAws_restJson1TemplateMap(output.requestTemplates, context)
        : undefined,
    ResponseParameters:
      output.responseParameters != null
        ? deserializeAws_restJson1ResponseParameters(output.responseParameters, context)
        : undefined,
    TemplateSelectionExpression: __expectString(output.templateSelectionExpression),
    TimeoutInMillis: __expectInt32(output.timeoutInMillis),
    TlsConfig: output.tlsConfig != null ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IntegrationParameters = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1IntegrationResponse = (output: any, context: __SerdeContext): IntegrationResponse => {
  return {
    ContentHandlingStrategy: __expectString(output.contentHandlingStrategy),
    IntegrationResponseId: __expectString(output.integrationResponseId),
    IntegrationResponseKey: __expectString(output.integrationResponseKey),
    ResponseParameters:
      output.responseParameters != null
        ? deserializeAws_restJson1IntegrationParameters(output.responseParameters, context)
        : undefined,
    ResponseTemplates:
      output.responseTemplates != null
        ? deserializeAws_restJson1TemplateMap(output.responseTemplates, context)
        : undefined,
    TemplateSelectionExpression: __expectString(output.templateSelectionExpression),
  } as any;
};

const deserializeAws_restJson1JWTConfiguration = (output: any, context: __SerdeContext): JWTConfiguration => {
  return {
    Audience: output.audience != null ? deserializeAws_restJson1__listOf__string(output.audience, context) : undefined,
    Issuer: __expectString(output.issuer),
  } as any;
};

const deserializeAws_restJson1Model = (output: any, context: __SerdeContext): Model => {
  return {
    ContentType: __expectString(output.contentType),
    Description: __expectString(output.description),
    ModelId: __expectString(output.modelId),
    Name: __expectString(output.name),
    Schema: __expectString(output.schema),
  } as any;
};

const deserializeAws_restJson1MutualTlsAuthentication = (
  output: any,
  context: __SerdeContext
): MutualTlsAuthentication => {
  return {
    TruststoreUri: __expectString(output.truststoreUri),
    TruststoreVersion: __expectString(output.truststoreVersion),
    TruststoreWarnings:
      output.truststoreWarnings != null
        ? deserializeAws_restJson1__listOf__string(output.truststoreWarnings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  return {
    Required: __expectBoolean(output.required),
  } as any;
};

const deserializeAws_restJson1ResponseParameters = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1IntegrationParameters(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Route = (output: any, context: __SerdeContext): Route => {
  return {
    ApiGatewayManaged: __expectBoolean(output.apiGatewayManaged),
    ApiKeyRequired: __expectBoolean(output.apiKeyRequired),
    AuthorizationScopes:
      output.authorizationScopes != null
        ? deserializeAws_restJson1AuthorizationScopes(output.authorizationScopes, context)
        : undefined,
    AuthorizationType: __expectString(output.authorizationType),
    AuthorizerId: __expectString(output.authorizerId),
    ModelSelectionExpression: __expectString(output.modelSelectionExpression),
    OperationName: __expectString(output.operationName),
    RequestModels:
      output.requestModels != null ? deserializeAws_restJson1RouteModels(output.requestModels, context) : undefined,
    RequestParameters:
      output.requestParameters != null
        ? deserializeAws_restJson1RouteParameters(output.requestParameters, context)
        : undefined,
    RouteId: __expectString(output.routeId),
    RouteKey: __expectString(output.routeKey),
    RouteResponseSelectionExpression: __expectString(output.routeResponseSelectionExpression),
    Target: __expectString(output.target),
  } as any;
};

const deserializeAws_restJson1RouteModels = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1RouteParameters = (
  output: any,
  context: __SerdeContext
): Record<string, ParameterConstraints> => {
  return Object.entries(output).reduce((acc: Record<string, ParameterConstraints>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ParameterConstraints(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1RouteResponse = (output: any, context: __SerdeContext): RouteResponse => {
  return {
    ModelSelectionExpression: __expectString(output.modelSelectionExpression),
    ResponseModels:
      output.responseModels != null ? deserializeAws_restJson1RouteModels(output.responseModels, context) : undefined,
    ResponseParameters:
      output.responseParameters != null
        ? deserializeAws_restJson1RouteParameters(output.responseParameters, context)
        : undefined,
    RouteResponseId: __expectString(output.routeResponseId),
    RouteResponseKey: __expectString(output.routeResponseKey),
  } as any;
};

const deserializeAws_restJson1RouteSettings = (output: any, context: __SerdeContext): RouteSettings => {
  return {
    DataTraceEnabled: __expectBoolean(output.dataTraceEnabled),
    DetailedMetricsEnabled: __expectBoolean(output.detailedMetricsEnabled),
    LoggingLevel: __expectString(output.loggingLevel),
    ThrottlingBurstLimit: __expectInt32(output.throttlingBurstLimit),
    ThrottlingRateLimit: __limitedParseDouble(output.throttlingRateLimit),
  } as any;
};

const deserializeAws_restJson1RouteSettingsMap = (
  output: any,
  context: __SerdeContext
): Record<string, RouteSettings> => {
  return Object.entries(output).reduce((acc: Record<string, RouteSettings>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1RouteSettings(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Stage = (output: any, context: __SerdeContext): Stage => {
  return {
    AccessLogSettings:
      output.accessLogSettings != null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    ApiGatewayManaged: __expectBoolean(output.apiGatewayManaged),
    AutoDeploy: __expectBoolean(output.autoDeploy),
    ClientCertificateId: __expectString(output.clientCertificateId),
    CreatedDate:
      output.createdDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdDate)) : undefined,
    DefaultRouteSettings:
      output.defaultRouteSettings != null
        ? deserializeAws_restJson1RouteSettings(output.defaultRouteSettings, context)
        : undefined,
    DeploymentId: __expectString(output.deploymentId),
    Description: __expectString(output.description),
    LastDeploymentStatusMessage: __expectString(output.lastDeploymentStatusMessage),
    LastUpdatedDate:
      output.lastUpdatedDate != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastUpdatedDate))
        : undefined,
    RouteSettings:
      output.routeSettings != null
        ? deserializeAws_restJson1RouteSettingsMap(output.routeSettings, context)
        : undefined,
    StageName: __expectString(output.stageName),
    StageVariables:
      output.stageVariables != null
        ? deserializeAws_restJson1StageVariablesMap(output.stageVariables, context)
        : undefined,
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StageVariablesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TlsConfig = (output: any, context: __SerdeContext): TlsConfig => {
  return {
    ServerNameToVerify: __expectString(output.serverNameToVerify),
  } as any;
};

const deserializeAws_restJson1VpcLink = (output: any, context: __SerdeContext): VpcLink => {
  return {
    CreatedDate:
      output.createdDate != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdDate)) : undefined,
    Name: __expectString(output.name),
    SecurityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    SubnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetIdList(output.subnetIds, context) : undefined,
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    VpcLinkId: __expectString(output.vpcLinkId),
    VpcLinkStatus: __expectString(output.vpcLinkStatus),
    VpcLinkStatusMessage: __expectString(output.vpcLinkStatusMessage),
    VpcLinkVersion: __expectString(output.vpcLinkVersion),
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
