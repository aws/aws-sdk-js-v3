// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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

/**
 * serializeAws_restJson1CreateApiCommand
 */
export const se_CreateApiCommand = async (
  input: CreateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/apis";
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKeySelectionExpression: [, , `ApiKeySelectionExpression`],
      corsConfiguration: [, (_) => se_Cors(_, context), `CorsConfiguration`],
      credentialsArn: [, , `CredentialsArn`],
      description: [, , `Description`],
      disableExecuteApiEndpoint: [, , `DisableExecuteApiEndpoint`],
      disableSchemaValidation: [, , `DisableSchemaValidation`],
      name: [, , `Name`],
      protocolType: [, , `ProtocolType`],
      routeKey: [, , `RouteKey`],
      routeSelectionExpression: [, , `RouteSelectionExpression`],
      tags: [, (_) => _json(_), `Tags`],
      target: [, , `Target`],
      version: [, , `Version`],
    })
  );
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

/**
 * serializeAws_restJson1CreateApiMappingCommand
 */
export const se_CreateApiMappingCommand = async (
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
  body = JSON.stringify(
    take(input, {
      apiId: [, , `ApiId`],
      apiMappingKey: [, , `ApiMappingKey`],
      stage: [, , `Stage`],
    })
  );
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

/**
 * serializeAws_restJson1CreateAuthorizerCommand
 */
export const se_CreateAuthorizerCommand = async (
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
  body = JSON.stringify(
    take(input, {
      authorizerCredentialsArn: [, , `AuthorizerCredentialsArn`],
      authorizerPayloadFormatVersion: [, , `AuthorizerPayloadFormatVersion`],
      authorizerResultTtlInSeconds: [, , `AuthorizerResultTtlInSeconds`],
      authorizerType: [, , `AuthorizerType`],
      authorizerUri: [, , `AuthorizerUri`],
      enableSimpleResponses: [, , `EnableSimpleResponses`],
      identitySource: [, (_) => _json(_), `IdentitySource`],
      identityValidationExpression: [, , `IdentityValidationExpression`],
      jwtConfiguration: [, (_) => se_JWTConfiguration(_, context), `JwtConfiguration`],
      name: [, , `Name`],
    })
  );
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

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      stageName: [, , `StageName`],
    })
  );
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

/**
 * serializeAws_restJson1CreateDomainNameCommand
 */
