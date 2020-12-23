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
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "../commands/GetModelTemplateCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateApiCommand = async (
  input: CreateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis";
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeySelectionExpression !== undefined &&
      input.ApiKeySelectionExpression !== null && { apiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration !== undefined &&
      input.CorsConfiguration !== null && {
        corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
      }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.DisableExecuteApiEndpoint !== undefined &&
      input.DisableExecuteApiEndpoint !== null && { disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint }),
    ...(input.DisableSchemaValidation !== undefined &&
      input.DisableSchemaValidation !== null && { disableSchemaValidation: input.DisableSchemaValidation }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.ProtocolType !== undefined && input.ProtocolType !== null && { protocolType: input.ProtocolType }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteSelectionExpression !== undefined &&
      input.RouteSelectionExpression !== null && { routeSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
    ...(input.Version !== undefined && input.Version !== null && { version: input.Version }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ApiId !== undefined && input.ApiId !== null && { apiId: input.ApiId }),
    ...(input.ApiMappingKey !== undefined && input.ApiMappingKey !== null && { apiMappingKey: input.ApiMappingKey }),
    ...(input.Stage !== undefined && input.Stage !== null && { stage: input.Stage }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AuthorizerCredentialsArn !== undefined &&
      input.AuthorizerCredentialsArn !== null && { authorizerCredentialsArn: input.AuthorizerCredentialsArn }),
    ...(input.AuthorizerPayloadFormatVersion !== undefined &&
      input.AuthorizerPayloadFormatVersion !== null && {
        authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
      }),
    ...(input.AuthorizerResultTtlInSeconds !== undefined &&
      input.AuthorizerResultTtlInSeconds !== null && {
        authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
      }),
    ...(input.AuthorizerType !== undefined &&
      input.AuthorizerType !== null && { authorizerType: input.AuthorizerType }),
    ...(input.AuthorizerUri !== undefined && input.AuthorizerUri !== null && { authorizerUri: input.AuthorizerUri }),
    ...(input.EnableSimpleResponses !== undefined &&
      input.EnableSimpleResponses !== null && { enableSimpleResponses: input.EnableSimpleResponses }),
    ...(input.IdentitySource !== undefined &&
      input.IdentitySource !== null && {
        identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
      }),
    ...(input.IdentityValidationExpression !== undefined &&
      input.IdentityValidationExpression !== null && {
        identityValidationExpression: input.IdentityValidationExpression,
      }),
    ...(input.JwtConfiguration !== undefined &&
      input.JwtConfiguration !== null && {
        jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/deployments";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.StageName !== undefined && input.StageName !== null && { stageName: input.StageName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { domainName: input.DomainName }),
    ...(input.DomainNameConfigurations !== undefined &&
      input.DomainNameConfigurations !== null && {
        domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(
          input.DomainNameConfigurations,
          context
        ),
      }),
    ...(input.MutualTlsAuthentication !== undefined &&
      input.MutualTlsAuthentication !== null && {
        mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
          input.MutualTlsAuthentication,
          context
        ),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionId !== undefined && input.ConnectionId !== null && { connectionId: input.ConnectionId }),
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { connectionType: input.ConnectionType }),
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.IntegrationMethod !== undefined &&
      input.IntegrationMethod !== null && { integrationMethod: input.IntegrationMethod }),
    ...(input.IntegrationSubtype !== undefined &&
      input.IntegrationSubtype !== null && { integrationSubtype: input.IntegrationSubtype }),
    ...(input.IntegrationType !== undefined &&
      input.IntegrationType !== null && { integrationType: input.IntegrationType }),
    ...(input.IntegrationUri !== undefined &&
      input.IntegrationUri !== null && { integrationUri: input.IntegrationUri }),
    ...(input.PassthroughBehavior !== undefined &&
      input.PassthroughBehavior !== null && { passthroughBehavior: input.PassthroughBehavior }),
    ...(input.PayloadFormatVersion !== undefined &&
      input.PayloadFormatVersion !== null && { payloadFormatVersion: input.PayloadFormatVersion }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1IntegrationParameters(input.RequestParameters, context),
      }),
    ...(input.RequestTemplates !== undefined &&
      input.RequestTemplates !== null && {
        requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
    ...(input.TimeoutInMillis !== undefined &&
      input.TimeoutInMillis !== null && { timeoutInMillis: input.TimeoutInMillis }),
    ...(input.TlsConfig !== undefined &&
      input.TlsConfig !== null && { tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.IntegrationResponseKey !== undefined &&
      input.IntegrationResponseKey !== null && { integrationResponseKey: input.IntegrationResponseKey }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1IntegrationParameters(input.ResponseParameters, context),
      }),
    ...(input.ResponseTemplates !== undefined &&
      input.ResponseTemplates !== null && {
        responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/models";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ContentType !== undefined && input.ContentType !== null && { contentType: input.ContentType }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Schema !== undefined && input.Schema !== null && { schema: input.Schema }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeyRequired !== undefined &&
      input.ApiKeyRequired !== null && { apiKeyRequired: input.ApiKeyRequired }),
    ...(input.AuthorizationScopes !== undefined &&
      input.AuthorizationScopes !== null && {
        authorizationScopes: serializeAws_restJson1AuthorizationScopes(input.AuthorizationScopes, context),
      }),
    ...(input.AuthorizationType !== undefined &&
      input.AuthorizationType !== null && { authorizationType: input.AuthorizationType }),
    ...(input.AuthorizerId !== undefined && input.AuthorizerId !== null && { authorizerId: input.AuthorizerId }),
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.OperationName !== undefined && input.OperationName !== null && { operationName: input.OperationName }),
    ...(input.RequestModels !== undefined &&
      input.RequestModels !== null && {
        requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
      }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
      }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteResponseSelectionExpression !== undefined &&
      input.RouteResponseSelectionExpression !== null && {
        routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
      }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.ResponseModels !== undefined &&
      input.ResponseModels !== null && {
        responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
      }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
      }),
    ...(input.RouteResponseKey !== undefined &&
      input.RouteResponseKey !== null && { routeResponseKey: input.RouteResponseKey }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/stages";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccessLogSettings !== undefined &&
      input.AccessLogSettings !== null && {
        accessLogSettings: serializeAws_restJson1AccessLogSettings(input.AccessLogSettings, context),
      }),
    ...(input.AutoDeploy !== undefined && input.AutoDeploy !== null && { autoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId !== undefined &&
      input.ClientCertificateId !== null && { clientCertificateId: input.ClientCertificateId }),
    ...(input.DefaultRouteSettings !== undefined &&
      input.DefaultRouteSettings !== null && {
        defaultRouteSettings: serializeAws_restJson1RouteSettings(input.DefaultRouteSettings, context),
      }),
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { deploymentId: input.DeploymentId }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.RouteSettings !== undefined &&
      input.RouteSettings !== null && {
        routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
      }),
    ...(input.StageName !== undefined && input.StageName !== null && { stageName: input.StageName }),
    ...(input.StageVariables !== undefined &&
      input.StageVariables !== null && {
        stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/vpclinks";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { subnetIds: serializeAws_restJson1SubnetIdList(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/accesslogsettings";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue: string = input.ApiMappingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue: string = input.AuthorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/cors";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue: string = input.DeploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue: string = input.IntegrationResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationResponseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: string = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RequestParameterKey !== undefined) {
    const labelValue: string = input.RequestParameterKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RequestParameterKey.");
    }
    resolvedPath = resolvedPath.replace("{RequestParameterKey}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RequestParameterKey.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue: string = input.RouteResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteKey !== undefined) {
    const labelValue: string = input.RouteKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteKey.");
    }
    resolvedPath = resolvedPath.replace("{RouteKey}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteKey.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/vpclinks/{VpcLinkId}";
  if (input.VpcLinkId !== undefined) {
    const labelValue: string = input.VpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{VpcLinkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcLinkId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/exports/{Specification}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.Specification !== undefined) {
    const labelValue: string = input.Specification;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Specification.");
    }
    resolvedPath = resolvedPath.replace("{Specification}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Specification.");
  }
  const query: any = {
    ...(input.ExportVersion !== undefined && { exportVersion: input.ExportVersion }),
    ...(input.IncludeExtensions !== undefined && { includeExtensions: input.IncludeExtensions.toString() }),
    ...(input.OutputType !== undefined && { outputType: input.OutputType }),
    ...(input.StageName !== undefined && { stageName: input.StageName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue: string = input.ApiMappingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue: string = input.AuthorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue: string = input.DeploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/deployments";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/domainnames";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue: string = input.IntegrationResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationResponseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: string = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/models";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}/template";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: string = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue: string = input.RouteResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/vpclinks/{VpcLinkId}";
  if (input.VpcLinkId !== undefined) {
    const labelValue: string = input.VpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{VpcLinkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcLinkId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/vpclinks";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis";
  const query: any = {
    ...(input.Basepath !== undefined && { basepath: input.Basepath }),
    ...(input.FailOnWarnings !== undefined && { failOnWarnings: input.FailOnWarnings.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Body !== undefined && input.Body !== null && { body: input.Body }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {
    ...(input.Basepath !== undefined && { basepath: input.Basepath }),
    ...(input.FailOnWarnings !== undefined && { failOnWarnings: input.FailOnWarnings.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Body !== undefined && input.Body !== null && { body: input.Body }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/cache/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeySelectionExpression !== undefined &&
      input.ApiKeySelectionExpression !== null && { apiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration !== undefined &&
      input.CorsConfiguration !== null && {
        corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
      }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.DisableExecuteApiEndpoint !== undefined &&
      input.DisableExecuteApiEndpoint !== null && { disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint }),
    ...(input.DisableSchemaValidation !== undefined &&
      input.DisableSchemaValidation !== null && { disableSchemaValidation: input.DisableSchemaValidation }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteSelectionExpression !== undefined &&
      input.RouteSelectionExpression !== null && { routeSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
    ...(input.Version !== undefined && input.Version !== null && { version: input.Version }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue: string = input.ApiMappingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ApiId !== undefined && input.ApiId !== null && { apiId: input.ApiId }),
    ...(input.ApiMappingKey !== undefined && input.ApiMappingKey !== null && { apiMappingKey: input.ApiMappingKey }),
    ...(input.Stage !== undefined && input.Stage !== null && { stage: input.Stage }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue: string = input.AuthorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AuthorizerCredentialsArn !== undefined &&
      input.AuthorizerCredentialsArn !== null && { authorizerCredentialsArn: input.AuthorizerCredentialsArn }),
    ...(input.AuthorizerPayloadFormatVersion !== undefined &&
      input.AuthorizerPayloadFormatVersion !== null && {
        authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
      }),
    ...(input.AuthorizerResultTtlInSeconds !== undefined &&
      input.AuthorizerResultTtlInSeconds !== null && {
        authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
      }),
    ...(input.AuthorizerType !== undefined &&
      input.AuthorizerType !== null && { authorizerType: input.AuthorizerType }),
    ...(input.AuthorizerUri !== undefined && input.AuthorizerUri !== null && { authorizerUri: input.AuthorizerUri }),
    ...(input.EnableSimpleResponses !== undefined &&
      input.EnableSimpleResponses !== null && { enableSimpleResponses: input.EnableSimpleResponses }),
    ...(input.IdentitySource !== undefined &&
      input.IdentitySource !== null && {
        identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
      }),
    ...(input.IdentityValidationExpression !== undefined &&
      input.IdentityValidationExpression !== null && {
        identityValidationExpression: input.IdentityValidationExpression,
      }),
    ...(input.JwtConfiguration !== undefined &&
      input.JwtConfiguration !== null && {
        jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue: string = input.DeploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DomainNameConfigurations !== undefined &&
      input.DomainNameConfigurations !== null && {
        domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(
          input.DomainNameConfigurations,
          context
        ),
      }),
    ...(input.MutualTlsAuthentication !== undefined &&
      input.MutualTlsAuthentication !== null && {
        mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
          input.MutualTlsAuthentication,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionId !== undefined && input.ConnectionId !== null && { connectionId: input.ConnectionId }),
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { connectionType: input.ConnectionType }),
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.IntegrationMethod !== undefined &&
      input.IntegrationMethod !== null && { integrationMethod: input.IntegrationMethod }),
    ...(input.IntegrationSubtype !== undefined &&
      input.IntegrationSubtype !== null && { integrationSubtype: input.IntegrationSubtype }),
    ...(input.IntegrationType !== undefined &&
      input.IntegrationType !== null && { integrationType: input.IntegrationType }),
    ...(input.IntegrationUri !== undefined &&
      input.IntegrationUri !== null && { integrationUri: input.IntegrationUri }),
    ...(input.PassthroughBehavior !== undefined &&
      input.PassthroughBehavior !== null && { passthroughBehavior: input.PassthroughBehavior }),
    ...(input.PayloadFormatVersion !== undefined &&
      input.PayloadFormatVersion !== null && { payloadFormatVersion: input.PayloadFormatVersion }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1IntegrationParameters(input.RequestParameters, context),
      }),
    ...(input.RequestTemplates !== undefined &&
      input.RequestTemplates !== null && {
        requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
    ...(input.TimeoutInMillis !== undefined &&
      input.TimeoutInMillis !== null && { timeoutInMillis: input.TimeoutInMillis }),
    ...(input.TlsConfig !== undefined &&
      input.TlsConfig !== null && { tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: string = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue: string = input.IntegrationResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationResponseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.IntegrationResponseKey !== undefined &&
      input.IntegrationResponseKey !== null && { integrationResponseKey: input.IntegrationResponseKey }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1IntegrationParameters(input.ResponseParameters, context),
      }),
    ...(input.ResponseTemplates !== undefined &&
      input.ResponseTemplates !== null && {
        responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: string = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ContentType !== undefined && input.ContentType !== null && { contentType: input.ContentType }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Schema !== undefined && input.Schema !== null && { schema: input.Schema }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ApiKeyRequired !== undefined &&
      input.ApiKeyRequired !== null && { apiKeyRequired: input.ApiKeyRequired }),
    ...(input.AuthorizationScopes !== undefined &&
      input.AuthorizationScopes !== null && {
        authorizationScopes: serializeAws_restJson1AuthorizationScopes(input.AuthorizationScopes, context),
      }),
    ...(input.AuthorizationType !== undefined &&
      input.AuthorizationType !== null && { authorizationType: input.AuthorizationType }),
    ...(input.AuthorizerId !== undefined && input.AuthorizerId !== null && { authorizerId: input.AuthorizerId }),
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.OperationName !== undefined && input.OperationName !== null && { operationName: input.OperationName }),
    ...(input.RequestModels !== undefined &&
      input.RequestModels !== null && {
        requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
      }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
      }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteResponseSelectionExpression !== undefined &&
      input.RouteResponseSelectionExpression !== null && {
        routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
      }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: string = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue: string = input.RouteResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.ResponseModels !== undefined &&
      input.ResponseModels !== null && {
        responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
      }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
      }),
    ...(input.RouteResponseKey !== undefined &&
      input.RouteResponseKey !== null && { routeResponseKey: input.RouteResponseKey }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue: string = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccessLogSettings !== undefined &&
      input.AccessLogSettings !== null && {
        accessLogSettings: serializeAws_restJson1AccessLogSettings(input.AccessLogSettings, context),
      }),
    ...(input.AutoDeploy !== undefined && input.AutoDeploy !== null && { autoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId !== undefined &&
      input.ClientCertificateId !== null && { clientCertificateId: input.ClientCertificateId }),
    ...(input.DefaultRouteSettings !== undefined &&
      input.DefaultRouteSettings !== null && {
        defaultRouteSettings: serializeAws_restJson1RouteSettings(input.DefaultRouteSettings, context),
      }),
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { deploymentId: input.DeploymentId }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.RouteSettings !== undefined &&
      input.RouteSettings !== null && {
        routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
      }),
    ...(input.StageVariables !== undefined &&
      input.StageVariables !== null && {
        stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/vpclinks/{VpcLinkId}";
  if (input.VpcLinkId !== undefined) {
    const labelValue: string = input.VpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{VpcLinkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcLinkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const contents: CreateApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiMappingCommandError(output, context);
  }
  const contents: CreateApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAuthorizerCommandError(output, context);
  }
  const contents: CreateAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerPayloadFormatVersion: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    EnableSimpleResponses: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
    contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined && data.authorizerType !== null) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
    contents.EnableSimpleResponses = data.enableSimpleResponses;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainNameCommandError(output, context);
  }
  const contents: CreateDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    MutualTlsAuthentication: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.apigatewayv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationCommandError(output, context);
  }
  const contents: CreateIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationSubtype: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined,
    TlsConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined && data.integrationId !== null) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (
    data.integrationResponseSelectionExpression !== undefined &&
    data.integrationResponseSelectionExpression !== null
  ) {
    contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
  }
  if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
    contents.IntegrationSubtype = data.integrationSubtype;
  }
  if (data.integrationType !== undefined && data.integrationType !== null) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined && data.integrationUri !== null) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationResponseCommandError(output, context);
  }
  const contents: CreateIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateModelCommandError(output, context);
  }
  const contents: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined && data.modelId !== null) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCommandError(output, context);
  }
  const contents: CreateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ApiKeyRequired: undefined,
    AuthorizationScopes: undefined,
    AuthorizationType: undefined,
    AuthorizerId: undefined,
    ModelSelectionExpression: undefined,
    OperationName: undefined,
    RequestModels: undefined,
    RequestParameters: undefined,
    RouteId: undefined,
    RouteKey: undefined,
    RouteResponseSelectionExpression: undefined,
    Target: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId !== undefined && data.routeId !== null) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined && data.routeKey !== null) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
    contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined && data.target !== null) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteResponseCommandError(output, context);
  }
  const contents: CreateRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStageCommandError(output, context);
  }
  const contents: CreateStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessLogSettings: undefined,
    ApiGatewayManaged: undefined,
    AutoDeploy: undefined,
    ClientCertificateId: undefined,
    CreatedDate: undefined,
    DefaultRouteSettings: undefined,
    DeploymentId: undefined,
    Description: undefined,
    LastDeploymentStatusMessage: undefined,
    LastUpdatedDate: undefined,
    RouteSettings: undefined,
    StageName: undefined,
    StageVariables: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined && data.routeSettings !== null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined && data.stageVariables !== null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcLinkCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcLinkCommandError(output, context);
  }
  const contents: CreateVpcLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedDate: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcLinkId: undefined,
    VpcLinkStatus: undefined,
    VpcLinkStatusMessage: undefined,
    VpcLinkVersion: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
    contents.VpcLinkId = data.vpcLinkId;
  }
  if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
    contents.VpcLinkStatus = data.vpcLinkStatus;
  }
  if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
    contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
  }
  if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
    contents.VpcLinkVersion = data.vpcLinkVersion;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAccessLogSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessLogSettingsCommandError(output, context);
  }
  const contents: DeleteAccessLogSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAccessLogSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiCommandError(output, context);
  }
  const contents: DeleteApiCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiMappingCommandError(output, context);
  }
  const contents: DeleteApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAuthorizerCommandError(output, context);
  }
  const contents: DeleteAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteCorsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCorsConfigurationCommandError(output, context);
  }
  const contents: DeleteCorsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCorsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeploymentCommandError(output, context);
  }
  const contents: DeleteDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainNameCommandError(output, context);
  }
  const contents: DeleteDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationCommandError(output, context);
  }
  const contents: DeleteIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationResponseCommandError(output, context);
  }
  const contents: DeleteIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteModelCommandError(output, context);
  }
  const contents: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCommandError(output, context);
  }
  const contents: DeleteRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRouteRequestParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteRequestParameterCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteRequestParameterCommandError(output, context);
  }
  const contents: DeleteRouteRequestParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRouteRequestParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteRequestParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteResponseCommandError(output, context);
  }
  const contents: DeleteRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRouteSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteSettingsCommandError(output, context);
  }
  const contents: DeleteRouteSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRouteSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStageCommandError(output, context);
  }
  const contents: DeleteStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcLinkCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVpcLinkCommandError(output, context);
  }
  const contents: DeleteVpcLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ExportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportApiCommandError(output, context);
  }
  const contents: ExportApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    body: undefined,
  };
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiCommandError(output, context);
  }
  const contents: GetApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiMappingCommandError(output, context);
  }
  const contents: GetApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApiMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiMappingsCommandError(output, context);
  }
  const contents: GetApiMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfApiMapping(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApiMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApisCommandError(output, context);
  }
  const contents: GetApisCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfApi(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizerCommandError(output, context);
  }
  const contents: GetAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerPayloadFormatVersion: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    EnableSimpleResponses: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
    contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined && data.authorizerType !== null) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
    contents.EnableSimpleResponses = data.enableSimpleResponses;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAuthorizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizersCommandError(output, context);
  }
  const contents: GetAuthorizersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfAuthorizer(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAuthorizersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentsCommandError(output, context);
  }
  const contents: GetDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfDeployment(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNameCommandError(output, context);
  }
  const contents: GetDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    MutualTlsAuthentication: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNamesCommandError(output, context);
  }
  const contents: GetDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfDomainName(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationCommandError(output, context);
  }
  const contents: GetIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationSubtype: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined,
    TlsConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined && data.integrationId !== null) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (
    data.integrationResponseSelectionExpression !== undefined &&
    data.integrationResponseSelectionExpression !== null
  ) {
    contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
  }
  if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
    contents.IntegrationSubtype = data.integrationSubtype;
  }
  if (data.integrationType !== undefined && data.integrationType !== null) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined && data.integrationUri !== null) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponseCommandError(output, context);
  }
  const contents: GetIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetIntegrationResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponsesCommandError(output, context);
  }
  const contents: GetIntegrationResponsesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfIntegrationResponse(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntegrationResponsesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationsCommandError(output, context);
  }
  const contents: GetIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfIntegration(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelCommandError(output, context);
  }
  const contents: GetModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined && data.modelId !== null) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelsCommandError(output, context);
  }
  const contents: GetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfModel(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetModelTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelTemplateCommandError(output, context);
  }
  const contents: GetModelTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    Value: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.value !== undefined && data.value !== null) {
    contents.Value = data.value;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetModelTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteCommandError(output, context);
  }
  const contents: GetRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ApiKeyRequired: undefined,
    AuthorizationScopes: undefined,
    AuthorizationType: undefined,
    AuthorizerId: undefined,
    ModelSelectionExpression: undefined,
    OperationName: undefined,
    RequestModels: undefined,
    RequestParameters: undefined,
    RouteId: undefined,
    RouteKey: undefined,
    RouteResponseSelectionExpression: undefined,
    Target: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId !== undefined && data.routeId !== null) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined && data.routeKey !== null) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
    contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined && data.target !== null) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteResponseCommandError(output, context);
  }
  const contents: GetRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRouteResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteResponsesCommandError(output, context);
  }
  const contents: GetRouteResponsesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfRouteResponse(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRouteResponsesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRoutesCommandError(output, context);
  }
  const contents: GetRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfRoute(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStageCommandError(output, context);
  }
  const contents: GetStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessLogSettings: undefined,
    ApiGatewayManaged: undefined,
    AutoDeploy: undefined,
    ClientCertificateId: undefined,
    CreatedDate: undefined,
    DefaultRouteSettings: undefined,
    DeploymentId: undefined,
    Description: undefined,
    LastDeploymentStatusMessage: undefined,
    LastUpdatedDate: undefined,
    RouteSettings: undefined,
    StageName: undefined,
    StageVariables: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined && data.routeSettings !== null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined && data.stageVariables !== null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStagesCommandError(output, context);
  }
  const contents: GetStagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfStage(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTagsCommandError(output, context);
  }
  const contents: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinkCommandError(output, context);
  }
  const contents: GetVpcLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedDate: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcLinkId: undefined,
    VpcLinkStatus: undefined,
    VpcLinkStatusMessage: undefined,
    VpcLinkVersion: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
    contents.VpcLinkId = data.vpcLinkId;
  }
  if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
    contents.VpcLinkStatus = data.vpcLinkStatus;
  }
  if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
    contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
  }
  if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
    contents.VpcLinkVersion = data.vpcLinkVersion;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVpcLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinksCommandError(output, context);
  }
  const contents: GetVpcLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfVpcLink(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVpcLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ImportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportApiCommandError(output, context);
  }
  const contents: ImportApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ReimportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReimportApiCommandError(output, context);
  }
  const contents: ReimportApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ReimportApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ResetAuthorizersCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAuthorizersCacheCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetAuthorizersCacheCommandError(output, context);
  }
  const contents: ResetAuthorizersCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ResetAuthorizersCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAuthorizersCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiCommandError(output, context);
  }
  const contents: UpdateApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiMappingCommandError(output, context);
  }
  const contents: UpdateApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApiMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAuthorizerCommandError(output, context);
  }
  const contents: UpdateAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerPayloadFormatVersion: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    EnableSimpleResponses: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
    contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined && data.authorizerType !== null) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
    contents.EnableSimpleResponses = data.enableSimpleResponses;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAuthorizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeploymentCommandError(output, context);
  }
  const contents: UpdateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainNameCommandError(output, context);
  }
  const contents: UpdateDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    MutualTlsAuthentication: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationCommandError(output, context);
  }
  const contents: UpdateIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationSubtype: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined,
    TlsConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined && data.integrationId !== null) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (
    data.integrationResponseSelectionExpression !== undefined &&
    data.integrationResponseSelectionExpression !== null
  ) {
    contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
  }
  if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
    contents.IntegrationSubtype = data.integrationSubtype;
  }
  if (data.integrationType !== undefined && data.integrationType !== null) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined && data.integrationUri !== null) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationResponseCommandError(output, context);
  }
  const contents: UpdateIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateIntegrationResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateModelCommandError(output, context);
  }
  const contents: UpdateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined && data.modelId !== null) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCommandError(output, context);
  }
  const contents: UpdateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ApiKeyRequired: undefined,
    AuthorizationScopes: undefined,
    AuthorizationType: undefined,
    AuthorizerId: undefined,
    ModelSelectionExpression: undefined,
    OperationName: undefined,
    RequestModels: undefined,
    RequestParameters: undefined,
    RouteId: undefined,
    RouteKey: undefined,
    RouteResponseSelectionExpression: undefined,
    Target: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId !== undefined && data.routeId !== null) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined && data.routeKey !== null) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
    contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined && data.target !== null) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteResponseCommandError(output, context);
  }
  const contents: UpdateRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRouteResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStageCommandError(output, context);
  }
  const contents: UpdateStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessLogSettings: undefined,
    ApiGatewayManaged: undefined,
    AutoDeploy: undefined,
    ClientCertificateId: undefined,
    CreatedDate: undefined,
    DefaultRouteSettings: undefined,
    DeploymentId: undefined,
    Description: undefined,
    LastDeploymentStatusMessage: undefined,
    LastUpdatedDate: undefined,
    RouteSettings: undefined,
    StageName: undefined,
    StageVariables: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined && data.routeSettings !== null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined && data.stageVariables !== null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcLinkCommandError(output, context);
  }
  const contents: UpdateVpcLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedDate: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcLinkId: undefined,
    VpcLinkStatus: undefined,
    VpcLinkStatusMessage: undefined,
    VpcLinkVersion: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
    contents.VpcLinkId = data.vpcLinkId;
  }
  if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
    contents.VpcLinkStatus = data.vpcLinkStatus;
  }
  if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
    contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
  }
  if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
    contents.VpcLinkVersion = data.vpcLinkVersion;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVpcLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.ResourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LimitType: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.limitType !== undefined && data.limitType !== null) {
    contents.LimitType = data.limitType;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AccessLogSettings = (input: AccessLogSettings, context: __SerdeContext): any => {
  return {
    ...(input.DestinationArn !== undefined &&
      input.DestinationArn !== null && { destinationArn: input.DestinationArn }),
    ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
  };
};

const serializeAws_restJson1AuthorizationScopes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Cors = (input: Cors, context: __SerdeContext): any => {
  return {
    ...(input.AllowCredentials !== undefined &&
      input.AllowCredentials !== null && { allowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders !== undefined &&
      input.AllowHeaders !== null && {
        allowHeaders: serializeAws_restJson1CorsHeaderList(input.AllowHeaders, context),
      }),
    ...(input.AllowMethods !== undefined &&
      input.AllowMethods !== null && {
        allowMethods: serializeAws_restJson1CorsMethodList(input.AllowMethods, context),
      }),
    ...(input.AllowOrigins !== undefined &&
      input.AllowOrigins !== null && {
        allowOrigins: serializeAws_restJson1CorsOriginList(input.AllowOrigins, context),
      }),
    ...(input.ExposeHeaders !== undefined &&
      input.ExposeHeaders !== null && {
        exposeHeaders: serializeAws_restJson1CorsHeaderList(input.ExposeHeaders, context),
      }),
    ...(input.MaxAge !== undefined && input.MaxAge !== null && { maxAge: input.MaxAge }),
  };
};

const serializeAws_restJson1CorsHeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CorsMethodList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CorsOriginList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DomainNameConfiguration = (
  input: DomainNameConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiGatewayDomainName !== undefined &&
      input.ApiGatewayDomainName !== null && { apiGatewayDomainName: input.ApiGatewayDomainName }),
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { certificateArn: input.CertificateArn }),
    ...(input.CertificateName !== undefined &&
      input.CertificateName !== null && { certificateName: input.CertificateName }),
    ...(input.CertificateUploadDate !== undefined &&
      input.CertificateUploadDate !== null && {
        certificateUploadDate: input.CertificateUploadDate.toISOString().split(".")[0] + "Z",
      }),
    ...(input.DomainNameStatus !== undefined &&
      input.DomainNameStatus !== null && { domainNameStatus: input.DomainNameStatus }),
    ...(input.DomainNameStatusMessage !== undefined &&
      input.DomainNameStatusMessage !== null && { domainNameStatusMessage: input.DomainNameStatusMessage }),
    ...(input.EndpointType !== undefined && input.EndpointType !== null && { endpointType: input.EndpointType }),
    ...(input.HostedZoneId !== undefined && input.HostedZoneId !== null && { hostedZoneId: input.HostedZoneId }),
    ...(input.SecurityPolicy !== undefined &&
      input.SecurityPolicy !== null && { securityPolicy: input.SecurityPolicy }),
  };
};