export const se_CreateDomainNameCommand = async (
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/domainnames";
  let body: any;
  body = JSON.stringify(
    take(input, {
      domainName: [, , `DomainName`],
      domainNameConfigurations: [, (_) => se_DomainNameConfigurations(_, context), `DomainNameConfigurations`],
      mutualTlsAuthentication: [, (_) => se_MutualTlsAuthenticationInput(_, context), `MutualTlsAuthentication`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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

/**
 * serializeAws_restJson1CreateIntegrationCommand
 */
export const se_CreateIntegrationCommand = async (
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
  body = JSON.stringify(
    take(input, {
      connectionId: [, , `ConnectionId`],
      connectionType: [, , `ConnectionType`],
      contentHandlingStrategy: [, , `ContentHandlingStrategy`],
      credentialsArn: [, , `CredentialsArn`],
      description: [, , `Description`],
      integrationMethod: [, , `IntegrationMethod`],
      integrationSubtype: [, , `IntegrationSubtype`],
      integrationType: [, , `IntegrationType`],
      integrationUri: [, , `IntegrationUri`],
      passthroughBehavior: [, , `PassthroughBehavior`],
      payloadFormatVersion: [, , `PayloadFormatVersion`],
      requestParameters: [, (_) => _json(_), `RequestParameters`],
      requestTemplates: [, (_) => _json(_), `RequestTemplates`],
      responseParameters: [, (_) => _json(_), `ResponseParameters`],
      templateSelectionExpression: [, , `TemplateSelectionExpression`],
      timeoutInMillis: [, , `TimeoutInMillis`],
      tlsConfig: [, (_) => se_TlsConfigInput(_, context), `TlsConfig`],
    })
  );
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

/**
 * serializeAws_restJson1CreateIntegrationResponseCommand
 */
export const se_CreateIntegrationResponseCommand = async (
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
  body = JSON.stringify(
    take(input, {
      contentHandlingStrategy: [, , `ContentHandlingStrategy`],
      integrationResponseKey: [, , `IntegrationResponseKey`],
      responseParameters: [, (_) => _json(_), `ResponseParameters`],
      responseTemplates: [, (_) => _json(_), `ResponseTemplates`],
      templateSelectionExpression: [, , `TemplateSelectionExpression`],
    })
  );
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

/**
 * serializeAws_restJson1CreateModelCommand
 */
export const se_CreateModelCommand = async (
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
  body = JSON.stringify(
    take(input, {
      contentType: [, , `ContentType`],
      description: [, , `Description`],
      name: [, , `Name`],
      schema: [, , `Schema`],
    })
  );
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

/**
 * serializeAws_restJson1CreateRouteCommand
 */
export const se_CreateRouteCommand = async (
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
  body = JSON.stringify(
    take(input, {
      apiKeyRequired: [, , `ApiKeyRequired`],
      authorizationScopes: [, (_) => _json(_), `AuthorizationScopes`],
      authorizationType: [, , `AuthorizationType`],
      authorizerId: [, , `AuthorizerId`],
      modelSelectionExpression: [, , `ModelSelectionExpression`],
      operationName: [, , `OperationName`],
      requestModels: [, (_) => _json(_), `RequestModels`],
      requestParameters: [, (_) => se_RouteParameters(_, context), `RequestParameters`],
      routeKey: [, , `RouteKey`],
      routeResponseSelectionExpression: [, , `RouteResponseSelectionExpression`],
      target: [, , `Target`],
    })
  );
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

/**
 * serializeAws_restJson1CreateRouteResponseCommand
 */
export const se_CreateRouteResponseCommand = async (
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
  body = JSON.stringify(
    take(input, {
      modelSelectionExpression: [, , `ModelSelectionExpression`],
      responseModels: [, (_) => _json(_), `ResponseModels`],
      responseParameters: [, (_) => se_RouteParameters(_, context), `ResponseParameters`],
      routeResponseKey: [, , `RouteResponseKey`],
    })
  );
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

/**
 * serializeAws_restJson1CreateStageCommand
 */
export const se_CreateStageCommand = async (
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
  body = JSON.stringify(
    take(input, {
      accessLogSettings: [, (_) => se_AccessLogSettings(_, context), `AccessLogSettings`],
      autoDeploy: [, , `AutoDeploy`],
      clientCertificateId: [, , `ClientCertificateId`],
      defaultRouteSettings: [, (_) => se_RouteSettings(_, context), `DefaultRouteSettings`],
      deploymentId: [, , `DeploymentId`],
      description: [, , `Description`],
      routeSettings: [, (_) => se_RouteSettingsMap(_, context), `RouteSettings`],
      stageName: [, , `StageName`],
      stageVariables: [, (_) => _json(_), `StageVariables`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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

/**
 * serializeAws_restJson1CreateVpcLinkCommand
 */
export const se_CreateVpcLinkCommand = async (
  input: CreateVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/vpclinks";
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [, , `Name`],
      securityGroupIds: [, (_) => _json(_), `SecurityGroupIds`],
      subnetIds: [, (_) => _json(_), `SubnetIds`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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

/**
 * serializeAws_restJson1DeleteAccessLogSettingsCommand
 */
export const se_DeleteAccessLogSettingsCommand = async (
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

/**
 * serializeAws_restJson1DeleteApiCommand
 */
export const se_DeleteApiCommand = async (
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

/**
 * serializeAws_restJson1DeleteApiMappingCommand
 */
export const se_DeleteApiMappingCommand = async (
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

/**
 * serializeAws_restJson1DeleteAuthorizerCommand
 */
export const se_DeleteAuthorizerCommand = async (
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

/**
 * serializeAws_restJson1DeleteCorsConfigurationCommand
 */
export const se_DeleteCorsConfigurationCommand = async (
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

/**
 * serializeAws_restJson1DeleteDeploymentCommand
 */
export const se_DeleteDeploymentCommand = async (
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

/**
 * serializeAws_restJson1DeleteDomainNameCommand
 */
export const se_DeleteDomainNameCommand = async (
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

/**
 * serializeAws_restJson1DeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
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

/**
 * serializeAws_restJson1DeleteIntegrationResponseCommand
 */
export const se_DeleteIntegrationResponseCommand = async (
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

/**
 * serializeAws_restJson1DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
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

/**
 * serializeAws_restJson1DeleteRouteCommand
 */
export const se_DeleteRouteCommand = async (
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

/**
 * serializeAws_restJson1DeleteRouteRequestParameterCommand
 */
export const se_DeleteRouteRequestParameterCommand = async (
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

/**
 * serializeAws_restJson1DeleteRouteResponseCommand
 */
export const se_DeleteRouteResponseCommand = async (
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

/**
 * serializeAws_restJson1DeleteRouteSettingsCommand
 */
export const se_DeleteRouteSettingsCommand = async (
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

/**
 * serializeAws_restJson1DeleteStageCommand
 */
export const se_DeleteStageCommand = async (
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

/**
 * serializeAws_restJson1DeleteVpcLinkCommand
 */
export const se_DeleteVpcLinkCommand = async (
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

/**
 * serializeAws_restJson1ExportApiCommand
 */
export const se_ExportApiCommand = async (
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

/**
 * serializeAws_restJson1GetApiCommand
 */
export const se_GetApiCommand = async (input: GetApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
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

/**
 * serializeAws_restJson1GetApiMappingCommand
 */
export const se_GetApiMappingCommand = async (
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

/**
 * serializeAws_restJson1GetApiMappingsCommand
 */
export const se_GetApiMappingsCommand = async (
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

/**
 * serializeAws_restJson1GetApisCommand
 */
export const se_GetApisCommand = async (
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

/**
 * serializeAws_restJson1GetAuthorizerCommand
 */
export const se_GetAuthorizerCommand = async (
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

/**
 * serializeAws_restJson1GetAuthorizersCommand
 */
export const se_GetAuthorizersCommand = async (
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

/**
 * serializeAws_restJson1GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
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

/**
 * serializeAws_restJson1GetDeploymentsCommand
 */
export const se_GetDeploymentsCommand = async (
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

/**
 * serializeAws_restJson1GetDomainNameCommand
 */
export const se_GetDomainNameCommand = async (
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

/**
 * serializeAws_restJson1GetDomainNamesCommand
 */
export const se_GetDomainNamesCommand = async (
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

/**
 * serializeAws_restJson1GetIntegrationCommand
 */
export const se_GetIntegrationCommand = async (
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

/**
 * serializeAws_restJson1GetIntegrationResponseCommand
 */
export const se_GetIntegrationResponseCommand = async (
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

/**
 * serializeAws_restJson1GetIntegrationResponsesCommand
 */
export const se_GetIntegrationResponsesCommand = async (
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

/**
 * serializeAws_restJson1GetIntegrationsCommand
 */
export const se_GetIntegrationsCommand = async (
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

/**
 * serializeAws_restJson1GetModelCommand
 */
export const se_GetModelCommand = async (
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

/**
 * serializeAws_restJson1GetModelsCommand
 */
export const se_GetModelsCommand = async (
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

/**
 * serializeAws_restJson1GetModelTemplateCommand
 */
export const se_GetModelTemplateCommand = async (
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

/**
 * serializeAws_restJson1GetRouteCommand
 */
export const se_GetRouteCommand = async (
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

/**
 * serializeAws_restJson1GetRouteResponseCommand
 */
export const se_GetRouteResponseCommand = async (
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

/**
 * serializeAws_restJson1GetRouteResponsesCommand
 */
export const se_GetRouteResponsesCommand = async (
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

/**
 * serializeAws_restJson1GetRoutesCommand
 */
export const se_GetRoutesCommand = async (
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

/**
 * serializeAws_restJson1GetStageCommand
 */
export const se_GetStageCommand = async (
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

/**
 * serializeAws_restJson1GetStagesCommand
 */
export const se_GetStagesCommand = async (
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

/**
 * serializeAws_restJson1GetTagsCommand
 */
export const se_GetTagsCommand = async (
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

/**
 * serializeAws_restJson1GetVpcLinkCommand
 */
export const se_GetVpcLinkCommand = async (
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

/**
 * serializeAws_restJson1GetVpcLinksCommand
 */
export const se_GetVpcLinksCommand = async (
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

/**
 * serializeAws_restJson1ImportApiCommand
 */
export const se_ImportApiCommand = async (
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
  body = JSON.stringify(
    take(input, {
      body: [, , `Body`],
    })
  );
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

/**
 * serializeAws_restJson1ReimportApiCommand
 */
export const se_ReimportApiCommand = async (
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
  body = JSON.stringify(
    take(input, {
      body: [, , `Body`],
    })
  );
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

/**
 * serializeAws_restJson1ResetAuthorizersCacheCommand
 */
export const se_ResetAuthorizersCacheCommand = async (
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

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
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
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateApiCommand
 */
export const se_UpdateApiCommand = async (
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
  body = JSON.stringify(
    take(input, {
      apiKeySelectionExpression: [, , `ApiKeySelectionExpression`],
      corsConfiguration: [, (_) => se_Cors(_, context), `CorsConfiguration`],
      credentialsArn: [, , `CredentialsArn`],
      description: [, , `Description`],
      disableExecuteApiEndpoint: [, , `DisableExecuteApiEndpoint`],
      disableSchemaValidation: [, , `DisableSchemaValidation`],
      name: [, , `Name`],
      routeKey: [, , `RouteKey`],
      routeSelectionExpression: [, , `RouteSelectionExpression`],
      target: [, , `Target`],
      version: [, , `Version`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateApiMappingCommand
 */
export const se_UpdateApiMappingCommand = async (
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
  body = JSON.stringify(
    take(input, {
      apiId: [, , `ApiId`],
      apiMappingKey: [, , `ApiMappingKey`],
      stage: [, , `Stage`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateAuthorizerCommand
 */
export const se_UpdateAuthorizerCommand = async (
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
  body = JSON.stringify(
    take(input, {
      authorizerCredentialsArn: [, , `AuthorizerCredentialsArn`],
      authorizerPayloadFormatVersion: [, , `AuthorizerPayloadFormatVersion`],
      authorizerResultTtlInSeconds: [, , `AuthorizerResultTtlInSeconds`],
      authorizerType: [, , `AuthorizerType`],
      authorizerUri: [, , `AuthorizerUri`],
      enableSimpleResponses: [, , `EnableSimpleResponses`],
      identitySource: [, (_) => _json(_), `IdentitySource`],
      identityValidationExpression: [, , `IdentityValidationExpression`],
      jwtConfiguration: [, (_) => se_JWTConfiguration(_, context), `JwtConfiguration`],
      name: [, , `Name`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateDeploymentCommand
 */
export const se_UpdateDeploymentCommand = async (
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateDomainNameCommand
 */
export const se_UpdateDomainNameCommand = async (
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
  body = JSON.stringify(
    take(input, {
      domainNameConfigurations: [, (_) => se_DomainNameConfigurations(_, context), `DomainNameConfigurations`],
      mutualTlsAuthentication: [, (_) => se_MutualTlsAuthenticationInput(_, context), `MutualTlsAuthentication`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateIntegrationCommand
 */
export const se_UpdateIntegrationCommand = async (
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
  body = JSON.stringify(
    take(input, {
      connectionId: [, , `ConnectionId`],
      connectionType: [, , `ConnectionType`],
      contentHandlingStrategy: [, , `ContentHandlingStrategy`],
      credentialsArn: [, , `CredentialsArn`],
      description: [, , `Description`],
      integrationMethod: [, , `IntegrationMethod`],
      integrationSubtype: [, , `IntegrationSubtype`],
      integrationType: [, , `IntegrationType`],
      integrationUri: [, , `IntegrationUri`],
      passthroughBehavior: [, , `PassthroughBehavior`],
      payloadFormatVersion: [, , `PayloadFormatVersion`],
      requestParameters: [, (_) => _json(_), `RequestParameters`],
      requestTemplates: [, (_) => _json(_), `RequestTemplates`],
      responseParameters: [, (_) => _json(_), `ResponseParameters`],
      templateSelectionExpression: [, , `TemplateSelectionExpression`],
      timeoutInMillis: [, , `TimeoutInMillis`],
      tlsConfig: [, (_) => se_TlsConfigInput(_, context), `TlsConfig`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateIntegrationResponseCommand
 */
export const se_UpdateIntegrationResponseCommand = async (
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
  body = JSON.stringify(
    take(input, {
      contentHandlingStrategy: [, , `ContentHandlingStrategy`],
      integrationResponseKey: [, , `IntegrationResponseKey`],
      responseParameters: [, (_) => _json(_), `ResponseParameters`],
      responseTemplates: [, (_) => _json(_), `ResponseTemplates`],
      templateSelectionExpression: [, , `TemplateSelectionExpression`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateModelCommand
 */
export const se_UpdateModelCommand = async (
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
  body = JSON.stringify(
    take(input, {
      contentType: [, , `ContentType`],
      description: [, , `Description`],
      name: [, , `Name`],
      schema: [, , `Schema`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateRouteCommand
 */
export const se_UpdateRouteCommand = async (
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
  body = JSON.stringify(
    take(input, {
      apiKeyRequired: [, , `ApiKeyRequired`],
      authorizationScopes: [, (_) => _json(_), `AuthorizationScopes`],
      authorizationType: [, , `AuthorizationType`],
      authorizerId: [, , `AuthorizerId`],
      modelSelectionExpression: [, , `ModelSelectionExpression`],
      operationName: [, , `OperationName`],
      requestModels: [, (_) => _json(_), `RequestModels`],
      requestParameters: [, (_) => se_RouteParameters(_, context), `RequestParameters`],
      routeKey: [, , `RouteKey`],
      routeResponseSelectionExpression: [, , `RouteResponseSelectionExpression`],
      target: [, , `Target`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateRouteResponseCommand
 */
export const se_UpdateRouteResponseCommand = async (
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
  body = JSON.stringify(
    take(input, {
      modelSelectionExpression: [, , `ModelSelectionExpression`],
      responseModels: [, (_) => _json(_), `ResponseModels`],
      responseParameters: [, (_) => se_RouteParameters(_, context), `ResponseParameters`],
      routeResponseKey: [, , `RouteResponseKey`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateStageCommand
 */
export const se_UpdateStageCommand = async (
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
  body = JSON.stringify(
    take(input, {
      accessLogSettings: [, (_) => se_AccessLogSettings(_, context), `AccessLogSettings`],
      autoDeploy: [, , `AutoDeploy`],
      clientCertificateId: [, , `ClientCertificateId`],
      defaultRouteSettings: [, (_) => se_RouteSettings(_, context), `DefaultRouteSettings`],
      deploymentId: [, , `DeploymentId`],
      description: [, , `Description`],
      routeSettings: [, (_) => se_RouteSettingsMap(_, context), `RouteSettings`],
      stageVariables: [, (_) => _json(_), `StageVariables`],
    })
  );
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

/**
 * serializeAws_restJson1UpdateVpcLinkCommand
 */
export const se_UpdateVpcLinkCommand = async (
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
  body = JSON.stringify(
    take(input, {
      name: [, , `Name`],
    })
  );
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

/**
 * deserializeAws_restJson1CreateApiCommand
 */
export const de_CreateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiEndpoint: [, __expectString, `apiEndpoint`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiId: [, __expectString, `apiId`],
    ApiKeySelectionExpression: [, __expectString, `apiKeySelectionExpression`],
    CorsConfiguration: [, (_) => de_Cors(_, context), `corsConfiguration`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Description: [, __expectString, `description`],
    DisableExecuteApiEndpoint: [, __expectBoolean, `disableExecuteApiEndpoint`],
    DisableSchemaValidation: [, __expectBoolean, `disableSchemaValidation`],
    ImportInfo: [, _json, `importInfo`],
    Name: [, __expectString, `name`],
    ProtocolType: [, __expectString, `protocolType`],
    RouteSelectionExpression: [, __expectString, `routeSelectionExpression`],
    Tags: [, _json, `tags`],
    Version: [, __expectString, `version`],
    Warnings: [, _json, `warnings`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApiCommandError
 */
const de_CreateApiCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateApiMappingCommand
 */
export const de_CreateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiId: [, __expectString, `apiId`],
    ApiMappingId: [, __expectString, `apiMappingId`],
    ApiMappingKey: [, __expectString, `apiMappingKey`],
    Stage: [, __expectString, `stage`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApiMappingCommandError
 */
const de_CreateApiMappingCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAuthorizerCommand
 */
export const de_CreateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthorizerCredentialsArn: [, __expectString, `authorizerCredentialsArn`],
    AuthorizerId: [, __expectString, `authorizerId`],
    AuthorizerPayloadFormatVersion: [, __expectString, `authorizerPayloadFormatVersion`],
    AuthorizerResultTtlInSeconds: [, __expectInt32, `authorizerResultTtlInSeconds`],
    AuthorizerType: [, __expectString, `authorizerType`],
    AuthorizerUri: [, __expectString, `authorizerUri`],
    EnableSimpleResponses: [, __expectBoolean, `enableSimpleResponses`],
    IdentitySource: [, _json, `identitySource`],
    IdentityValidationExpression: [, __expectString, `identityValidationExpression`],
    JwtConfiguration: [, (_) => de_JWTConfiguration(_, context), `jwtConfiguration`],
    Name: [, __expectString, `name`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAuthorizerCommandError
 */
const de_CreateAuthorizerCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoDeployed: [, __expectBoolean, `autoDeployed`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DeploymentId: [, __expectString, `deploymentId`],
    DeploymentStatus: [, __expectString, `deploymentStatus`],
    DeploymentStatusMessage: [, __expectString, `deploymentStatusMessage`],
    Description: [, __expectString, `description`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDomainNameCommand
 */
export const de_CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameConfigurations: [, (_) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainNameCommandError
 */
const de_CreateDomainNameCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateIntegrationCommand
 */
export const de_CreateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ConnectionId: [, __expectString, `connectionId`],
    ConnectionType: [, __expectString, `connectionType`],
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    CredentialsArn: [, __expectString, `credentialsArn`],
    Description: [, __expectString, `description`],
    IntegrationId: [, __expectString, `integrationId`],
    IntegrationMethod: [, __expectString, `integrationMethod`],
    IntegrationResponseSelectionExpression: [, __expectString, `integrationResponseSelectionExpression`],
    IntegrationSubtype: [, __expectString, `integrationSubtype`],
    IntegrationType: [, __expectString, `integrationType`],
    IntegrationUri: [, __expectString, `integrationUri`],
    PassthroughBehavior: [, __expectString, `passthroughBehavior`],
    PayloadFormatVersion: [, __expectString, `payloadFormatVersion`],
    RequestParameters: [, _json, `requestParameters`],
    RequestTemplates: [, _json, `requestTemplates`],
    ResponseParameters: [, _json, `responseParameters`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
    TimeoutInMillis: [, __expectInt32, `timeoutInMillis`],
    TlsConfig: [, (_) => de_TlsConfig(_, context), `tlsConfig`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntegrationCommandError
 */
const de_CreateIntegrationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateIntegrationResponseCommand
 */
export const de_CreateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    IntegrationResponseId: [, __expectString, `integrationResponseId`],
    IntegrationResponseKey: [, __expectString, `integrationResponseKey`],
    ResponseParameters: [, _json, `responseParameters`],
    ResponseTemplates: [, _json, `responseTemplates`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntegrationResponseCommandError
 */
const de_CreateIntegrationResponseCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContentType: [, __expectString, `contentType`],
    Description: [, __expectString, `description`],
    ModelId: [, __expectString, `modelId`],
    Name: [, __expectString, `name`],
    Schema: [, __expectString, `schema`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateModelCommandError
 */
const de_CreateModelCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateRouteCommand
 */
export const de_CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiKeyRequired: [, __expectBoolean, `apiKeyRequired`],
    AuthorizationScopes: [, _json, `authorizationScopes`],
    AuthorizationType: [, __expectString, `authorizationType`],
    AuthorizerId: [, __expectString, `authorizerId`],
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    OperationName: [, __expectString, `operationName`],
    RequestModels: [, _json, `requestModels`],
    RequestParameters: [, (_) => de_RouteParameters(_, context), `requestParameters`],
    RouteId: [, __expectString, `routeId`],
    RouteKey: [, __expectString, `routeKey`],
    RouteResponseSelectionExpression: [, __expectString, `routeResponseSelectionExpression`],
    Target: [, __expectString, `target`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRouteCommandError
 */
const de_CreateRouteCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateRouteResponseCommand
 */
export const de_CreateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    ResponseModels: [, _json, `responseModels`],
    ResponseParameters: [, (_) => de_RouteParameters(_, context), `responseParameters`],
    RouteResponseId: [, __expectString, `routeResponseId`],
    RouteResponseKey: [, __expectString, `routeResponseKey`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRouteResponseCommandError
 */
const de_CreateRouteResponseCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateStageCommand
 */
export const de_CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessLogSettings: [, (_) => de_AccessLogSettings(_, context), `accessLogSettings`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    AutoDeploy: [, __expectBoolean, `autoDeploy`],
    ClientCertificateId: [, __expectString, `clientCertificateId`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DefaultRouteSettings: [, (_) => de_RouteSettings(_, context), `defaultRouteSettings`],
    DeploymentId: [, __expectString, `deploymentId`],
    Description: [, __expectString, `description`],
    LastDeploymentStatusMessage: [, __expectString, `lastDeploymentStatusMessage`],
    LastUpdatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdatedDate`],
    RouteSettings: [, (_) => de_RouteSettingsMap(_, context), `routeSettings`],
    StageName: [, __expectString, `stageName`],
    StageVariables: [, _json, `stageVariables`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStageCommandError
 */
const de_CreateStageCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateVpcLinkCommand
 */
export const de_CreateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcLinkCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Name: [, __expectString, `name`],
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetIds: [, _json, `subnetIds`],
    Tags: [, _json, `tags`],
    VpcLinkId: [, __expectString, `vpcLinkId`],
    VpcLinkStatus: [, __expectString, `vpcLinkStatus`],
    VpcLinkStatusMessage: [, __expectString, `vpcLinkStatusMessage`],
    VpcLinkVersion: [, __expectString, `vpcLinkVersion`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVpcLinkCommandError
 */
const de_CreateVpcLinkCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAccessLogSettingsCommand
 */
export const de_DeleteAccessLogSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAccessLogSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessLogSettingsCommandError
 */
const de_DeleteAccessLogSettingsCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApiCommand
 */
export const de_DeleteApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApiCommandError
 */
const de_DeleteApiCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApiMappingCommand
 */
export const de_DeleteApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApiMappingCommandError
 */
const de_DeleteApiMappingCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAuthorizerCommand
 */
export const de_DeleteAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAuthorizerCommandError
 */
const de_DeleteAuthorizerCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteCorsConfigurationCommand
 */
export const de_DeleteCorsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCorsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCorsConfigurationCommandError
 */
const de_DeleteCorsConfigurationCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDeploymentCommand
 */
export const de_DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeploymentCommandError
 */
const de_DeleteDeploymentCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDomainNameCommand
 */
export const de_DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainNameCommandError
 */
const de_DeleteDomainNameCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIntegrationCommandError
 */
const de_DeleteIntegrationCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteIntegrationResponseCommand
 */
export const de_DeleteIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIntegrationResponseCommandError
 */
const de_DeleteIntegrationResponseCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteModelCommandError
 */
const de_DeleteModelCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRouteCommand
 */
export const de_DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteCommandError
 */
const de_DeleteRouteCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRouteRequestParameterCommand
 */
export const de_DeleteRouteRequestParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteRequestParameterCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRouteRequestParameterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteRequestParameterCommandError
 */
const de_DeleteRouteRequestParameterCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRouteResponseCommand
 */
export const de_DeleteRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteResponseCommandError
 */
const de_DeleteRouteResponseCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRouteSettingsCommand
 */
export const de_DeleteRouteSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRouteSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteSettingsCommandError
 */
const de_DeleteRouteSettingsCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteStageCommand
 */
export const de_DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStageCommandError
 */
const de_DeleteStageCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteVpcLinkCommand
 */
export const de_DeleteVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcLinkCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVpcLinkCommandError
 */
const de_DeleteVpcLinkCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ExportApiCommand
 */
export const de_ExportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

/**
 * deserializeAws_restJson1ExportApiCommandError
 */
const de_ExportApiCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApiCommand
 */
export const de_GetApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiEndpoint: [, __expectString, `apiEndpoint`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiId: [, __expectString, `apiId`],
    ApiKeySelectionExpression: [, __expectString, `apiKeySelectionExpression`],
    CorsConfiguration: [, (_) => de_Cors(_, context), `corsConfiguration`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Description: [, __expectString, `description`],
    DisableExecuteApiEndpoint: [, __expectBoolean, `disableExecuteApiEndpoint`],
    DisableSchemaValidation: [, __expectBoolean, `disableSchemaValidation`],
    ImportInfo: [, _json, `importInfo`],
    Name: [, __expectString, `name`],
    ProtocolType: [, __expectString, `protocolType`],
    RouteSelectionExpression: [, __expectString, `routeSelectionExpression`],
    Tags: [, _json, `tags`],
    Version: [, __expectString, `version`],
    Warnings: [, _json, `warnings`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiCommandError
 */
const de_GetApiCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApiMappingCommand
 */
export const de_GetApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiId: [, __expectString, `apiId`],
    ApiMappingId: [, __expectString, `apiMappingId`],
    ApiMappingKey: [, __expectString, `apiMappingKey`],
    Stage: [, __expectString, `stage`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiMappingCommandError
 */
const de_GetApiMappingCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApiMappingsCommand
 */
export const de_GetApiMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApiMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfApiMapping(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiMappingsCommandError
 */
const de_GetApiMappingsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApisCommand
 */
export const de_GetApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfApi(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApisCommandError
 */
const de_GetApisCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAuthorizerCommand
 */
export const de_GetAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthorizerCredentialsArn: [, __expectString, `authorizerCredentialsArn`],
    AuthorizerId: [, __expectString, `authorizerId`],
    AuthorizerPayloadFormatVersion: [, __expectString, `authorizerPayloadFormatVersion`],
    AuthorizerResultTtlInSeconds: [, __expectInt32, `authorizerResultTtlInSeconds`],
    AuthorizerType: [, __expectString, `authorizerType`],
    AuthorizerUri: [, __expectString, `authorizerUri`],
    EnableSimpleResponses: [, __expectBoolean, `enableSimpleResponses`],
    IdentitySource: [, _json, `identitySource`],
    IdentityValidationExpression: [, __expectString, `identityValidationExpression`],
    JwtConfiguration: [, (_) => de_JWTConfiguration(_, context), `jwtConfiguration`],
    Name: [, __expectString, `name`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAuthorizerCommandError
 */
const de_GetAuthorizerCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAuthorizersCommand
 */
export const de_GetAuthorizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAuthorizersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfAuthorizer(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAuthorizersCommandError
 */
const de_GetAuthorizersCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoDeployed: [, __expectBoolean, `autoDeployed`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DeploymentId: [, __expectString, `deploymentId`],
    DeploymentStatus: [, __expectString, `deploymentStatus`],
    DeploymentStatusMessage: [, __expectString, `deploymentStatusMessage`],
    Description: [, __expectString, `description`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentCommandError
 */
const de_GetDeploymentCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDeploymentsCommand
 */
export const de_GetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfDeployment(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentsCommandError
 */
const de_GetDeploymentsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDomainNameCommand
 */
export const de_GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameConfigurations: [, (_) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainNameCommandError
 */
const de_GetDomainNameCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDomainNamesCommand
 */
export const de_GetDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfDomainName(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainNamesCommandError
 */
const de_GetDomainNamesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetIntegrationCommand
 */
export const de_GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ConnectionId: [, __expectString, `connectionId`],
    ConnectionType: [, __expectString, `connectionType`],
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    CredentialsArn: [, __expectString, `credentialsArn`],
    Description: [, __expectString, `description`],
    IntegrationId: [, __expectString, `integrationId`],
    IntegrationMethod: [, __expectString, `integrationMethod`],
    IntegrationResponseSelectionExpression: [, __expectString, `integrationResponseSelectionExpression`],
    IntegrationSubtype: [, __expectString, `integrationSubtype`],
    IntegrationType: [, __expectString, `integrationType`],
    IntegrationUri: [, __expectString, `integrationUri`],
    PassthroughBehavior: [, __expectString, `passthroughBehavior`],
    PayloadFormatVersion: [, __expectString, `payloadFormatVersion`],
    RequestParameters: [, _json, `requestParameters`],
    RequestTemplates: [, _json, `requestTemplates`],
    ResponseParameters: [, _json, `responseParameters`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
    TimeoutInMillis: [, __expectInt32, `timeoutInMillis`],
    TlsConfig: [, (_) => de_TlsConfig(_, context), `tlsConfig`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIntegrationCommandError
 */
const de_GetIntegrationCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetIntegrationResponseCommand
 */
export const de_GetIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    IntegrationResponseId: [, __expectString, `integrationResponseId`],
    IntegrationResponseKey: [, __expectString, `integrationResponseKey`],
    ResponseParameters: [, _json, `responseParameters`],
    ResponseTemplates: [, _json, `responseTemplates`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIntegrationResponseCommandError
 */
const de_GetIntegrationResponseCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetIntegrationResponsesCommand
 */
export const de_GetIntegrationResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIntegrationResponsesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfIntegrationResponse(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIntegrationResponsesCommandError
 */
const de_GetIntegrationResponsesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetIntegrationsCommand
 */
export const de_GetIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIntegrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfIntegration(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIntegrationsCommandError
 */
const de_GetIntegrationsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetModelCommand
 */
export const de_GetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContentType: [, __expectString, `contentType`],
    Description: [, __expectString, `description`],
    ModelId: [, __expectString, `modelId`],
    Name: [, __expectString, `name`],
    Schema: [, __expectString, `schema`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelCommandError
 */
const de_GetModelCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetModelsCommand
 */
export const de_GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfModel(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelsCommandError
 */
const de_GetModelsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetModelTemplateCommand
 */
export const de_GetModelTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetModelTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Value: [, __expectString, `value`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelTemplateCommandError
 */
const de_GetModelTemplateCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRouteCommand
 */
export const de_GetRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiKeyRequired: [, __expectBoolean, `apiKeyRequired`],
    AuthorizationScopes: [, _json, `authorizationScopes`],
    AuthorizationType: [, __expectString, `authorizationType`],
    AuthorizerId: [, __expectString, `authorizerId`],
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    OperationName: [, __expectString, `operationName`],
    RequestModels: [, _json, `requestModels`],
    RequestParameters: [, (_) => de_RouteParameters(_, context), `requestParameters`],
    RouteId: [, __expectString, `routeId`],
    RouteKey: [, __expectString, `routeKey`],
    RouteResponseSelectionExpression: [, __expectString, `routeResponseSelectionExpression`],
    Target: [, __expectString, `target`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRouteCommandError
 */
const de_GetRouteCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRouteResponseCommand
 */
export const de_GetRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    ResponseModels: [, _json, `responseModels`],
    ResponseParameters: [, (_) => de_RouteParameters(_, context), `responseParameters`],
    RouteResponseId: [, __expectString, `routeResponseId`],
    RouteResponseKey: [, __expectString, `routeResponseKey`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRouteResponseCommandError
 */
const de_GetRouteResponseCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRouteResponsesCommand
 */
export const de_GetRouteResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRouteResponsesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfRouteResponse(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRouteResponsesCommandError
 */
const de_GetRouteResponsesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRoutesCommand
 */
export const de_GetRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfRoute(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRoutesCommandError
 */
const de_GetRoutesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetStageCommand
 */
export const de_GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessLogSettings: [, (_) => de_AccessLogSettings(_, context), `accessLogSettings`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    AutoDeploy: [, __expectBoolean, `autoDeploy`],
    ClientCertificateId: [, __expectString, `clientCertificateId`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DefaultRouteSettings: [, (_) => de_RouteSettings(_, context), `defaultRouteSettings`],
    DeploymentId: [, __expectString, `deploymentId`],
    Description: [, __expectString, `description`],
    LastDeploymentStatusMessage: [, __expectString, `lastDeploymentStatusMessage`],
    LastUpdatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdatedDate`],
    RouteSettings: [, (_) => de_RouteSettingsMap(_, context), `routeSettings`],
    StageName: [, __expectString, `stageName`],
    StageVariables: [, _json, `stageVariables`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStageCommandError
 */
const de_GetStageCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetStagesCommand
 */
export const de_GetStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfStage(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStagesCommandError
 */
const de_GetStagesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTagsCommand
 */
export const de_GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTagsCommandError
 */
const de_GetTagsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetVpcLinkCommand
 */
export const de_GetVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Name: [, __expectString, `name`],
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetIds: [, _json, `subnetIds`],
    Tags: [, _json, `tags`],
    VpcLinkId: [, __expectString, `vpcLinkId`],
    VpcLinkStatus: [, __expectString, `vpcLinkStatus`],
    VpcLinkStatusMessage: [, __expectString, `vpcLinkStatusMessage`],
    VpcLinkVersion: [, __expectString, `vpcLinkVersion`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVpcLinkCommandError
 */
const de_GetVpcLinkCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetVpcLinksCommand
 */
export const de_GetVpcLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVpcLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de___listOfVpcLink(_, context), `items`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVpcLinksCommandError
 */
const de_GetVpcLinksCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ImportApiCommand
 */
export const de_ImportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_ImportApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiEndpoint: [, __expectString, `apiEndpoint`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiId: [, __expectString, `apiId`],
    ApiKeySelectionExpression: [, __expectString, `apiKeySelectionExpression`],
    CorsConfiguration: [, (_) => de_Cors(_, context), `corsConfiguration`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Description: [, __expectString, `description`],
    DisableExecuteApiEndpoint: [, __expectBoolean, `disableExecuteApiEndpoint`],
    DisableSchemaValidation: [, __expectBoolean, `disableSchemaValidation`],
    ImportInfo: [, _json, `importInfo`],
    Name: [, __expectString, `name`],
    ProtocolType: [, __expectString, `protocolType`],
    RouteSelectionExpression: [, __expectString, `routeSelectionExpression`],
    Tags: [, _json, `tags`],
    Version: [, __expectString, `version`],
    Warnings: [, _json, `warnings`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportApiCommandError
 */
const de_ImportApiCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ReimportApiCommand
 */
export const de_ReimportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_ReimportApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiEndpoint: [, __expectString, `apiEndpoint`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiId: [, __expectString, `apiId`],
    ApiKeySelectionExpression: [, __expectString, `apiKeySelectionExpression`],
    CorsConfiguration: [, (_) => de_Cors(_, context), `corsConfiguration`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Description: [, __expectString, `description`],
    DisableExecuteApiEndpoint: [, __expectBoolean, `disableExecuteApiEndpoint`],
    DisableSchemaValidation: [, __expectBoolean, `disableSchemaValidation`],
    ImportInfo: [, _json, `importInfo`],
    Name: [, __expectString, `name`],
    ProtocolType: [, __expectString, `protocolType`],
    RouteSelectionExpression: [, __expectString, `routeSelectionExpression`],
    Tags: [, _json, `tags`],
    Version: [, __expectString, `version`],
    Warnings: [, _json, `warnings`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReimportApiCommandError
 */
const de_ReimportApiCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ResetAuthorizersCacheCommand
 */
export const de_ResetAuthorizersCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAuthorizersCacheCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_ResetAuthorizersCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResetAuthorizersCacheCommandError
 */
const de_ResetAuthorizersCacheCommandError = async (
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
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApiCommand
 */
export const de_UpdateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiEndpoint: [, __expectString, `apiEndpoint`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiId: [, __expectString, `apiId`],
    ApiKeySelectionExpression: [, __expectString, `apiKeySelectionExpression`],
    CorsConfiguration: [, (_) => de_Cors(_, context), `corsConfiguration`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Description: [, __expectString, `description`],
    DisableExecuteApiEndpoint: [, __expectBoolean, `disableExecuteApiEndpoint`],
    DisableSchemaValidation: [, __expectBoolean, `disableSchemaValidation`],
    ImportInfo: [, _json, `importInfo`],
    Name: [, __expectString, `name`],
    ProtocolType: [, __expectString, `protocolType`],
    RouteSelectionExpression: [, __expectString, `routeSelectionExpression`],
    Tags: [, _json, `tags`],
    Version: [, __expectString, `version`],
    Warnings: [, _json, `warnings`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiCommandError
 */
const de_UpdateApiCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApiMappingCommand
 */
export const de_UpdateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApiMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiId: [, __expectString, `apiId`],
    ApiMappingId: [, __expectString, `apiMappingId`],
    ApiMappingKey: [, __expectString, `apiMappingKey`],
    Stage: [, __expectString, `stage`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiMappingCommandError
 */
const de_UpdateApiMappingCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAuthorizerCommand
 */
export const de_UpdateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAuthorizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthorizerCredentialsArn: [, __expectString, `authorizerCredentialsArn`],
    AuthorizerId: [, __expectString, `authorizerId`],
    AuthorizerPayloadFormatVersion: [, __expectString, `authorizerPayloadFormatVersion`],
    AuthorizerResultTtlInSeconds: [, __expectInt32, `authorizerResultTtlInSeconds`],
    AuthorizerType: [, __expectString, `authorizerType`],
    AuthorizerUri: [, __expectString, `authorizerUri`],
    EnableSimpleResponses: [, __expectBoolean, `enableSimpleResponses`],
    IdentitySource: [, _json, `identitySource`],
    IdentityValidationExpression: [, __expectString, `identityValidationExpression`],
    JwtConfiguration: [, (_) => de_JWTConfiguration(_, context), `jwtConfiguration`],
    Name: [, __expectString, `name`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAuthorizerCommandError
 */
const de_UpdateAuthorizerCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDeploymentCommand
 */
export const de_UpdateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoDeployed: [, __expectBoolean, `autoDeployed`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DeploymentId: [, __expectString, `deploymentId`],
    DeploymentStatus: [, __expectString, `deploymentStatus`],
    DeploymentStatusMessage: [, __expectString, `deploymentStatusMessage`],
    Description: [, __expectString, `description`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeploymentCommandError
 */
const de_UpdateDeploymentCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDomainNameCommand
 */
export const de_UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameConfigurations: [, (_) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainNameCommandError
 */
const de_UpdateDomainNameCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateIntegrationCommand
 */
export const de_UpdateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ConnectionId: [, __expectString, `connectionId`],
    ConnectionType: [, __expectString, `connectionType`],
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    CredentialsArn: [, __expectString, `credentialsArn`],
    Description: [, __expectString, `description`],
    IntegrationId: [, __expectString, `integrationId`],
    IntegrationMethod: [, __expectString, `integrationMethod`],
    IntegrationResponseSelectionExpression: [, __expectString, `integrationResponseSelectionExpression`],
    IntegrationSubtype: [, __expectString, `integrationSubtype`],
    IntegrationType: [, __expectString, `integrationType`],
    IntegrationUri: [, __expectString, `integrationUri`],
    PassthroughBehavior: [, __expectString, `passthroughBehavior`],
    PayloadFormatVersion: [, __expectString, `payloadFormatVersion`],
    RequestParameters: [, _json, `requestParameters`],
    RequestTemplates: [, _json, `requestTemplates`],
    ResponseParameters: [, _json, `responseParameters`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
    TimeoutInMillis: [, __expectInt32, `timeoutInMillis`],
    TlsConfig: [, (_) => de_TlsConfig(_, context), `tlsConfig`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIntegrationCommandError
 */
const de_UpdateIntegrationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateIntegrationResponseCommand
 */
export const de_UpdateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIntegrationResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    IntegrationResponseId: [, __expectString, `integrationResponseId`],
    IntegrationResponseKey: [, __expectString, `integrationResponseKey`],
    ResponseParameters: [, _json, `responseParameters`],
    ResponseTemplates: [, _json, `responseTemplates`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIntegrationResponseCommandError
 */
const de_UpdateIntegrationResponseCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateModelCommand
 */
export const de_UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContentType: [, __expectString, `contentType`],
    Description: [, __expectString, `description`],
    ModelId: [, __expectString, `modelId`],
    Name: [, __expectString, `name`],
    Schema: [, __expectString, `schema`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateModelCommandError
 */
const de_UpdateModelCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateRouteCommand
 */
export const de_UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiKeyRequired: [, __expectBoolean, `apiKeyRequired`],
    AuthorizationScopes: [, _json, `authorizationScopes`],
    AuthorizationType: [, __expectString, `authorizationType`],
    AuthorizerId: [, __expectString, `authorizerId`],
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    OperationName: [, __expectString, `operationName`],
    RequestModels: [, _json, `requestModels`],
    RequestParameters: [, (_) => de_RouteParameters(_, context), `requestParameters`],
    RouteId: [, __expectString, `routeId`],
    RouteKey: [, __expectString, `routeKey`],
    RouteResponseSelectionExpression: [, __expectString, `routeResponseSelectionExpression`],
    Target: [, __expectString, `target`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRouteCommandError
 */
const de_UpdateRouteCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateRouteResponseCommand
 */
export const de_UpdateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRouteResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    ResponseModels: [, _json, `responseModels`],
    ResponseParameters: [, (_) => de_RouteParameters(_, context), `responseParameters`],
    RouteResponseId: [, __expectString, `routeResponseId`],
    RouteResponseKey: [, __expectString, `routeResponseKey`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRouteResponseCommandError
 */
const de_UpdateRouteResponseCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateStageCommand
 */
export const de_UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessLogSettings: [, (_) => de_AccessLogSettings(_, context), `accessLogSettings`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    AutoDeploy: [, __expectBoolean, `autoDeploy`],
    ClientCertificateId: [, __expectString, `clientCertificateId`],
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DefaultRouteSettings: [, (_) => de_RouteSettings(_, context), `defaultRouteSettings`],
    DeploymentId: [, __expectString, `deploymentId`],
    Description: [, __expectString, `description`],
    LastDeploymentStatusMessage: [, __expectString, `lastDeploymentStatusMessage`],
    LastUpdatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdatedDate`],
    RouteSettings: [, (_) => de_RouteSettingsMap(_, context), `routeSettings`],
    StageName: [, __expectString, `stageName`],
    StageVariables: [, _json, `stageVariables`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStageCommandError
 */
const de_UpdateStageCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateVpcLinkCommand
 */
export const de_UpdateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVpcLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedDate: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Name: [, __expectString, `name`],
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetIds: [, _json, `subnetIds`],
    Tags: [, _json, `tags`],
    VpcLinkId: [, __expectString, `vpcLinkId`],
    VpcLinkStatus: [, __expectString, `vpcLinkStatus`],
    VpcLinkStatusMessage: [, __expectString, `vpcLinkStatusMessage`],
    VpcLinkVersion: [, __expectString, `vpcLinkVersion`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVpcLinkCommandError
 */
const de_UpdateVpcLinkCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
    ResourceType: [, __expectString, `resourceType`],
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    LimitType: [, __expectString, `limitType`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

/**
 * serializeAws_restJson1AccessLogSettings
 */
const se_AccessLogSettings = (input: AccessLogSettings, context: __SerdeContext): any => {
  return take(input, {
    destinationArn: [, , `DestinationArn`],
    format: [, , `Format`],
  });
};

// se_AuthorizationScopes omitted.

/**
 * serializeAws_restJson1Cors
 */
const se_Cors = (input: Cors, context: __SerdeContext): any => {
  return take(input, {
    allowCredentials: [, , `AllowCredentials`],
    allowHeaders: [, _json, `AllowHeaders`],
    allowMethods: [, _json, `AllowMethods`],
    allowOrigins: [, _json, `AllowOrigins`],
    exposeHeaders: [, _json, `ExposeHeaders`],
    maxAge: [, , `MaxAge`],
  });
};

// se_CorsHeaderList omitted.

// se_CorsMethodList omitted.

// se_CorsOriginList omitted.

/**
 * serializeAws_restJson1DomainNameConfiguration
 */
const se_DomainNameConfiguration = (input: DomainNameConfiguration, context: __SerdeContext): any => {
  return take(input, {
    apiGatewayDomainName: [, , `ApiGatewayDomainName`],
    certificateArn: [, , `CertificateArn`],
    certificateName: [, , `CertificateName`],
    certificateUploadDate: [, (_) => _.toISOString().split(".")[0] + "Z", `CertificateUploadDate`],
    domainNameStatus: [, , `DomainNameStatus`],
    domainNameStatusMessage: [, , `DomainNameStatusMessage`],
    endpointType: [, , `EndpointType`],
    hostedZoneId: [, , `HostedZoneId`],
    ownershipVerificationCertificateArn: [, , `OwnershipVerificationCertificateArn`],
    securityPolicy: [, , `SecurityPolicy`],
  });
};

/**
 * serializeAws_restJson1DomainNameConfigurations
 */
const se_DomainNameConfigurations = (input: DomainNameConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DomainNameConfiguration(entry, context);
    });
};

// se_IdentitySourceList omitted.

// se_IntegrationParameters omitted.

/**
 * serializeAws_restJson1JWTConfiguration
 */
const se_JWTConfiguration = (input: JWTConfiguration, context: __SerdeContext): any => {
  return take(input, {
    audience: [, _json, `Audience`],
    issuer: [, , `Issuer`],
  });
};

/**
 * serializeAws_restJson1MutualTlsAuthenticationInput
 */
const se_MutualTlsAuthenticationInput = (input: MutualTlsAuthenticationInput, context: __SerdeContext): any => {
  return take(input, {
    truststoreUri: [, , `TruststoreUri`],
    truststoreVersion: [, , `TruststoreVersion`],
  });
};

/**
 * serializeAws_restJson1ParameterConstraints
 */
const se_ParameterConstraints = (input: ParameterConstraints, context: __SerdeContext): any => {
  return take(input, {
    required: [, , `Required`],
  });
};

// se_ResponseParameters omitted.

// se_RouteModels omitted.

/**
 * serializeAws_restJson1RouteParameters
 */
const se_RouteParameters = (input: Record<string, ParameterConstraints>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ParameterConstraints(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RouteSettings
 */
const se_RouteSettings = (input: RouteSettings, context: __SerdeContext): any => {
  return take(input, {
    dataTraceEnabled: [, , `DataTraceEnabled`],
    detailedMetricsEnabled: [, , `DetailedMetricsEnabled`],
    loggingLevel: [, , `LoggingLevel`],
    throttlingBurstLimit: [, , `ThrottlingBurstLimit`],
    throttlingRateLimit: [, __serializeFloat, `ThrottlingRateLimit`],
  });
};

/**
 * serializeAws_restJson1RouteSettingsMap
 */
const se_RouteSettingsMap = (input: Record<string, RouteSettings>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RouteSettings(value, context);
    return acc;
  }, {});
};

// se_SecurityGroupIdList omitted.

// se_StageVariablesMap omitted.

// se_SubnetIdList omitted.

// se_Tags omitted.

// se_TemplateMap omitted.

/**
 * serializeAws_restJson1TlsConfigInput
 */
const se_TlsConfigInput = (input: TlsConfigInput, context: __SerdeContext): any => {
  return take(input, {
    serverNameToVerify: [, , `ServerNameToVerify`],
  });
};

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfApi
 */
const de___listOfApi = (output: any, context: __SerdeContext): Api[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Api(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfApiMapping
 */
const de___listOfApiMapping = (output: any, context: __SerdeContext): ApiMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApiMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAuthorizer
 */
const de___listOfAuthorizer = (output: any, context: __SerdeContext): Authorizer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Authorizer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDeployment
 */
const de___listOfDeployment = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Deployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDomainName
 */
const de___listOfDomainName = (output: any, context: __SerdeContext): DomainName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainName(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfIntegration
 */
const de___listOfIntegration = (output: any, context: __SerdeContext): Integration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Integration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfIntegrationResponse
 */
const de___listOfIntegrationResponse = (output: any, context: __SerdeContext): IntegrationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IntegrationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfModel
 */
const de___listOfModel = (output: any, context: __SerdeContext): Model[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Model(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRoute
 */
const de___listOfRoute = (output: any, context: __SerdeContext): Route[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Route(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRouteResponse
 */
const de___listOfRouteResponse = (output: any, context: __SerdeContext): RouteResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfStage
 */
const de___listOfStage = (output: any, context: __SerdeContext): Stage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Stage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVpcLink
 */
const de___listOfVpcLink = (output: any, context: __SerdeContext): VpcLink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcLink(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessLogSettings
 */
const de_AccessLogSettings = (output: any, context: __SerdeContext): AccessLogSettings => {
  return take(output, {
    DestinationArn: [, __expectString, `destinationArn`],
    Format: [, __expectString, `format`],
  }) as any;
};

/**
 * deserializeAws_restJson1Api
 */
const de_Api = (output: any, context: __SerdeContext): Api => {
  return take(output, {
    ApiEndpoint: [, __expectString, `apiEndpoint`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiId: [, __expectString, `apiId`],
    ApiKeySelectionExpression: [, __expectString, `apiKeySelectionExpression`],
    CorsConfiguration: [, (_: any) => de_Cors(_, context), `corsConfiguration`],
    CreatedDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Description: [, __expectString, `description`],
    DisableExecuteApiEndpoint: [, __expectBoolean, `disableExecuteApiEndpoint`],
    DisableSchemaValidation: [, __expectBoolean, `disableSchemaValidation`],
    ImportInfo: [, _json, `importInfo`],
    Name: [, __expectString, `name`],
    ProtocolType: [, __expectString, `protocolType`],
    RouteSelectionExpression: [, __expectString, `routeSelectionExpression`],
    Tags: [, _json, `tags`],
    Version: [, __expectString, `version`],
    Warnings: [, _json, `warnings`],
  }) as any;
};

/**
 * deserializeAws_restJson1ApiMapping
 */
const de_ApiMapping = (output: any, context: __SerdeContext): ApiMapping => {
  return take(output, {
    ApiId: [, __expectString, `apiId`],
    ApiMappingId: [, __expectString, `apiMappingId`],
    ApiMappingKey: [, __expectString, `apiMappingKey`],
    Stage: [, __expectString, `stage`],
  }) as any;
};

// de_AuthorizationScopes omitted.

/**
 * deserializeAws_restJson1Authorizer
 */
const de_Authorizer = (output: any, context: __SerdeContext): Authorizer => {
  return take(output, {
    AuthorizerCredentialsArn: [, __expectString, `authorizerCredentialsArn`],
    AuthorizerId: [, __expectString, `authorizerId`],
    AuthorizerPayloadFormatVersion: [, __expectString, `authorizerPayloadFormatVersion`],
    AuthorizerResultTtlInSeconds: [, __expectInt32, `authorizerResultTtlInSeconds`],
    AuthorizerType: [, __expectString, `authorizerType`],
    AuthorizerUri: [, __expectString, `authorizerUri`],
    EnableSimpleResponses: [, __expectBoolean, `enableSimpleResponses`],
    IdentitySource: [, _json, `identitySource`],
    IdentityValidationExpression: [, __expectString, `identityValidationExpression`],
    JwtConfiguration: [, (_: any) => de_JWTConfiguration(_, context), `jwtConfiguration`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1Cors
 */
const de_Cors = (output: any, context: __SerdeContext): Cors => {
  return take(output, {
    AllowCredentials: [, __expectBoolean, `allowCredentials`],
    AllowHeaders: [, _json, `allowHeaders`],
    AllowMethods: [, _json, `allowMethods`],
    AllowOrigins: [, _json, `allowOrigins`],
    ExposeHeaders: [, _json, `exposeHeaders`],
    MaxAge: [, __expectInt32, `maxAge`],
  }) as any;
};

// de_CorsHeaderList omitted.

// de_CorsMethodList omitted.

// de_CorsOriginList omitted.

/**
 * deserializeAws_restJson1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return take(output, {
    AutoDeployed: [, __expectBoolean, `autoDeployed`],
    CreatedDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DeploymentId: [, __expectString, `deploymentId`],
    DeploymentStatus: [, __expectString, `deploymentStatus`],
    DeploymentStatusMessage: [, __expectString, `deploymentStatusMessage`],
    Description: [, __expectString, `description`],
  }) as any;
};

/**
 * deserializeAws_restJson1DomainName
 */
const de_DomainName = (output: any, context: __SerdeContext): DomainName => {
  return take(output, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameConfigurations: [, (_: any) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_: any) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1DomainNameConfiguration
 */
const de_DomainNameConfiguration = (output: any, context: __SerdeContext): DomainNameConfiguration => {
  return take(output, {
    ApiGatewayDomainName: [, __expectString, `apiGatewayDomainName`],
    CertificateArn: [, __expectString, `certificateArn`],
    CertificateName: [, __expectString, `certificateName`],
    CertificateUploadDate: [
      ,
      (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
      `certificateUploadDate`,
    ],
    DomainNameStatus: [, __expectString, `domainNameStatus`],
    DomainNameStatusMessage: [, __expectString, `domainNameStatusMessage`],
    EndpointType: [, __expectString, `endpointType`],
    HostedZoneId: [, __expectString, `hostedZoneId`],
    OwnershipVerificationCertificateArn: [, __expectString, `ownershipVerificationCertificateArn`],
    SecurityPolicy: [, __expectString, `securityPolicy`],
  }) as any;
};

/**
 * deserializeAws_restJson1DomainNameConfigurations
 */
const de_DomainNameConfigurations = (output: any, context: __SerdeContext): DomainNameConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainNameConfiguration(entry, context);
    });
  return retVal;
};

// de_IdentitySourceList omitted.

/**
 * deserializeAws_restJson1Integration
 */
const de_Integration = (output: any, context: __SerdeContext): Integration => {
  return take(output, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ConnectionId: [, __expectString, `connectionId`],
    ConnectionType: [, __expectString, `connectionType`],
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    CredentialsArn: [, __expectString, `credentialsArn`],
    Description: [, __expectString, `description`],
    IntegrationId: [, __expectString, `integrationId`],
    IntegrationMethod: [, __expectString, `integrationMethod`],
    IntegrationResponseSelectionExpression: [, __expectString, `integrationResponseSelectionExpression`],
    IntegrationSubtype: [, __expectString, `integrationSubtype`],
    IntegrationType: [, __expectString, `integrationType`],
    IntegrationUri: [, __expectString, `integrationUri`],
    PassthroughBehavior: [, __expectString, `passthroughBehavior`],
    PayloadFormatVersion: [, __expectString, `payloadFormatVersion`],
    RequestParameters: [, _json, `requestParameters`],
    RequestTemplates: [, _json, `requestTemplates`],
    ResponseParameters: [, _json, `responseParameters`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
    TimeoutInMillis: [, __expectInt32, `timeoutInMillis`],
    TlsConfig: [, (_: any) => de_TlsConfig(_, context), `tlsConfig`],
  }) as any;
};

// de_IntegrationParameters omitted.

/**
 * deserializeAws_restJson1IntegrationResponse
 */
const de_IntegrationResponse = (output: any, context: __SerdeContext): IntegrationResponse => {
  return take(output, {
    ContentHandlingStrategy: [, __expectString, `contentHandlingStrategy`],
    IntegrationResponseId: [, __expectString, `integrationResponseId`],
    IntegrationResponseKey: [, __expectString, `integrationResponseKey`],
    ResponseParameters: [, _json, `responseParameters`],
    ResponseTemplates: [, _json, `responseTemplates`],
    TemplateSelectionExpression: [, __expectString, `templateSelectionExpression`],
  }) as any;
};

/**
 * deserializeAws_restJson1JWTConfiguration
 */
const de_JWTConfiguration = (output: any, context: __SerdeContext): JWTConfiguration => {
  return take(output, {
    Audience: [, _json, `audience`],
    Issuer: [, __expectString, `issuer`],
  }) as any;
};

/**
 * deserializeAws_restJson1Model
 */
const de_Model = (output: any, context: __SerdeContext): Model => {
  return take(output, {
    ContentType: [, __expectString, `contentType`],
    Description: [, __expectString, `description`],
    ModelId: [, __expectString, `modelId`],
    Name: [, __expectString, `name`],
    Schema: [, __expectString, `schema`],
  }) as any;
};

/**
 * deserializeAws_restJson1MutualTlsAuthentication
 */
const de_MutualTlsAuthentication = (output: any, context: __SerdeContext): MutualTlsAuthentication => {
  return take(output, {
    TruststoreUri: [, __expectString, `truststoreUri`],
    TruststoreVersion: [, __expectString, `truststoreVersion`],
    TruststoreWarnings: [, _json, `truststoreWarnings`],
  }) as any;
};

/**
 * deserializeAws_restJson1ParameterConstraints
 */
const de_ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  return take(output, {
    Required: [, __expectBoolean, `required`],
  }) as any;
};

// de_ResponseParameters omitted.

/**
 * deserializeAws_restJson1Route
 */
const de_Route = (output: any, context: __SerdeContext): Route => {
  return take(output, {
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    ApiKeyRequired: [, __expectBoolean, `apiKeyRequired`],
    AuthorizationScopes: [, _json, `authorizationScopes`],
    AuthorizationType: [, __expectString, `authorizationType`],
    AuthorizerId: [, __expectString, `authorizerId`],
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    OperationName: [, __expectString, `operationName`],
    RequestModels: [, _json, `requestModels`],
    RequestParameters: [, (_: any) => de_RouteParameters(_, context), `requestParameters`],
    RouteId: [, __expectString, `routeId`],
    RouteKey: [, __expectString, `routeKey`],
    RouteResponseSelectionExpression: [, __expectString, `routeResponseSelectionExpression`],
    Target: [, __expectString, `target`],
  }) as any;
};

// de_RouteModels omitted.

/**
 * deserializeAws_restJson1RouteParameters
 */
const de_RouteParameters = (output: any, context: __SerdeContext): Record<string, ParameterConstraints> => {
  return Object.entries(output).reduce((acc: Record<string, ParameterConstraints>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ParameterConstraints(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1RouteResponse
 */
const de_RouteResponse = (output: any, context: __SerdeContext): RouteResponse => {
  return take(output, {
    ModelSelectionExpression: [, __expectString, `modelSelectionExpression`],
    ResponseModels: [, _json, `responseModels`],
    ResponseParameters: [, (_: any) => de_RouteParameters(_, context), `responseParameters`],
    RouteResponseId: [, __expectString, `routeResponseId`],
    RouteResponseKey: [, __expectString, `routeResponseKey`],
  }) as any;
};

/**
 * deserializeAws_restJson1RouteSettings
 */
const de_RouteSettings = (output: any, context: __SerdeContext): RouteSettings => {
  return take(output, {
    DataTraceEnabled: [, __expectBoolean, `dataTraceEnabled`],
    DetailedMetricsEnabled: [, __expectBoolean, `detailedMetricsEnabled`],
    LoggingLevel: [, __expectString, `loggingLevel`],
    ThrottlingBurstLimit: [, __expectInt32, `throttlingBurstLimit`],
    ThrottlingRateLimit: [, __limitedParseDouble, `throttlingRateLimit`],
  }) as any;
};

/**
 * deserializeAws_restJson1RouteSettingsMap
 */
const de_RouteSettingsMap = (output: any, context: __SerdeContext): Record<string, RouteSettings> => {
  return Object.entries(output).reduce((acc: Record<string, RouteSettings>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_RouteSettings(value, context);
    return acc;
  }, {});
};

// de_SecurityGroupIdList omitted.

/**
 * deserializeAws_restJson1Stage
 */
const de_Stage = (output: any, context: __SerdeContext): Stage => {
  return take(output, {
    AccessLogSettings: [, (_: any) => de_AccessLogSettings(_, context), `accessLogSettings`],
    ApiGatewayManaged: [, __expectBoolean, `apiGatewayManaged`],
    AutoDeploy: [, __expectBoolean, `autoDeploy`],
    ClientCertificateId: [, __expectString, `clientCertificateId`],
    CreatedDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    DefaultRouteSettings: [, (_: any) => de_RouteSettings(_, context), `defaultRouteSettings`],
    DeploymentId: [, __expectString, `deploymentId`],
    Description: [, __expectString, `description`],
    LastDeploymentStatusMessage: [, __expectString, `lastDeploymentStatusMessage`],
    LastUpdatedDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastUpdatedDate`],
    RouteSettings: [, (_: any) => de_RouteSettingsMap(_, context), `routeSettings`],
    StageName: [, __expectString, `stageName`],
    StageVariables: [, _json, `stageVariables`],
    Tags: [, _json, `tags`],
  }) as any;
};

// de_StageVariablesMap omitted.

// de_SubnetIdList omitted.

// de_Tags omitted.

// de_TemplateMap omitted.

/**
 * deserializeAws_restJson1TlsConfig
 */
const de_TlsConfig = (output: any, context: __SerdeContext): TlsConfig => {
  return take(output, {
    ServerNameToVerify: [, __expectString, `serverNameToVerify`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcLink
 */
const de_VpcLink = (output: any, context: __SerdeContext): VpcLink => {
  return take(output, {
    CreatedDate: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `createdDate`],
    Name: [, __expectString, `name`],
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetIds: [, _json, `subnetIds`],
    Tags: [, _json, `tags`],
    VpcLinkId: [, __expectString, `vpcLinkId`],
    VpcLinkStatus: [, __expectString, `vpcLinkStatus`],
    VpcLinkStatusMessage: [, __expectString, `vpcLinkStatusMessage`],
    VpcLinkVersion: [, __expectString, `vpcLinkVersion`],
  }) as any;
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