const serializeAws_restJson1DomainNameConfigurations = (
  input: DomainNameConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};

const serializeAws_restJson1IdentitySourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1IntegrationParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1JWTConfiguration = (input: JWTConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Audience !== undefined &&
      input.Audience !== null && { audience: serializeAws_restJson1__listOf__string(input.Audience, context) }),
    ...(input.Issuer !== undefined && input.Issuer !== null && { issuer: input.Issuer }),
  };
};

const serializeAws_restJson1MutualTlsAuthenticationInput = (
  input: MutualTlsAuthenticationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TruststoreUri !== undefined && input.TruststoreUri !== null && { truststoreUri: input.TruststoreUri }),
    ...(input.TruststoreVersion !== undefined &&
      input.TruststoreVersion !== null && { truststoreVersion: input.TruststoreVersion }),
  };
};

const serializeAws_restJson1ParameterConstraints = (input: ParameterConstraints, context: __SerdeContext): any => {
  return {
    ...(input.Required !== undefined && input.Required !== null && { required: input.Required }),
  };
};

const serializeAws_restJson1RouteModels = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1RouteParameters = (
  input: { [key: string]: ParameterConstraints },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: ParameterConstraints }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ParameterConstraints(value, context),
    };
  }, {});
};

const serializeAws_restJson1RouteSettings = (input: RouteSettings, context: __SerdeContext): any => {
  return {
    ...(input.DataTraceEnabled !== undefined &&
      input.DataTraceEnabled !== null && { dataTraceEnabled: input.DataTraceEnabled }),
    ...(input.DetailedMetricsEnabled !== undefined &&
      input.DetailedMetricsEnabled !== null && { detailedMetricsEnabled: input.DetailedMetricsEnabled }),
    ...(input.LoggingLevel !== undefined && input.LoggingLevel !== null && { loggingLevel: input.LoggingLevel }),
    ...(input.ThrottlingBurstLimit !== undefined &&
      input.ThrottlingBurstLimit !== null && { throttlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit !== undefined &&
      input.ThrottlingRateLimit !== null && { throttlingRateLimit: input.ThrottlingRateLimit }),
  };
};

const serializeAws_restJson1RouteSettingsMap = (
  input: { [key: string]: RouteSettings },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: RouteSettings }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1RouteSettings(value, context),
    };
  }, {});
};

const serializeAws_restJson1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StageVariablesMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TemplateMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TlsConfigInput = (input: TlsConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.ServerNameToVerify !== undefined &&
      input.ServerNameToVerify !== null && { serverNameToVerify: input.ServerNameToVerify }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1__listOfApi = (output: any, context: __SerdeContext): Api[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Api(entry, context);
    });
};

const deserializeAws_restJson1__listOfApiMapping = (output: any, context: __SerdeContext): ApiMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApiMapping(entry, context);
    });
};

const deserializeAws_restJson1__listOfAuthorizer = (output: any, context: __SerdeContext): Authorizer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Authorizer(entry, context);
    });
};

const deserializeAws_restJson1__listOfDeployment = (output: any, context: __SerdeContext): Deployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
};

const deserializeAws_restJson1__listOfDomainName = (output: any, context: __SerdeContext): DomainName[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainName(entry, context);
    });
};

const deserializeAws_restJson1__listOfIntegration = (output: any, context: __SerdeContext): Integration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Integration(entry, context);
    });
};

const deserializeAws_restJson1__listOfIntegrationResponse = (
  output: any,
  context: __SerdeContext
): IntegrationResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntegrationResponse(entry, context);
    });
};

const deserializeAws_restJson1__listOfModel = (output: any, context: __SerdeContext): Model[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Model(entry, context);
    });
};

const deserializeAws_restJson1__listOfRoute = (output: any, context: __SerdeContext): Route[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Route(entry, context);
    });
};

const deserializeAws_restJson1__listOfRouteResponse = (output: any, context: __SerdeContext): RouteResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteResponse(entry, context);
    });
};

const deserializeAws_restJson1__listOfStage = (output: any, context: __SerdeContext): Stage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Stage(entry, context);
    });
};

const deserializeAws_restJson1__listOfVpcLink = (output: any, context: __SerdeContext): VpcLink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcLink(entry, context);
    });
};

const deserializeAws_restJson1AccessLogSettings = (output: any, context: __SerdeContext): AccessLogSettings => {
  return {
    DestinationArn:
      output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
    Format: output.format !== undefined && output.format !== null ? output.format : undefined,
  } as any;
};

const deserializeAws_restJson1Api = (output: any, context: __SerdeContext): Api => {
  return {
    ApiEndpoint: output.apiEndpoint !== undefined && output.apiEndpoint !== null ? output.apiEndpoint : undefined,
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ApiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    ApiKeySelectionExpression:
      output.apiKeySelectionExpression !== undefined && output.apiKeySelectionExpression !== null
        ? output.apiKeySelectionExpression
        : undefined,
    CorsConfiguration:
      output.corsConfiguration !== undefined && output.corsConfiguration !== null
        ? deserializeAws_restJson1Cors(output.corsConfiguration, context)
        : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    DisableExecuteApiEndpoint:
      output.disableExecuteApiEndpoint !== undefined && output.disableExecuteApiEndpoint !== null
        ? output.disableExecuteApiEndpoint
        : undefined,
    DisableSchemaValidation:
      output.disableSchemaValidation !== undefined && output.disableSchemaValidation !== null
        ? output.disableSchemaValidation
        : undefined,
    ImportInfo:
      output.importInfo !== undefined && output.importInfo !== null
        ? deserializeAws_restJson1__listOf__string(output.importInfo, context)
        : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    ProtocolType: output.protocolType !== undefined && output.protocolType !== null ? output.protocolType : undefined,
    RouteSelectionExpression:
      output.routeSelectionExpression !== undefined && output.routeSelectionExpression !== null
        ? output.routeSelectionExpression
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    Version: output.version !== undefined && output.version !== null ? output.version : undefined,
    Warnings:
      output.warnings !== undefined && output.warnings !== null
        ? deserializeAws_restJson1__listOf__string(output.warnings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApiMapping = (output: any, context: __SerdeContext): ApiMapping => {
  return {
    ApiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    ApiMappingId: output.apiMappingId !== undefined && output.apiMappingId !== null ? output.apiMappingId : undefined,
    ApiMappingKey:
      output.apiMappingKey !== undefined && output.apiMappingKey !== null ? output.apiMappingKey : undefined,
    Stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  } as any;
};

const deserializeAws_restJson1AuthorizationScopes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Authorizer = (output: any, context: __SerdeContext): Authorizer => {
  return {
    AuthorizerCredentialsArn:
      output.authorizerCredentialsArn !== undefined && output.authorizerCredentialsArn !== null
        ? output.authorizerCredentialsArn
        : undefined,
    AuthorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    AuthorizerPayloadFormatVersion:
      output.authorizerPayloadFormatVersion !== undefined && output.authorizerPayloadFormatVersion !== null
        ? output.authorizerPayloadFormatVersion
        : undefined,
    AuthorizerResultTtlInSeconds:
      output.authorizerResultTtlInSeconds !== undefined && output.authorizerResultTtlInSeconds !== null
        ? output.authorizerResultTtlInSeconds
        : undefined,
    AuthorizerType:
      output.authorizerType !== undefined && output.authorizerType !== null ? output.authorizerType : undefined,
    AuthorizerUri:
      output.authorizerUri !== undefined && output.authorizerUri !== null ? output.authorizerUri : undefined,
    EnableSimpleResponses:
      output.enableSimpleResponses !== undefined && output.enableSimpleResponses !== null
        ? output.enableSimpleResponses
        : undefined,
    IdentitySource:
      output.identitySource !== undefined && output.identitySource !== null
        ? deserializeAws_restJson1IdentitySourceList(output.identitySource, context)
        : undefined,
    IdentityValidationExpression:
      output.identityValidationExpression !== undefined && output.identityValidationExpression !== null
        ? output.identityValidationExpression
        : undefined,
    JwtConfiguration:
      output.jwtConfiguration !== undefined && output.jwtConfiguration !== null
        ? deserializeAws_restJson1JWTConfiguration(output.jwtConfiguration, context)
        : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1Cors = (output: any, context: __SerdeContext): Cors => {
  return {
    AllowCredentials:
      output.allowCredentials !== undefined && output.allowCredentials !== null ? output.allowCredentials : undefined,
    AllowHeaders:
      output.allowHeaders !== undefined && output.allowHeaders !== null
        ? deserializeAws_restJson1CorsHeaderList(output.allowHeaders, context)
        : undefined,
    AllowMethods:
      output.allowMethods !== undefined && output.allowMethods !== null
        ? deserializeAws_restJson1CorsMethodList(output.allowMethods, context)
        : undefined,
    AllowOrigins:
      output.allowOrigins !== undefined && output.allowOrigins !== null
        ? deserializeAws_restJson1CorsOriginList(output.allowOrigins, context)
        : undefined,
    ExposeHeaders:
      output.exposeHeaders !== undefined && output.exposeHeaders !== null
        ? deserializeAws_restJson1CorsHeaderList(output.exposeHeaders, context)
        : undefined,
    MaxAge: output.maxAge !== undefined && output.maxAge !== null ? output.maxAge : undefined,
  } as any;
};

const deserializeAws_restJson1CorsHeaderList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1CorsMethodList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1CorsOriginList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    AutoDeployed: output.autoDeployed !== undefined && output.autoDeployed !== null ? output.autoDeployed : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    DeploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    DeploymentStatus:
      output.deploymentStatus !== undefined && output.deploymentStatus !== null ? output.deploymentStatus : undefined,
    DeploymentStatusMessage:
      output.deploymentStatusMessage !== undefined && output.deploymentStatusMessage !== null
        ? output.deploymentStatusMessage
        : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
  } as any;
};

const deserializeAws_restJson1DomainName = (output: any, context: __SerdeContext): DomainName => {
  return {
    ApiMappingSelectionExpression:
      output.apiMappingSelectionExpression !== undefined && output.apiMappingSelectionExpression !== null
        ? output.apiMappingSelectionExpression
        : undefined,
    DomainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    DomainNameConfigurations:
      output.domainNameConfigurations !== undefined && output.domainNameConfigurations !== null
        ? deserializeAws_restJson1DomainNameConfigurations(output.domainNameConfigurations, context)
        : undefined,
    MutualTlsAuthentication:
      output.mutualTlsAuthentication !== undefined && output.mutualTlsAuthentication !== null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DomainNameConfiguration = (
  output: any,
  context: __SerdeContext
): DomainNameConfiguration => {
  return {
    ApiGatewayDomainName:
      output.apiGatewayDomainName !== undefined && output.apiGatewayDomainName !== null
        ? output.apiGatewayDomainName
        : undefined,
    CertificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    CertificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    CertificateUploadDate:
      output.certificateUploadDate !== undefined && output.certificateUploadDate !== null
        ? new Date(output.certificateUploadDate)
        : undefined,
    DomainNameStatus:
      output.domainNameStatus !== undefined && output.domainNameStatus !== null ? output.domainNameStatus : undefined,
    DomainNameStatusMessage:
      output.domainNameStatusMessage !== undefined && output.domainNameStatusMessage !== null
        ? output.domainNameStatusMessage
        : undefined,
    EndpointType: output.endpointType !== undefined && output.endpointType !== null ? output.endpointType : undefined,
    HostedZoneId: output.hostedZoneId !== undefined && output.hostedZoneId !== null ? output.hostedZoneId : undefined,
    SecurityPolicy:
      output.securityPolicy !== undefined && output.securityPolicy !== null ? output.securityPolicy : undefined,
  } as any;
};

const deserializeAws_restJson1DomainNameConfigurations = (
  output: any,
  context: __SerdeContext
): DomainNameConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};

const deserializeAws_restJson1IdentitySourceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Integration = (output: any, context: __SerdeContext): Integration => {
  return {
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ConnectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    ConnectionType:
      output.connectionType !== undefined && output.connectionType !== null ? output.connectionType : undefined,
    ContentHandlingStrategy:
      output.contentHandlingStrategy !== undefined && output.contentHandlingStrategy !== null
        ? output.contentHandlingStrategy
        : undefined,
    CredentialsArn:
      output.credentialsArn !== undefined && output.credentialsArn !== null ? output.credentialsArn : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    IntegrationId:
      output.integrationId !== undefined && output.integrationId !== null ? output.integrationId : undefined,
    IntegrationMethod:
      output.integrationMethod !== undefined && output.integrationMethod !== null
        ? output.integrationMethod
        : undefined,
    IntegrationResponseSelectionExpression:
      output.integrationResponseSelectionExpression !== undefined &&
      output.integrationResponseSelectionExpression !== null
        ? output.integrationResponseSelectionExpression
        : undefined,
    IntegrationSubtype:
      output.integrationSubtype !== undefined && output.integrationSubtype !== null
        ? output.integrationSubtype
        : undefined,
    IntegrationType:
      output.integrationType !== undefined && output.integrationType !== null ? output.integrationType : undefined,
    IntegrationUri:
      output.integrationUri !== undefined && output.integrationUri !== null ? output.integrationUri : undefined,
    PassthroughBehavior:
      output.passthroughBehavior !== undefined && output.passthroughBehavior !== null
        ? output.passthroughBehavior
        : undefined,
    PayloadFormatVersion:
      output.payloadFormatVersion !== undefined && output.payloadFormatVersion !== null
        ? output.payloadFormatVersion
        : undefined,
    RequestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1IntegrationParameters(output.requestParameters, context)
        : undefined,
    RequestTemplates:
      output.requestTemplates !== undefined && output.requestTemplates !== null
        ? deserializeAws_restJson1TemplateMap(output.requestTemplates, context)
        : undefined,
    TemplateSelectionExpression:
      output.templateSelectionExpression !== undefined && output.templateSelectionExpression !== null
        ? output.templateSelectionExpression
        : undefined,
    TimeoutInMillis:
      output.timeoutInMillis !== undefined && output.timeoutInMillis !== null ? output.timeoutInMillis : undefined,
    TlsConfig:
      output.tlsConfig !== undefined && output.tlsConfig !== null
        ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IntegrationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1IntegrationResponse = (output: any, context: __SerdeContext): IntegrationResponse => {
  return {
    ContentHandlingStrategy:
      output.contentHandlingStrategy !== undefined && output.contentHandlingStrategy !== null
        ? output.contentHandlingStrategy
        : undefined,
    IntegrationResponseId:
      output.integrationResponseId !== undefined && output.integrationResponseId !== null
        ? output.integrationResponseId
        : undefined,
    IntegrationResponseKey:
      output.integrationResponseKey !== undefined && output.integrationResponseKey !== null
        ? output.integrationResponseKey
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1IntegrationParameters(output.responseParameters, context)
        : undefined,
    ResponseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1TemplateMap(output.responseTemplates, context)
        : undefined,
    TemplateSelectionExpression:
      output.templateSelectionExpression !== undefined && output.templateSelectionExpression !== null
        ? output.templateSelectionExpression
        : undefined,
  } as any;
};

const deserializeAws_restJson1JWTConfiguration = (output: any, context: __SerdeContext): JWTConfiguration => {
  return {
    Audience:
      output.audience !== undefined && output.audience !== null
        ? deserializeAws_restJson1__listOf__string(output.audience, context)
        : undefined,
    Issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
  } as any;
};

const deserializeAws_restJson1Model = (output: any, context: __SerdeContext): Model => {
  return {
    ContentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    ModelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    Schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
  } as any;
};

const deserializeAws_restJson1MutualTlsAuthentication = (
  output: any,
  context: __SerdeContext
): MutualTlsAuthentication => {
  return {
    TruststoreUri:
      output.truststoreUri !== undefined && output.truststoreUri !== null ? output.truststoreUri : undefined,
    TruststoreVersion:
      output.truststoreVersion !== undefined && output.truststoreVersion !== null
        ? output.truststoreVersion
        : undefined,
    TruststoreWarnings:
      output.truststoreWarnings !== undefined && output.truststoreWarnings !== null
        ? deserializeAws_restJson1__listOf__string(output.truststoreWarnings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  return {
    Required: output.required !== undefined && output.required !== null ? output.required : undefined,
  } as any;
};

const deserializeAws_restJson1Route = (output: any, context: __SerdeContext): Route => {
  return {
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ApiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    AuthorizationScopes:
      output.authorizationScopes !== undefined && output.authorizationScopes !== null
        ? deserializeAws_restJson1AuthorizationScopes(output.authorizationScopes, context)
        : undefined,
    AuthorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
    AuthorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    ModelSelectionExpression:
      output.modelSelectionExpression !== undefined && output.modelSelectionExpression !== null
        ? output.modelSelectionExpression
        : undefined,
    OperationName:
      output.operationName !== undefined && output.operationName !== null ? output.operationName : undefined,
    RequestModels:
      output.requestModels !== undefined && output.requestModels !== null
        ? deserializeAws_restJson1RouteModels(output.requestModels, context)
        : undefined,
    RequestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1RouteParameters(output.requestParameters, context)
        : undefined,
    RouteId: output.routeId !== undefined && output.routeId !== null ? output.routeId : undefined,
    RouteKey: output.routeKey !== undefined && output.routeKey !== null ? output.routeKey : undefined,
    RouteResponseSelectionExpression:
      output.routeResponseSelectionExpression !== undefined && output.routeResponseSelectionExpression !== null
        ? output.routeResponseSelectionExpression
        : undefined,
    Target: output.target !== undefined && output.target !== null ? output.target : undefined,
  } as any;
};

const deserializeAws_restJson1RouteModels = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1RouteParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: ParameterConstraints } => {
  return Object.entries(output).reduce((acc: { [key: string]: ParameterConstraints }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ParameterConstraints(value, context),
    };
  }, {});
};

const deserializeAws_restJson1RouteResponse = (output: any, context: __SerdeContext): RouteResponse => {
  return {
    ModelSelectionExpression:
      output.modelSelectionExpression !== undefined && output.modelSelectionExpression !== null
        ? output.modelSelectionExpression
        : undefined,
    ResponseModels:
      output.responseModels !== undefined && output.responseModels !== null
        ? deserializeAws_restJson1RouteModels(output.responseModels, context)
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1RouteParameters(output.responseParameters, context)
        : undefined,
    RouteResponseId:
      output.routeResponseId !== undefined && output.routeResponseId !== null ? output.routeResponseId : undefined,
    RouteResponseKey:
      output.routeResponseKey !== undefined && output.routeResponseKey !== null ? output.routeResponseKey : undefined,
  } as any;
};

const deserializeAws_restJson1RouteSettings = (output: any, context: __SerdeContext): RouteSettings => {
  return {
    DataTraceEnabled:
      output.dataTraceEnabled !== undefined && output.dataTraceEnabled !== null ? output.dataTraceEnabled : undefined,
    DetailedMetricsEnabled:
      output.detailedMetricsEnabled !== undefined && output.detailedMetricsEnabled !== null
        ? output.detailedMetricsEnabled
        : undefined,
    LoggingLevel: output.loggingLevel !== undefined && output.loggingLevel !== null ? output.loggingLevel : undefined,
    ThrottlingBurstLimit:
      output.throttlingBurstLimit !== undefined && output.throttlingBurstLimit !== null
        ? output.throttlingBurstLimit
        : undefined,
    ThrottlingRateLimit:
      output.throttlingRateLimit !== undefined && output.throttlingRateLimit !== null
        ? output.throttlingRateLimit
        : undefined,
  } as any;
};

const deserializeAws_restJson1RouteSettingsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: RouteSettings } => {
  return Object.entries(output).reduce((acc: { [key: string]: RouteSettings }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1RouteSettings(value, context),
    };
  }, {});
};

const deserializeAws_restJson1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Stage = (output: any, context: __SerdeContext): Stage => {
  return {
    AccessLogSettings:
      output.accessLogSettings !== undefined && output.accessLogSettings !== null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    AutoDeploy: output.autoDeploy !== undefined && output.autoDeploy !== null ? output.autoDeploy : undefined,
    ClientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    DefaultRouteSettings:
      output.defaultRouteSettings !== undefined && output.defaultRouteSettings !== null
        ? deserializeAws_restJson1RouteSettings(output.defaultRouteSettings, context)
        : undefined,
    DeploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    LastDeploymentStatusMessage:
      output.lastDeploymentStatusMessage !== undefined && output.lastDeploymentStatusMessage !== null
        ? output.lastDeploymentStatusMessage
        : undefined,
    LastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(output.lastUpdatedDate)
        : undefined,
    RouteSettings:
      output.routeSettings !== undefined && output.routeSettings !== null
        ? deserializeAws_restJson1RouteSettingsMap(output.routeSettings, context)
        : undefined,
    StageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    StageVariables:
      output.stageVariables !== undefined && output.stageVariables !== null
        ? deserializeAws_restJson1StageVariablesMap(output.stageVariables, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StageVariablesMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TemplateMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TlsConfig = (output: any, context: __SerdeContext): TlsConfig => {
  return {
    ServerNameToVerify:
      output.serverNameToVerify !== undefined && output.serverNameToVerify !== null
        ? output.serverNameToVerify
        : undefined,
  } as any;
};

const deserializeAws_restJson1VpcLink = (output: any, context: __SerdeContext): VpcLink => {
  return {
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    SecurityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    SubnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1SubnetIdList(output.subnetIds, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    VpcLinkId: output.vpcLinkId !== undefined && output.vpcLinkId !== null ? output.vpcLinkId : undefined,
    VpcLinkStatus:
      output.vpcLinkStatus !== undefined && output.vpcLinkStatus !== null ? output.vpcLinkStatus : undefined,
    VpcLinkStatusMessage:
      output.vpcLinkStatusMessage !== undefined && output.vpcLinkStatusMessage !== null
        ? output.vpcLinkStatusMessage
        : undefined,
    VpcLinkVersion:
      output.vpcLinkVersion !== undefined && output.vpcLinkVersion !== null ? output.vpcLinkVersion : undefined,
  } as any;
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
