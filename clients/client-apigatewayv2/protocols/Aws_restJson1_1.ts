import {
  CreateApiCommandInput,
  CreateApiCommandOutput
} from "../commands/CreateApiCommand";
import {
  CreateApiMappingCommandInput,
  CreateApiMappingCommandOutput
} from "../commands/CreateApiMappingCommand";
import {
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput
} from "../commands/CreateAuthorizerCommand";
import {
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput
} from "../commands/CreateDeploymentCommand";
import {
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput
} from "../commands/CreateDomainNameCommand";
import {
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput
} from "../commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput
} from "../commands/CreateIntegrationResponseCommand";
import {
  CreateModelCommandInput,
  CreateModelCommandOutput
} from "../commands/CreateModelCommand";
import {
  CreateRouteCommandInput,
  CreateRouteCommandOutput
} from "../commands/CreateRouteCommand";
import {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput
} from "../commands/CreateRouteResponseCommand";
import {
  CreateStageCommandInput,
  CreateStageCommandOutput
} from "../commands/CreateStageCommand";
import {
  DeleteApiCommandInput,
  DeleteApiCommandOutput
} from "../commands/DeleteApiCommand";
import {
  DeleteApiMappingCommandInput,
  DeleteApiMappingCommandOutput
} from "../commands/DeleteApiMappingCommand";
import {
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput
} from "../commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput
} from "../commands/DeleteCorsConfigurationCommand";
import {
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput
} from "../commands/DeleteDeploymentCommand";
import {
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput
} from "../commands/DeleteDomainNameCommand";
import {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput
} from "../commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput
} from "../commands/DeleteIntegrationResponseCommand";
import {
  DeleteModelCommandInput,
  DeleteModelCommandOutput
} from "../commands/DeleteModelCommand";
import {
  DeleteRouteCommandInput,
  DeleteRouteCommandOutput
} from "../commands/DeleteRouteCommand";
import {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput
} from "../commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput
} from "../commands/DeleteRouteSettingsCommand";
import {
  DeleteStageCommandInput,
  DeleteStageCommandOutput
} from "../commands/DeleteStageCommand";
import {
  GetApiCommandInput,
  GetApiCommandOutput
} from "../commands/GetApiCommand";
import {
  GetApiMappingCommandInput,
  GetApiMappingCommandOutput
} from "../commands/GetApiMappingCommand";
import {
  GetApiMappingsCommandInput,
  GetApiMappingsCommandOutput
} from "../commands/GetApiMappingsCommand";
import {
  GetApisCommandInput,
  GetApisCommandOutput
} from "../commands/GetApisCommand";
import {
  GetAuthorizerCommandInput,
  GetAuthorizerCommandOutput
} from "../commands/GetAuthorizerCommand";
import {
  GetAuthorizersCommandInput,
  GetAuthorizersCommandOutput
} from "../commands/GetAuthorizersCommand";
import {
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput
} from "../commands/GetDeploymentCommand";
import {
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput
} from "../commands/GetDeploymentsCommand";
import {
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput
} from "../commands/GetDomainNameCommand";
import {
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput
} from "../commands/GetDomainNamesCommand";
import {
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput
} from "../commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput
} from "../commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput
} from "../commands/GetIntegrationResponsesCommand";
import {
  GetIntegrationsCommandInput,
  GetIntegrationsCommandOutput
} from "../commands/GetIntegrationsCommand";
import {
  GetModelCommandInput,
  GetModelCommandOutput
} from "../commands/GetModelCommand";
import {
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput
} from "../commands/GetModelTemplateCommand";
import {
  GetModelsCommandInput,
  GetModelsCommandOutput
} from "../commands/GetModelsCommand";
import {
  GetRouteCommandInput,
  GetRouteCommandOutput
} from "../commands/GetRouteCommand";
import {
  GetRouteResponseCommandInput,
  GetRouteResponseCommandOutput
} from "../commands/GetRouteResponseCommand";
import {
  GetRouteResponsesCommandInput,
  GetRouteResponsesCommandOutput
} from "../commands/GetRouteResponsesCommand";
import {
  GetRoutesCommandInput,
  GetRoutesCommandOutput
} from "../commands/GetRoutesCommand";
import {
  GetStageCommandInput,
  GetStageCommandOutput
} from "../commands/GetStageCommand";
import {
  GetStagesCommandInput,
  GetStagesCommandOutput
} from "../commands/GetStagesCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "../commands/GetTagsCommand";
import {
  ImportApiCommandInput,
  ImportApiCommandOutput
} from "../commands/ImportApiCommand";
import {
  ReimportApiCommandInput,
  ReimportApiCommandOutput
} from "../commands/ReimportApiCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateApiCommandInput,
  UpdateApiCommandOutput
} from "../commands/UpdateApiCommand";
import {
  UpdateApiMappingCommandInput,
  UpdateApiMappingCommandOutput
} from "../commands/UpdateApiMappingCommand";
import {
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput
} from "../commands/UpdateAuthorizerCommand";
import {
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput
} from "../commands/UpdateDeploymentCommand";
import {
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput
} from "../commands/UpdateDomainNameCommand";
import {
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput
} from "../commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput
} from "../commands/UpdateIntegrationResponseCommand";
import {
  UpdateModelCommandInput,
  UpdateModelCommandOutput
} from "../commands/UpdateModelCommand";
import {
  UpdateRouteCommandInput,
  UpdateRouteCommandOutput
} from "../commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput
} from "../commands/UpdateRouteResponseCommand";
import {
  UpdateStageCommandInput,
  UpdateStageCommandOutput
} from "../commands/UpdateStageCommand";
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
  NotFoundException,
  ParameterConstraints,
  Route,
  RouteResponse,
  RouteSettings,
  Stage,
  TooManyRequestsException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateApiCommand(
  input: CreateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ApiKeySelectionExpression !== undefined) {
    bodyParams["apiKeySelectionExpression"] = input.ApiKeySelectionExpression;
  }
  if (input.CorsConfiguration !== undefined) {
    bodyParams["corsConfiguration"] = serializeAws_restJson1_1Cors(
      input.CorsConfiguration,
      context
    );
  }
  if (input.CredentialsArn !== undefined) {
    bodyParams["credentialsArn"] = input.CredentialsArn;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.DisableSchemaValidation !== undefined) {
    bodyParams["disableSchemaValidation"] = input.DisableSchemaValidation;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.ProtocolType !== undefined) {
    bodyParams["protocolType"] = input.ProtocolType;
  }
  if (input.RouteKey !== undefined) {
    bodyParams["routeKey"] = input.RouteKey;
  }
  if (input.RouteSelectionExpression !== undefined) {
    bodyParams["routeSelectionExpression"] = input.RouteSelectionExpression;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.Target !== undefined) {
    bodyParams["target"] = input.Target;
  }
  if (input.Version !== undefined) {
    bodyParams["version"] = input.Version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateApiMappingCommand(
  input: CreateApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ApiId !== undefined) {
    bodyParams["apiId"] = input.ApiId;
  }
  if (input.ApiMappingKey !== undefined) {
    bodyParams["apiMappingKey"] = input.ApiMappingKey;
  }
  if (input.Stage !== undefined) {
    bodyParams["stage"] = input.Stage;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateAuthorizerCommand(
  input: CreateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AuthorizerCredentialsArn !== undefined) {
    bodyParams["authorizerCredentialsArn"] = input.AuthorizerCredentialsArn;
  }
  if (input.AuthorizerResultTtlInSeconds !== undefined) {
    bodyParams["authorizerResultTtlInSeconds"] =
      input.AuthorizerResultTtlInSeconds;
  }
  if (input.AuthorizerType !== undefined) {
    bodyParams["authorizerType"] = input.AuthorizerType;
  }
  if (input.AuthorizerUri !== undefined) {
    bodyParams["authorizerUri"] = input.AuthorizerUri;
  }
  if (input.IdentitySource !== undefined) {
    bodyParams["identitySource"] = serializeAws_restJson1_1IdentitySourceList(
      input.IdentitySource,
      context
    );
  }
  if (input.IdentityValidationExpression !== undefined) {
    bodyParams["identityValidationExpression"] =
      input.IdentityValidationExpression;
  }
  if (input.JwtConfiguration !== undefined) {
    bodyParams["jwtConfiguration"] = serializeAws_restJson1_1JWTConfiguration(
      input.JwtConfiguration,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDeploymentCommand(
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/deployments";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.StageName !== undefined) {
    bodyParams["stageName"] = input.StageName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDomainNameCommand(
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/domainnames";
  let body: any = {};
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["domainName"] = input.DomainName;
  }
  if (input.DomainNameConfigurations !== undefined) {
    bodyParams[
      "domainNameConfigurations"
    ] = serializeAws_restJson1_1DomainNameConfigurations(
      input.DomainNameConfigurations,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateIntegrationCommand(
  input: CreateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/integrations";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ConnectionId !== undefined) {
    bodyParams["connectionId"] = input.ConnectionId;
  }
  if (input.ConnectionType !== undefined) {
    bodyParams["connectionType"] = input.ConnectionType;
  }
  if (input.ContentHandlingStrategy !== undefined) {
    bodyParams["contentHandlingStrategy"] = input.ContentHandlingStrategy;
  }
  if (input.CredentialsArn !== undefined) {
    bodyParams["credentialsArn"] = input.CredentialsArn;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.IntegrationMethod !== undefined) {
    bodyParams["integrationMethod"] = input.IntegrationMethod;
  }
  if (input.IntegrationType !== undefined) {
    bodyParams["integrationType"] = input.IntegrationType;
  }
  if (input.IntegrationUri !== undefined) {
    bodyParams["integrationUri"] = input.IntegrationUri;
  }
  if (input.PassthroughBehavior !== undefined) {
    bodyParams["passthroughBehavior"] = input.PassthroughBehavior;
  }
  if (input.PayloadFormatVersion !== undefined) {
    bodyParams["payloadFormatVersion"] = input.PayloadFormatVersion;
  }
  if (input.RequestParameters !== undefined) {
    bodyParams[
      "requestParameters"
    ] = serializeAws_restJson1_1IntegrationParameters(
      input.RequestParameters,
      context
    );
  }
  if (input.RequestTemplates !== undefined) {
    bodyParams["requestTemplates"] = serializeAws_restJson1_1TemplateMap(
      input.RequestTemplates,
      context
    );
  }
  if (input.TemplateSelectionExpression !== undefined) {
    bodyParams["templateSelectionExpression"] =
      input.TemplateSelectionExpression;
  }
  if (input.TimeoutInMillis !== undefined) {
    bodyParams["timeoutInMillis"] = input.TimeoutInMillis;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateIntegrationResponseCommand(
  input: CreateIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContentHandlingStrategy !== undefined) {
    bodyParams["contentHandlingStrategy"] = input.ContentHandlingStrategy;
  }
  if (input.IntegrationResponseKey !== undefined) {
    bodyParams["integrationResponseKey"] = input.IntegrationResponseKey;
  }
  if (input.ResponseParameters !== undefined) {
    bodyParams[
      "responseParameters"
    ] = serializeAws_restJson1_1IntegrationParameters(
      input.ResponseParameters,
      context
    );
  }
  if (input.ResponseTemplates !== undefined) {
    bodyParams["responseTemplates"] = serializeAws_restJson1_1TemplateMap(
      input.ResponseTemplates,
      context
    );
  }
  if (input.TemplateSelectionExpression !== undefined) {
    bodyParams["templateSelectionExpression"] =
      input.TemplateSelectionExpression;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateModelCommand(
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/models";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContentType !== undefined) {
    bodyParams["contentType"] = input.ContentType;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Schema !== undefined) {
    bodyParams["schema"] = input.Schema;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateRouteCommand(
  input: CreateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/routes";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ApiKeyRequired !== undefined) {
    bodyParams["apiKeyRequired"] = input.ApiKeyRequired;
  }
  if (input.AuthorizationScopes !== undefined) {
    bodyParams[
      "authorizationScopes"
    ] = serializeAws_restJson1_1AuthorizationScopes(
      input.AuthorizationScopes,
      context
    );
  }
  if (input.AuthorizationType !== undefined) {
    bodyParams["authorizationType"] = input.AuthorizationType;
  }
  if (input.AuthorizerId !== undefined) {
    bodyParams["authorizerId"] = input.AuthorizerId;
  }
  if (input.ModelSelectionExpression !== undefined) {
    bodyParams["modelSelectionExpression"] = input.ModelSelectionExpression;
  }
  if (input.OperationName !== undefined) {
    bodyParams["operationName"] = input.OperationName;
  }
  if (input.RequestModels !== undefined) {
    bodyParams["requestModels"] = serializeAws_restJson1_1RouteModels(
      input.RequestModels,
      context
    );
  }
  if (input.RequestParameters !== undefined) {
    bodyParams["requestParameters"] = serializeAws_restJson1_1RouteParameters(
      input.RequestParameters,
      context
    );
  }
  if (input.RouteKey !== undefined) {
    bodyParams["routeKey"] = input.RouteKey;
  }
  if (input.RouteResponseSelectionExpression !== undefined) {
    bodyParams["routeResponseSelectionExpression"] =
      input.RouteResponseSelectionExpression;
  }
  if (input.Target !== undefined) {
    bodyParams["target"] = input.Target;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateRouteResponseCommand(
  input: CreateRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ModelSelectionExpression !== undefined) {
    bodyParams["modelSelectionExpression"] = input.ModelSelectionExpression;
  }
  if (input.ResponseModels !== undefined) {
    bodyParams["responseModels"] = serializeAws_restJson1_1RouteModels(
      input.ResponseModels,
      context
    );
  }
  if (input.ResponseParameters !== undefined) {
    bodyParams["responseParameters"] = serializeAws_restJson1_1RouteParameters(
      input.ResponseParameters,
      context
    );
  }
  if (input.RouteResponseKey !== undefined) {
    bodyParams["routeResponseKey"] = input.RouteResponseKey;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateStageCommand(
  input: CreateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/stages";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccessLogSettings !== undefined) {
    bodyParams["accessLogSettings"] = serializeAws_restJson1_1AccessLogSettings(
      input.AccessLogSettings,
      context
    );
  }
  if (input.AutoDeploy !== undefined) {
    bodyParams["autoDeploy"] = input.AutoDeploy;
  }
  if (input.ClientCertificateId !== undefined) {
    bodyParams["clientCertificateId"] = input.ClientCertificateId;
  }
  if (input.DefaultRouteSettings !== undefined) {
    bodyParams["defaultRouteSettings"] = serializeAws_restJson1_1RouteSettings(
      input.DefaultRouteSettings,
      context
    );
  }
  if (input.DeploymentId !== undefined) {
    bodyParams["deploymentId"] = input.DeploymentId;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.RouteSettings !== undefined) {
    bodyParams["routeSettings"] = serializeAws_restJson1_1RouteSettingsMap(
      input.RouteSettings,
      context
    );
  }
  if (input.StageName !== undefined) {
    bodyParams["stageName"] = input.StageName;
  }
  if (input.StageVariables !== undefined) {
    bodyParams["stageVariables"] = serializeAws_restJson1_1StageVariablesMap(
      input.StageVariables,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteApiCommand(
  input: DeleteApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteApiMappingCommand(
  input: DeleteApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue: any = input.ApiMappingId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApiMappingId."
      );
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteAuthorizerCommand(
  input: DeleteAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue: any = input.AuthorizerId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: AuthorizerId."
      );
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteCorsConfigurationCommand(
  input: DeleteCorsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/cors";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDeploymentCommand(
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue: any = input.DeploymentId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentId."
      );
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDomainNameCommand(
  input: DeleteDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteIntegrationCommand(
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteIntegrationResponseCommand(
  input: DeleteIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue: any = input.IntegrationResponseId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationResponseId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationResponseId}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: IntegrationResponseId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteModelCommand(
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: any = input.ModelId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteRouteCommand(
  input: DeleteRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteRouteResponseCommand(
  input: DeleteRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue: any = input.RouteResponseId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RouteResponseId."
      );
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteRouteSettingsCommand(
  input: DeleteRouteSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteKey !== undefined) {
    const labelValue: any = input.RouteKey.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteKey.");
    }
    resolvedPath = resolvedPath.replace("{RouteKey}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteKey.");
  }
  if (input.StageName !== undefined) {
    const labelValue: any = input.StageName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteStageCommand(
  input: DeleteStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: any = input.StageName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetApiCommand(
  input: GetApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetApiMappingCommand(
  input: GetApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue: any = input.ApiMappingId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApiMappingId."
      );
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetApiMappingsCommand(
  input: GetApiMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetApisCommand(
  input: GetApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetAuthorizerCommand(
  input: GetAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue: any = input.AuthorizerId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: AuthorizerId."
      );
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetAuthorizersCommand(
  input: GetAuthorizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetDeploymentCommand(
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue: any = input.DeploymentId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentId."
      );
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDeploymentsCommand(
  input: GetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/deployments";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetDomainNameCommand(
  input: GetDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDomainNamesCommand(
  input: GetDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/domainnames";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetIntegrationCommand(
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetIntegrationResponseCommand(
  input: GetIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue: any = input.IntegrationResponseId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationResponseId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationResponseId}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: IntegrationResponseId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetIntegrationResponsesCommand(
  input: GetIntegrationResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetIntegrationsCommand(
  input: GetIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/integrations";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetModelCommand(
  input: GetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: any = input.ModelId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetModelTemplateCommand(
  input: GetModelTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}/template";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: any = input.ModelId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetModelsCommand(
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/models";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetRouteCommand(
  input: GetRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetRouteResponseCommand(
  input: GetRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue: any = input.RouteResponseId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RouteResponseId."
      );
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetRouteResponsesCommand(
  input: GetRouteResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetRoutesCommand(
  input: GetRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/routes";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetStageCommand(
  input: GetStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: any = input.StageName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetStagesCommand(
  input: GetStagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/apis/{ApiId}/stages";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetTagsCommand(
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ImportApiCommand(
  input: ImportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis";
  const query: any = {};
  if (input.Basepath !== undefined) {
    query["basepath"] = input.Basepath.toString();
  }
  if (input.FailOnWarnings !== undefined) {
    query["failOnWarnings"] = input.FailOnWarnings.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Body !== undefined) {
    bodyParams["body"] = input.Body;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1ReimportApiCommand(
  input: ReimportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query: any = {};
  if (input.Basepath !== undefined) {
    query["basepath"] = input.Basepath.toString();
  }
  if (input.FailOnWarnings !== undefined) {
    query["failOnWarnings"] = input.FailOnWarnings.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Body !== undefined) {
    bodyParams["body"] = input.Body;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateApiCommand(
  input: UpdateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ApiKeySelectionExpression !== undefined) {
    bodyParams["apiKeySelectionExpression"] = input.ApiKeySelectionExpression;
  }
  if (input.CorsConfiguration !== undefined) {
    bodyParams["corsConfiguration"] = serializeAws_restJson1_1Cors(
      input.CorsConfiguration,
      context
    );
  }
  if (input.CredentialsArn !== undefined) {
    bodyParams["credentialsArn"] = input.CredentialsArn;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.DisableSchemaValidation !== undefined) {
    bodyParams["disableSchemaValidation"] = input.DisableSchemaValidation;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RouteKey !== undefined) {
    bodyParams["routeKey"] = input.RouteKey;
  }
  if (input.RouteSelectionExpression !== undefined) {
    bodyParams["routeSelectionExpression"] = input.RouteSelectionExpression;
  }
  if (input.Target !== undefined) {
    bodyParams["target"] = input.Target;
  }
  if (input.Version !== undefined) {
    bodyParams["version"] = input.Version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateApiMappingCommand(
  input: UpdateApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue: any = input.ApiMappingId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApiMappingId."
      );
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ApiId !== undefined) {
    bodyParams["apiId"] = input.ApiId;
  }
  if (input.ApiMappingKey !== undefined) {
    bodyParams["apiMappingKey"] = input.ApiMappingKey;
  }
  if (input.Stage !== undefined) {
    bodyParams["stage"] = input.Stage;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateAuthorizerCommand(
  input: UpdateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue: any = input.AuthorizerId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: AuthorizerId."
      );
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AuthorizerCredentialsArn !== undefined) {
    bodyParams["authorizerCredentialsArn"] = input.AuthorizerCredentialsArn;
  }
  if (input.AuthorizerResultTtlInSeconds !== undefined) {
    bodyParams["authorizerResultTtlInSeconds"] =
      input.AuthorizerResultTtlInSeconds;
  }
  if (input.AuthorizerType !== undefined) {
    bodyParams["authorizerType"] = input.AuthorizerType;
  }
  if (input.AuthorizerUri !== undefined) {
    bodyParams["authorizerUri"] = input.AuthorizerUri;
  }
  if (input.IdentitySource !== undefined) {
    bodyParams["identitySource"] = serializeAws_restJson1_1IdentitySourceList(
      input.IdentitySource,
      context
    );
  }
  if (input.IdentityValidationExpression !== undefined) {
    bodyParams["identityValidationExpression"] =
      input.IdentityValidationExpression;
  }
  if (input.JwtConfiguration !== undefined) {
    bodyParams["jwtConfiguration"] = serializeAws_restJson1_1JWTConfiguration(
      input.JwtConfiguration,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDeploymentCommand(
  input: UpdateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue: any = input.DeploymentId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentId."
      );
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDomainNameCommand(
  input: UpdateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: any = input.DomainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.DomainNameConfigurations !== undefined) {
    bodyParams[
      "domainNameConfigurations"
    ] = serializeAws_restJson1_1DomainNameConfigurations(
      input.DomainNameConfigurations,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateIntegrationCommand(
  input: UpdateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ConnectionId !== undefined) {
    bodyParams["connectionId"] = input.ConnectionId;
  }
  if (input.ConnectionType !== undefined) {
    bodyParams["connectionType"] = input.ConnectionType;
  }
  if (input.ContentHandlingStrategy !== undefined) {
    bodyParams["contentHandlingStrategy"] = input.ContentHandlingStrategy;
  }
  if (input.CredentialsArn !== undefined) {
    bodyParams["credentialsArn"] = input.CredentialsArn;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.IntegrationMethod !== undefined) {
    bodyParams["integrationMethod"] = input.IntegrationMethod;
  }
  if (input.IntegrationType !== undefined) {
    bodyParams["integrationType"] = input.IntegrationType;
  }
  if (input.IntegrationUri !== undefined) {
    bodyParams["integrationUri"] = input.IntegrationUri;
  }
  if (input.PassthroughBehavior !== undefined) {
    bodyParams["passthroughBehavior"] = input.PassthroughBehavior;
  }
  if (input.PayloadFormatVersion !== undefined) {
    bodyParams["payloadFormatVersion"] = input.PayloadFormatVersion;
  }
  if (input.RequestParameters !== undefined) {
    bodyParams[
      "requestParameters"
    ] = serializeAws_restJson1_1IntegrationParameters(
      input.RequestParameters,
      context
    );
  }
  if (input.RequestTemplates !== undefined) {
    bodyParams["requestTemplates"] = serializeAws_restJson1_1TemplateMap(
      input.RequestTemplates,
      context
    );
  }
  if (input.TemplateSelectionExpression !== undefined) {
    bodyParams["templateSelectionExpression"] =
      input.TemplateSelectionExpression;
  }
  if (input.TimeoutInMillis !== undefined) {
    bodyParams["timeoutInMillis"] = input.TimeoutInMillis;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateIntegrationResponseCommand(
  input: UpdateIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue: any = input.IntegrationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue: any = input.IntegrationResponseId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IntegrationResponseId."
      );
    }
    resolvedPath = resolvedPath.replace("{IntegrationResponseId}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: IntegrationResponseId."
    );
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContentHandlingStrategy !== undefined) {
    bodyParams["contentHandlingStrategy"] = input.ContentHandlingStrategy;
  }
  if (input.IntegrationResponseKey !== undefined) {
    bodyParams["integrationResponseKey"] = input.IntegrationResponseKey;
  }
  if (input.ResponseParameters !== undefined) {
    bodyParams[
      "responseParameters"
    ] = serializeAws_restJson1_1IntegrationParameters(
      input.ResponseParameters,
      context
    );
  }
  if (input.ResponseTemplates !== undefined) {
    bodyParams["responseTemplates"] = serializeAws_restJson1_1TemplateMap(
      input.ResponseTemplates,
      context
    );
  }
  if (input.TemplateSelectionExpression !== undefined) {
    bodyParams["templateSelectionExpression"] =
      input.TemplateSelectionExpression;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateModelCommand(
  input: UpdateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue: any = input.ModelId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContentType !== undefined) {
    bodyParams["contentType"] = input.ContentType;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Schema !== undefined) {
    bodyParams["schema"] = input.Schema;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateRouteCommand(
  input: UpdateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ApiKeyRequired !== undefined) {
    bodyParams["apiKeyRequired"] = input.ApiKeyRequired;
  }
  if (input.AuthorizationScopes !== undefined) {
    bodyParams[
      "authorizationScopes"
    ] = serializeAws_restJson1_1AuthorizationScopes(
      input.AuthorizationScopes,
      context
    );
  }
  if (input.AuthorizationType !== undefined) {
    bodyParams["authorizationType"] = input.AuthorizationType;
  }
  if (input.AuthorizerId !== undefined) {
    bodyParams["authorizerId"] = input.AuthorizerId;
  }
  if (input.ModelSelectionExpression !== undefined) {
    bodyParams["modelSelectionExpression"] = input.ModelSelectionExpression;
  }
  if (input.OperationName !== undefined) {
    bodyParams["operationName"] = input.OperationName;
  }
  if (input.RequestModels !== undefined) {
    bodyParams["requestModels"] = serializeAws_restJson1_1RouteModels(
      input.RequestModels,
      context
    );
  }
  if (input.RequestParameters !== undefined) {
    bodyParams["requestParameters"] = serializeAws_restJson1_1RouteParameters(
      input.RequestParameters,
      context
    );
  }
  if (input.RouteKey !== undefined) {
    bodyParams["routeKey"] = input.RouteKey;
  }
  if (input.RouteResponseSelectionExpression !== undefined) {
    bodyParams["routeResponseSelectionExpression"] =
      input.RouteResponseSelectionExpression;
  }
  if (input.Target !== undefined) {
    bodyParams["target"] = input.Target;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateRouteResponseCommand(
  input: UpdateRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue: any = input.RouteId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue: any = input.RouteResponseId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RouteResponseId."
      );
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ModelSelectionExpression !== undefined) {
    bodyParams["modelSelectionExpression"] = input.ModelSelectionExpression;
  }
  if (input.ResponseModels !== undefined) {
    bodyParams["responseModels"] = serializeAws_restJson1_1RouteModels(
      input.ResponseModels,
      context
    );
  }
  if (input.ResponseParameters !== undefined) {
    bodyParams["responseParameters"] = serializeAws_restJson1_1RouteParameters(
      input.ResponseParameters,
      context
    );
  }
  if (input.RouteResponseKey !== undefined) {
    bodyParams["routeResponseKey"] = input.RouteResponseKey;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateStageCommand(
  input: UpdateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue: any = input.ApiId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue: any = input.StageName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccessLogSettings !== undefined) {
    bodyParams["accessLogSettings"] = serializeAws_restJson1_1AccessLogSettings(
      input.AccessLogSettings,
      context
    );
  }
  if (input.AutoDeploy !== undefined) {
    bodyParams["autoDeploy"] = input.AutoDeploy;
  }
  if (input.ClientCertificateId !== undefined) {
    bodyParams["clientCertificateId"] = input.ClientCertificateId;
  }
  if (input.DefaultRouteSettings !== undefined) {
    bodyParams["defaultRouteSettings"] = serializeAws_restJson1_1RouteSettings(
      input.DefaultRouteSettings,
      context
    );
  }
  if (input.DeploymentId !== undefined) {
    bodyParams["deploymentId"] = input.DeploymentId;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.RouteSettings !== undefined) {
    bodyParams["routeSettings"] = serializeAws_restJson1_1RouteSettingsMap(
      input.RouteSettings,
      context
    );
  }
  if (input.StageVariables !== undefined) {
    bodyParams["stageVariables"] = serializeAws_restJson1_1StageVariablesMap(
      input.StageVariables,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApiCommandError(output, context);
  }
  const contents: CreateApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApiResponse",
    ApiEndpoint: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined) {
    contents.CorsConfiguration = deserializeAws_restJson1_1Cors(
      data.corsConfiguration,
      context
    );
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.disableSchemaValidation !== undefined) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined) {
    contents.ImportInfo = deserializeAws_restJson1_1__listOf__string(
      data.importInfo,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.version !== undefined) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined) {
    contents.Warnings = deserializeAws_restJson1_1__listOf__string(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateApiMappingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApiMappingCommandError(
      output,
      context
    );
  }
  const contents: CreateApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApiMappingResponse",
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApiMappingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateAuthorizerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateAuthorizerCommandError(
      output,
      context
    );
  }
  const contents: CreateAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAuthorizerResponse",
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerResultTtlInSeconds !== undefined) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.identitySource !== undefined) {
    contents.IdentitySource = deserializeAws_restJson1_1IdentitySourceList(
      data.identitySource,
      context
    );
  }
  if (data.identityValidationExpression !== undefined) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined) {
    contents.JwtConfiguration = deserializeAws_restJson1_1JWTConfiguration(
      data.jwtConfiguration,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateAuthorizerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDeploymentCommandError(
      output,
      context
    );
  }
  const contents: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeploymentResponse",
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateDomainNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDomainNameCommandError(
      output,
      context
    );
  }
  const contents: CreateDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainNameResponse",
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined) {
    contents.DomainNameConfigurations = deserializeAws_restJson1_1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDomainNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.apigatewayv2#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateIntegrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateIntegrationCommandError(
      output,
      context
    );
  }
  const contents: CreateIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIntegrationResult",
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (data.integrationResponseSelectionExpression !== undefined) {
    contents.IntegrationResponseSelectionExpression =
      data.integrationResponseSelectionExpression;
  }
  if (data.integrationType !== undefined) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1IntegrationParameters(
      data.requestParameters,
      context
    );
  }
  if (data.requestTemplates !== undefined) {
    contents.RequestTemplates = deserializeAws_restJson1_1TemplateMap(
      data.requestTemplates,
      context
    );
  }
  if (data.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateIntegrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateIntegrationResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateIntegrationResponseCommandError(
      output,
      context
    );
  }
  const contents: CreateIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIntegrationResponseResponse",
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1IntegrationParameters(
      data.responseParameters,
      context
    );
  }
  if (data.responseTemplates !== undefined) {
    contents.ResponseTemplates = deserializeAws_restJson1_1TemplateMap(
      data.responseTemplates,
      context
    );
  }
  if (data.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateIntegrationResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateModelCommandError(output, context);
  }
  const contents: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateModelResponse",
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentType !== undefined) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRouteCommandError(output, context);
  }
  const contents: CreateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRouteResult",
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
    Target: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined) {
    contents.AuthorizationScopes = deserializeAws_restJson1_1AuthorizationScopes(
      data.authorizationScopes,
      context
    );
  }
  if (data.authorizationType !== undefined) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined) {
    contents.RequestModels = deserializeAws_restJson1_1RouteModels(
      data.requestModels,
      context
    );
  }
  if (data.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1RouteParameters(
      data.requestParameters,
      context
    );
  }
  if (data.routeId !== undefined) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined) {
    contents.RouteResponseSelectionExpression =
      data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateRouteResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRouteResponseCommandError(
      output,
      context
    );
  }
  const contents: CreateRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRouteResponseResponse",
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined) {
    contents.ResponseModels = deserializeAws_restJson1_1RouteModels(
      data.responseModels,
      context
    );
  }
  if (data.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1RouteParameters(
      data.responseParameters,
      context
    );
  }
  if (data.routeResponseId !== undefined) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRouteResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateStageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateStageCommandError(output, context);
  }
  const contents: CreateStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStageResponse",
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined) {
    contents.AccessLogSettings = deserializeAws_restJson1_1AccessLogSettings(
      data.accessLogSettings,
      context
    );
  }
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined) {
    contents.DefaultRouteSettings = deserializeAws_restJson1_1RouteSettings(
      data.defaultRouteSettings,
      context
    );
  }
  if (data.deploymentId !== undefined) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined) {
    contents.RouteSettings = deserializeAws_restJson1_1RouteSettingsMap(
      data.routeSettings,
      context
    );
  }
  if (data.stageName !== undefined) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined) {
    contents.StageVariables = deserializeAws_restJson1_1StageVariablesMap(
      data.stageVariables,
      context
    );
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateStageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteApiCommandError(output, context);
  }
  const contents: DeleteApiCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteApiMappingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteApiMappingCommandError(
      output,
      context
    );
  }
  const contents: DeleteApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteApiMappingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteAuthorizerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAuthorizerCommandError(
      output,
      context
    );
  }
  const contents: DeleteAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteAuthorizerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteCorsConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteCorsConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DeleteCorsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteCorsConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDeploymentCommandError(
      output,
      context
    );
  }
  const contents: DeleteDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteDomainNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDomainNameCommandError(
      output,
      context
    );
  }
  const contents: DeleteDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDomainNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteIntegrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteIntegrationCommandError(
      output,
      context
    );
  }
  const contents: DeleteIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteIntegrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteIntegrationResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteIntegrationResponseCommandError(
      output,
      context
    );
  }
  const contents: DeleteIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteIntegrationResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteModelCommandError(output, context);
  }
  const contents: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRouteCommandError(output, context);
  }
  const contents: DeleteRouteCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteRouteResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRouteResponseCommandError(
      output,
      context
    );
  }
  const contents: DeleteRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRouteResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteRouteSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRouteSettingsCommandError(
      output,
      context
    );
  }
  const contents: DeleteRouteSettingsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRouteSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteStageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteStageCommandError(output, context);
  }
  const contents: DeleteStageCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteStageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApiCommandError(output, context);
  }
  const contents: GetApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApiResponse",
    ApiEndpoint: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined) {
    contents.CorsConfiguration = deserializeAws_restJson1_1Cors(
      data.corsConfiguration,
      context
    );
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.disableSchemaValidation !== undefined) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined) {
    contents.ImportInfo = deserializeAws_restJson1_1__listOf__string(
      data.importInfo,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.version !== undefined) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined) {
    contents.Warnings = deserializeAws_restJson1_1__listOf__string(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetApiMappingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApiMappingCommandError(output, context);
  }
  const contents: GetApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApiMappingResponse",
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApiMappingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetApiMappingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApiMappingsCommandError(
      output,
      context
    );
  }
  const contents: GetApiMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApiMappingsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfApiMapping(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApiMappingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetApisCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApisCommandError(output, context);
  }
  const contents: GetApisCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApisResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfApi(data.items, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApisCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetAuthorizerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAuthorizerCommandError(output, context);
  }
  const contents: GetAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAuthorizerResponse",
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerResultTtlInSeconds !== undefined) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.identitySource !== undefined) {
    contents.IdentitySource = deserializeAws_restJson1_1IdentitySourceList(
      data.identitySource,
      context
    );
  }
  if (data.identityValidationExpression !== undefined) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined) {
    contents.JwtConfiguration = deserializeAws_restJson1_1JWTConfiguration(
      data.jwtConfiguration,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAuthorizerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetAuthorizersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAuthorizersCommandError(
      output,
      context
    );
  }
  const contents: GetAuthorizersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAuthorizersResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfAuthorizer(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAuthorizersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeploymentCommandError(output, context);
  }
  const contents: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentResponse",
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetDeploymentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeploymentsCommandError(
      output,
      context
    );
  }
  const contents: GetDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfDeployment(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDeploymentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetDomainNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDomainNameCommandError(output, context);
  }
  const contents: GetDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainNameResponse",
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined) {
    contents.DomainNameConfigurations = deserializeAws_restJson1_1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDomainNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetDomainNamesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDomainNamesCommandError(
      output,
      context
    );
  }
  const contents: GetDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainNamesResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfDomainName(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDomainNamesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetIntegrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntegrationCommandError(
      output,
      context
    );
  }
  const contents: GetIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntegrationResult",
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (data.integrationResponseSelectionExpression !== undefined) {
    contents.IntegrationResponseSelectionExpression =
      data.integrationResponseSelectionExpression;
  }
  if (data.integrationType !== undefined) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1IntegrationParameters(
      data.requestParameters,
      context
    );
  }
  if (data.requestTemplates !== undefined) {
    contents.RequestTemplates = deserializeAws_restJson1_1TemplateMap(
      data.requestTemplates,
      context
    );
  }
  if (data.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntegrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetIntegrationResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntegrationResponseCommandError(
      output,
      context
    );
  }
  const contents: GetIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntegrationResponseResponse",
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1IntegrationParameters(
      data.responseParameters,
      context
    );
  }
  if (data.responseTemplates !== undefined) {
    contents.ResponseTemplates = deserializeAws_restJson1_1TemplateMap(
      data.responseTemplates,
      context
    );
  }
  if (data.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntegrationResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetIntegrationResponsesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntegrationResponsesCommandError(
      output,
      context
    );
  }
  const contents: GetIntegrationResponsesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntegrationResponsesResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfIntegrationResponse(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntegrationResponsesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetIntegrationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntegrationsCommandError(
      output,
      context
    );
  }
  const contents: GetIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntegrationsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfIntegration(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntegrationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetModelCommandError(output, context);
  }
  const contents: GetModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetModelResponse",
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentType !== undefined) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetModelTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetModelTemplateCommandError(
      output,
      context
    );
  }
  const contents: GetModelTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetModelTemplateResponse",
    Value: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.value !== undefined) {
    contents.Value = data.value;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetModelTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetModelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetModelsCommandError(output, context);
  }
  const contents: GetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetModelsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfModel(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetModelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRouteCommandError(output, context);
  }
  const contents: GetRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRouteResult",
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
    Target: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined) {
    contents.AuthorizationScopes = deserializeAws_restJson1_1AuthorizationScopes(
      data.authorizationScopes,
      context
    );
  }
  if (data.authorizationType !== undefined) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined) {
    contents.RequestModels = deserializeAws_restJson1_1RouteModels(
      data.requestModels,
      context
    );
  }
  if (data.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1RouteParameters(
      data.requestParameters,
      context
    );
  }
  if (data.routeId !== undefined) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined) {
    contents.RouteResponseSelectionExpression =
      data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetRouteResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRouteResponseCommandError(
      output,
      context
    );
  }
  const contents: GetRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRouteResponseResponse",
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined) {
    contents.ResponseModels = deserializeAws_restJson1_1RouteModels(
      data.responseModels,
      context
    );
  }
  if (data.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1RouteParameters(
      data.responseParameters,
      context
    );
  }
  if (data.routeResponseId !== undefined) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRouteResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetRouteResponsesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRouteResponsesCommandError(
      output,
      context
    );
  }
  const contents: GetRouteResponsesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRouteResponsesResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfRouteResponse(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRouteResponsesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetRoutesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRoutesCommandError(output, context);
  }
  const contents: GetRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRoutesResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfRoute(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRoutesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetStageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetStageCommandError(output, context);
  }
  const contents: GetStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStageResponse",
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined) {
    contents.AccessLogSettings = deserializeAws_restJson1_1AccessLogSettings(
      data.accessLogSettings,
      context
    );
  }
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined) {
    contents.DefaultRouteSettings = deserializeAws_restJson1_1RouteSettings(
      data.defaultRouteSettings,
      context
    );
  }
  if (data.deploymentId !== undefined) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined) {
    contents.RouteSettings = deserializeAws_restJson1_1RouteSettingsMap(
      data.routeSettings,
      context
    );
  }
  if (data.stageName !== undefined) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined) {
    contents.StageVariables = deserializeAws_restJson1_1StageVariablesMap(
      data.stageVariables,
      context
    );
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetStageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetStagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetStagesCommandError(output, context);
  }
  const contents: GetStagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStagesResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfStage(
      data.items,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetStagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTagsCommandError(output, context);
  }
  const contents: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagsResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ImportApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ImportApiCommandError(output, context);
  }
  const contents: ImportApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportApiResponse",
    ApiEndpoint: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined) {
    contents.CorsConfiguration = deserializeAws_restJson1_1Cors(
      data.corsConfiguration,
      context
    );
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.disableSchemaValidation !== undefined) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined) {
    contents.ImportInfo = deserializeAws_restJson1_1__listOf__string(
      data.importInfo,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.version !== undefined) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined) {
    contents.Warnings = deserializeAws_restJson1_1__listOf__string(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ImportApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ReimportApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ReimportApiCommandError(output, context);
  }
  const contents: ReimportApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReimportApiResponse",
    ApiEndpoint: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined) {
    contents.CorsConfiguration = deserializeAws_restJson1_1Cors(
      data.corsConfiguration,
      context
    );
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.disableSchemaValidation !== undefined) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined) {
    contents.ImportInfo = deserializeAws_restJson1_1__listOf__string(
      data.importInfo,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.version !== undefined) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined) {
    contents.Warnings = deserializeAws_restJson1_1__listOf__string(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ReimportApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateApiCommandError(output, context);
  }
  const contents: UpdateApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApiResponse",
    ApiEndpoint: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined) {
    contents.CorsConfiguration = deserializeAws_restJson1_1Cors(
      data.corsConfiguration,
      context
    );
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.disableSchemaValidation !== undefined) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined) {
    contents.ImportInfo = deserializeAws_restJson1_1__listOf__string(
      data.importInfo,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.version !== undefined) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined) {
    contents.Warnings = deserializeAws_restJson1_1__listOf__string(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateApiMappingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateApiMappingCommandError(
      output,
      context
    );
  }
  const contents: UpdateApiMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApiMappingResponse",
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiId !== undefined) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateApiMappingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateAuthorizerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateAuthorizerCommandError(
      output,
      context
    );
  }
  const contents: UpdateAuthorizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAuthorizerResponse",
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerResultTtlInSeconds !== undefined) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.identitySource !== undefined) {
    contents.IdentitySource = deserializeAws_restJson1_1IdentitySourceList(
      data.identitySource,
      context
    );
  }
  if (data.identityValidationExpression !== undefined) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined) {
    contents.JwtConfiguration = deserializeAws_restJson1_1JWTConfiguration(
      data.jwtConfiguration,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateAuthorizerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDeploymentCommandError(
      output,
      context
    );
  }
  const contents: UpdateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDeploymentResponse",
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateDomainNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDomainNameCommandError(
      output,
      context
    );
  }
  const contents: UpdateDomainNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainNameResponse",
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined) {
    contents.DomainNameConfigurations = deserializeAws_restJson1_1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDomainNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateIntegrationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateIntegrationCommandError(
      output,
      context
    );
  }
  const contents: UpdateIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateIntegrationResult",
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (data.integrationResponseSelectionExpression !== undefined) {
    contents.IntegrationResponseSelectionExpression =
      data.integrationResponseSelectionExpression;
  }
  if (data.integrationType !== undefined) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1IntegrationParameters(
      data.requestParameters,
      context
    );
  }
  if (data.requestTemplates !== undefined) {
    contents.RequestTemplates = deserializeAws_restJson1_1TemplateMap(
      data.requestTemplates,
      context
    );
  }
  if (data.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateIntegrationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateIntegrationResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateIntegrationResponseCommandError(
      output,
      context
    );
  }
  const contents: UpdateIntegrationResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateIntegrationResponseResponse",
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1IntegrationParameters(
      data.responseParameters,
      context
    );
  }
  if (data.responseTemplates !== undefined) {
    contents.ResponseTemplates = deserializeAws_restJson1_1TemplateMap(
      data.responseTemplates,
      context
    );
  }
  if (data.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateIntegrationResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateModelCommandError(output, context);
  }
  const contents: UpdateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateModelResponse",
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contentType !== undefined) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRouteCommandError(output, context);
  }
  const contents: UpdateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRouteResult",
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
    Target: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined) {
    contents.AuthorizationScopes = deserializeAws_restJson1_1AuthorizationScopes(
      data.authorizationScopes,
      context
    );
  }
  if (data.authorizationType !== undefined) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined) {
    contents.RequestModels = deserializeAws_restJson1_1RouteModels(
      data.requestModels,
      context
    );
  }
  if (data.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1RouteParameters(
      data.requestParameters,
      context
    );
  }
  if (data.routeId !== undefined) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined) {
    contents.RouteResponseSelectionExpression =
      data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateRouteResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRouteResponseCommandError(
      output,
      context
    );
  }
  const contents: UpdateRouteResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRouteResponseResponse",
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined) {
    contents.ResponseModels = deserializeAws_restJson1_1RouteModels(
      data.responseModels,
      context
    );
  }
  if (data.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1RouteParameters(
      data.responseParameters,
      context
    );
  }
  if (data.routeResponseId !== undefined) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRouteResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateStageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateStageCommandError(output, context);
  }
  const contents: UpdateStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStageResponse",
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined) {
    contents.AccessLogSettings = deserializeAws_restJson1_1AccessLogSettings(
      data.accessLogSettings,
      context
    );
  }
  if (data.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined) {
    contents.DefaultRouteSettings = deserializeAws_restJson1_1RouteSettings(
      data.defaultRouteSettings,
      context
    );
  }
  if (data.deploymentId !== undefined) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined) {
    contents.RouteSettings = deserializeAws_restJson1_1RouteSettingsMap(
      data.routeSettings,
      context
    );
  }
  if (data.stageName !== undefined) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined) {
    contents.StageVariables = deserializeAws_restJson1_1StageVariablesMap(
      data.stageVariables,
      context
    );
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateStageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  if (data.resourceType !== undefined) {
    contents.ResourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    LimitType: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.limitType !== undefined) {
    contents.LimitType = data.limitType;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AccessLogSettings = (
  input: AccessLogSettings,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DestinationArn !== undefined) {
    bodyParams["destinationArn"] = input.DestinationArn;
  }
  if (input.Format !== undefined) {
    bodyParams["format"] = input.Format;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AuthorizationScopes = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1Cors = (
  input: Cors,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AllowCredentials !== undefined) {
    bodyParams["allowCredentials"] = input.AllowCredentials;
  }
  if (input.AllowHeaders !== undefined) {
    bodyParams["allowHeaders"] = serializeAws_restJson1_1CorsHeaderList(
      input.AllowHeaders,
      context
    );
  }
  if (input.AllowMethods !== undefined) {
    bodyParams["allowMethods"] = serializeAws_restJson1_1CorsMethodList(
      input.AllowMethods,
      context
    );
  }
  if (input.AllowOrigins !== undefined) {
    bodyParams["allowOrigins"] = serializeAws_restJson1_1CorsOriginList(
      input.AllowOrigins,
      context
    );
  }
  if (input.ExposeHeaders !== undefined) {
    bodyParams["exposeHeaders"] = serializeAws_restJson1_1CorsHeaderList(
      input.ExposeHeaders,
      context
    );
  }
  if (input.MaxAge !== undefined) {
    bodyParams["maxAge"] = input.MaxAge;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CorsHeaderList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1CorsMethodList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1CorsOriginList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1DomainNameConfiguration = (
  input: DomainNameConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ApiGatewayDomainName !== undefined) {
    bodyParams["apiGatewayDomainName"] = input.ApiGatewayDomainName;
  }
  if (input.CertificateArn !== undefined) {
    bodyParams["certificateArn"] = input.CertificateArn;
  }
  if (input.CertificateName !== undefined) {
    bodyParams["certificateName"] = input.CertificateName;
  }
  if (input.CertificateUploadDate !== undefined) {
    bodyParams[
      "certificateUploadDate"
    ] = input.CertificateUploadDate.toISOString();
  }
  if (input.DomainNameStatus !== undefined) {
    bodyParams["domainNameStatus"] = input.DomainNameStatus;
  }
  if (input.DomainNameStatusMessage !== undefined) {
    bodyParams["domainNameStatusMessage"] = input.DomainNameStatusMessage;
  }
  if (input.EndpointType !== undefined) {
    bodyParams["endpointType"] = input.EndpointType;
  }
  if (input.HostedZoneId !== undefined) {
    bodyParams["hostedZoneId"] = input.HostedZoneId;
  }
  if (input.SecurityPolicy !== undefined) {
    bodyParams["securityPolicy"] = input.SecurityPolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DomainNameConfigurations = (
  input: Array<DomainNameConfiguration>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1DomainNameConfiguration(entry, context)
  );
};

const serializeAws_restJson1_1IdentitySourceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1IntegrationParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1JWTConfiguration = (
  input: JWTConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Audience !== undefined) {
    bodyParams["audience"] = serializeAws_restJson1_1__listOf__string(
      input.Audience,
      context
    );
  }
  if (input.Issuer !== undefined) {
    bodyParams["issuer"] = input.Issuer;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ParameterConstraints = (
  input: ParameterConstraints,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Required !== undefined) {
    bodyParams["required"] = input.Required;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RouteModels = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1RouteParameters = (
  input: { [key: string]: ParameterConstraints },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1ParameterConstraints(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_restJson1_1RouteSettings = (
  input: RouteSettings,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataTraceEnabled !== undefined) {
    bodyParams["dataTraceEnabled"] = input.DataTraceEnabled;
  }
  if (input.DetailedMetricsEnabled !== undefined) {
    bodyParams["detailedMetricsEnabled"] = input.DetailedMetricsEnabled;
  }
  if (input.LoggingLevel !== undefined) {
    bodyParams["loggingLevel"] = input.LoggingLevel;
  }
  if (input.ThrottlingBurstLimit !== undefined) {
    bodyParams["throttlingBurstLimit"] = input.ThrottlingBurstLimit;
  }
  if (input.ThrottlingRateLimit !== undefined) {
    bodyParams["throttlingRateLimit"] = input.ThrottlingRateLimit;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RouteSettingsMap = (
  input: { [key: string]: RouteSettings },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1RouteSettings(input[key], context);
  });
  return mapParams;
};

const serializeAws_restJson1_1StageVariablesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1TemplateMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_restJson1_1AccessLogSettings = (
  output: any,
  context: __SerdeContext
): AccessLogSettings => {
  let contents: any = {
    __type: "AccessLogSettings",
    DestinationArn: undefined,
    Format: undefined
  };
  if (output.destinationArn !== undefined) {
    contents.DestinationArn = output.destinationArn;
  }
  if (output.format !== undefined) {
    contents.Format = output.format;
  }
  return contents;
};

const deserializeAws_restJson1_1Api = (
  output: any,
  context: __SerdeContext
): Api => {
  let contents: any = {
    __type: "Api",
    ApiEndpoint: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined
  };
  if (output.apiEndpoint !== undefined) {
    contents.ApiEndpoint = output.apiEndpoint;
  }
  if (output.apiId !== undefined) {
    contents.ApiId = output.apiId;
  }
  if (output.apiKeySelectionExpression !== undefined) {
    contents.ApiKeySelectionExpression = output.apiKeySelectionExpression;
  }
  if (output.corsConfiguration !== undefined) {
    contents.CorsConfiguration = deserializeAws_restJson1_1Cors(
      output.corsConfiguration,
      context
    );
  }
  if (output.createdDate !== undefined) {
    contents.CreatedDate = new Date(output.createdDate);
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.disableSchemaValidation !== undefined) {
    contents.DisableSchemaValidation = output.disableSchemaValidation;
  }
  if (output.importInfo !== undefined) {
    contents.ImportInfo = deserializeAws_restJson1_1__listOf__string(
      output.importInfo,
      context
    );
  }
  if (output.name !== undefined) {
    contents.Name = output.name;
  }
  if (output.protocolType !== undefined) {
    contents.ProtocolType = output.protocolType;
  }
  if (output.routeSelectionExpression !== undefined) {
    contents.RouteSelectionExpression = output.routeSelectionExpression;
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (output.version !== undefined) {
    contents.Version = output.version;
  }
  if (output.warnings !== undefined) {
    contents.Warnings = deserializeAws_restJson1_1__listOf__string(
      output.warnings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ApiMapping = (
  output: any,
  context: __SerdeContext
): ApiMapping => {
  let contents: any = {
    __type: "ApiMapping",
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined
  };
  if (output.apiId !== undefined) {
    contents.ApiId = output.apiId;
  }
  if (output.apiMappingId !== undefined) {
    contents.ApiMappingId = output.apiMappingId;
  }
  if (output.apiMappingKey !== undefined) {
    contents.ApiMappingKey = output.apiMappingKey;
  }
  if (output.stage !== undefined) {
    contents.Stage = output.stage;
  }
  return contents;
};

const deserializeAws_restJson1_1AuthorizationScopes = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Authorizer = (
  output: any,
  context: __SerdeContext
): Authorizer => {
  let contents: any = {
    __type: "Authorizer",
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined
  };
  if (output.authorizerCredentialsArn !== undefined) {
    contents.AuthorizerCredentialsArn = output.authorizerCredentialsArn;
  }
  if (output.authorizerId !== undefined) {
    contents.AuthorizerId = output.authorizerId;
  }
  if (output.authorizerResultTtlInSeconds !== undefined) {
    contents.AuthorizerResultTtlInSeconds = output.authorizerResultTtlInSeconds;
  }
  if (output.authorizerType !== undefined) {
    contents.AuthorizerType = output.authorizerType;
  }
  if (output.authorizerUri !== undefined) {
    contents.AuthorizerUri = output.authorizerUri;
  }
  if (output.identitySource !== undefined) {
    contents.IdentitySource = deserializeAws_restJson1_1IdentitySourceList(
      output.identitySource,
      context
    );
  }
  if (output.identityValidationExpression !== undefined) {
    contents.IdentityValidationExpression = output.identityValidationExpression;
  }
  if (output.jwtConfiguration !== undefined) {
    contents.JwtConfiguration = deserializeAws_restJson1_1JWTConfiguration(
      output.jwtConfiguration,
      context
    );
  }
  if (output.name !== undefined) {
    contents.Name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1Cors = (
  output: any,
  context: __SerdeContext
): Cors => {
  let contents: any = {
    __type: "Cors",
    AllowCredentials: undefined,
    AllowHeaders: undefined,
    AllowMethods: undefined,
    AllowOrigins: undefined,
    ExposeHeaders: undefined,
    MaxAge: undefined
  };
  if (output.allowCredentials !== undefined) {
    contents.AllowCredentials = output.allowCredentials;
  }
  if (output.allowHeaders !== undefined) {
    contents.AllowHeaders = deserializeAws_restJson1_1CorsHeaderList(
      output.allowHeaders,
      context
    );
  }
  if (output.allowMethods !== undefined) {
    contents.AllowMethods = deserializeAws_restJson1_1CorsMethodList(
      output.allowMethods,
      context
    );
  }
  if (output.allowOrigins !== undefined) {
    contents.AllowOrigins = deserializeAws_restJson1_1CorsOriginList(
      output.allowOrigins,
      context
    );
  }
  if (output.exposeHeaders !== undefined) {
    contents.ExposeHeaders = deserializeAws_restJson1_1CorsHeaderList(
      output.exposeHeaders,
      context
    );
  }
  if (output.maxAge !== undefined) {
    contents.MaxAge = output.maxAge;
  }
  return contents;
};

const deserializeAws_restJson1_1CorsHeaderList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CorsMethodList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CorsOriginList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Deployment = (
  output: any,
  context: __SerdeContext
): Deployment => {
  let contents: any = {
    __type: "Deployment",
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined
  };
  if (output.autoDeployed !== undefined) {
    contents.AutoDeployed = output.autoDeployed;
  }
  if (output.createdDate !== undefined) {
    contents.CreatedDate = new Date(output.createdDate);
  }
  if (output.deploymentId !== undefined) {
    contents.DeploymentId = output.deploymentId;
  }
  if (output.deploymentStatus !== undefined) {
    contents.DeploymentStatus = output.deploymentStatus;
  }
  if (output.deploymentStatusMessage !== undefined) {
    contents.DeploymentStatusMessage = output.deploymentStatusMessage;
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainName = (
  output: any,
  context: __SerdeContext
): DomainName => {
  let contents: any = {
    __type: "DomainName",
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    Tags: undefined
  };
  if (output.apiMappingSelectionExpression !== undefined) {
    contents.ApiMappingSelectionExpression =
      output.apiMappingSelectionExpression;
  }
  if (output.domainName !== undefined) {
    contents.DomainName = output.domainName;
  }
  if (output.domainNameConfigurations !== undefined) {
    contents.DomainNameConfigurations = deserializeAws_restJson1_1DomainNameConfigurations(
      output.domainNameConfigurations,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1DomainNameConfiguration = (
  output: any,
  context: __SerdeContext
): DomainNameConfiguration => {
  let contents: any = {
    __type: "DomainNameConfiguration",
    ApiGatewayDomainName: undefined,
    CertificateArn: undefined,
    CertificateName: undefined,
    CertificateUploadDate: undefined,
    DomainNameStatus: undefined,
    DomainNameStatusMessage: undefined,
    EndpointType: undefined,
    HostedZoneId: undefined,
    SecurityPolicy: undefined
  };
  if (output.apiGatewayDomainName !== undefined) {
    contents.ApiGatewayDomainName = output.apiGatewayDomainName;
  }
  if (output.certificateArn !== undefined) {
    contents.CertificateArn = output.certificateArn;
  }
  if (output.certificateName !== undefined) {
    contents.CertificateName = output.certificateName;
  }
  if (output.certificateUploadDate !== undefined) {
    contents.CertificateUploadDate = new Date(output.certificateUploadDate);
  }
  if (output.domainNameStatus !== undefined) {
    contents.DomainNameStatus = output.domainNameStatus;
  }
  if (output.domainNameStatusMessage !== undefined) {
    contents.DomainNameStatusMessage = output.domainNameStatusMessage;
  }
  if (output.endpointType !== undefined) {
    contents.EndpointType = output.endpointType;
  }
  if (output.hostedZoneId !== undefined) {
    contents.HostedZoneId = output.hostedZoneId;
  }
  if (output.securityPolicy !== undefined) {
    contents.SecurityPolicy = output.securityPolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainNameConfigurations = (
  output: any,
  context: __SerdeContext
): Array<DomainNameConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainNameConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1IdentitySourceList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Integration = (
  output: any,
  context: __SerdeContext
): Integration => {
  let contents: any = {
    __type: "Integration",
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined
  };
  if (output.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = output.apiGatewayManaged;
  }
  if (output.connectionId !== undefined) {
    contents.ConnectionId = output.connectionId;
  }
  if (output.connectionType !== undefined) {
    contents.ConnectionType = output.connectionType;
  }
  if (output.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = output.contentHandlingStrategy;
  }
  if (output.credentialsArn !== undefined) {
    contents.CredentialsArn = output.credentialsArn;
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.integrationId !== undefined) {
    contents.IntegrationId = output.integrationId;
  }
  if (output.integrationMethod !== undefined) {
    contents.IntegrationMethod = output.integrationMethod;
  }
  if (output.integrationResponseSelectionExpression !== undefined) {
    contents.IntegrationResponseSelectionExpression =
      output.integrationResponseSelectionExpression;
  }
  if (output.integrationType !== undefined) {
    contents.IntegrationType = output.integrationType;
  }
  if (output.integrationUri !== undefined) {
    contents.IntegrationUri = output.integrationUri;
  }
  if (output.passthroughBehavior !== undefined) {
    contents.PassthroughBehavior = output.passthroughBehavior;
  }
  if (output.payloadFormatVersion !== undefined) {
    contents.PayloadFormatVersion = output.payloadFormatVersion;
  }
  if (output.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1IntegrationParameters(
      output.requestParameters,
      context
    );
  }
  if (output.requestTemplates !== undefined) {
    contents.RequestTemplates = deserializeAws_restJson1_1TemplateMap(
      output.requestTemplates,
      context
    );
  }
  if (output.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = output.templateSelectionExpression;
  }
  if (output.timeoutInMillis !== undefined) {
    contents.TimeoutInMillis = output.timeoutInMillis;
  }
  return contents;
};

const deserializeAws_restJson1_1IntegrationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1IntegrationResponse = (
  output: any,
  context: __SerdeContext
): IntegrationResponse => {
  let contents: any = {
    __type: "IntegrationResponse",
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined
  };
  if (output.contentHandlingStrategy !== undefined) {
    contents.ContentHandlingStrategy = output.contentHandlingStrategy;
  }
  if (output.integrationResponseId !== undefined) {
    contents.IntegrationResponseId = output.integrationResponseId;
  }
  if (output.integrationResponseKey !== undefined) {
    contents.IntegrationResponseKey = output.integrationResponseKey;
  }
  if (output.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1IntegrationParameters(
      output.responseParameters,
      context
    );
  }
  if (output.responseTemplates !== undefined) {
    contents.ResponseTemplates = deserializeAws_restJson1_1TemplateMap(
      output.responseTemplates,
      context
    );
  }
  if (output.templateSelectionExpression !== undefined) {
    contents.TemplateSelectionExpression = output.templateSelectionExpression;
  }
  return contents;
};

const deserializeAws_restJson1_1JWTConfiguration = (
  output: any,
  context: __SerdeContext
): JWTConfiguration => {
  let contents: any = {
    __type: "JWTConfiguration",
    Audience: undefined,
    Issuer: undefined
  };
  if (output.audience !== undefined) {
    contents.Audience = deserializeAws_restJson1_1__listOf__string(
      output.audience,
      context
    );
  }
  if (output.issuer !== undefined) {
    contents.Issuer = output.issuer;
  }
  return contents;
};

const deserializeAws_restJson1_1Model = (
  output: any,
  context: __SerdeContext
): Model => {
  let contents: any = {
    __type: "Model",
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined
  };
  if (output.contentType !== undefined) {
    contents.ContentType = output.contentType;
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.modelId !== undefined) {
    contents.ModelId = output.modelId;
  }
  if (output.name !== undefined) {
    contents.Name = output.name;
  }
  if (output.schema !== undefined) {
    contents.Schema = output.schema;
  }
  return contents;
};

const deserializeAws_restJson1_1ParameterConstraints = (
  output: any,
  context: __SerdeContext
): ParameterConstraints => {
  let contents: any = {
    __type: "ParameterConstraints",
    Required: undefined
  };
  if (output.required !== undefined) {
    contents.Required = output.required;
  }
  return contents;
};

const deserializeAws_restJson1_1Route = (
  output: any,
  context: __SerdeContext
): Route => {
  let contents: any = {
    __type: "Route",
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
    Target: undefined
  };
  if (output.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = output.apiGatewayManaged;
  }
  if (output.apiKeyRequired !== undefined) {
    contents.ApiKeyRequired = output.apiKeyRequired;
  }
  if (output.authorizationScopes !== undefined) {
    contents.AuthorizationScopes = deserializeAws_restJson1_1AuthorizationScopes(
      output.authorizationScopes,
      context
    );
  }
  if (output.authorizationType !== undefined) {
    contents.AuthorizationType = output.authorizationType;
  }
  if (output.authorizerId !== undefined) {
    contents.AuthorizerId = output.authorizerId;
  }
  if (output.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = output.modelSelectionExpression;
  }
  if (output.operationName !== undefined) {
    contents.OperationName = output.operationName;
  }
  if (output.requestModels !== undefined) {
    contents.RequestModels = deserializeAws_restJson1_1RouteModels(
      output.requestModels,
      context
    );
  }
  if (output.requestParameters !== undefined) {
    contents.RequestParameters = deserializeAws_restJson1_1RouteParameters(
      output.requestParameters,
      context
    );
  }
  if (output.routeId !== undefined) {
    contents.RouteId = output.routeId;
  }
  if (output.routeKey !== undefined) {
    contents.RouteKey = output.routeKey;
  }
  if (output.routeResponseSelectionExpression !== undefined) {
    contents.RouteResponseSelectionExpression =
      output.routeResponseSelectionExpression;
  }
  if (output.target !== undefined) {
    contents.Target = output.target;
  }
  return contents;
};

const deserializeAws_restJson1_1RouteModels = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1RouteParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: ParameterConstraints } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1ParameterConstraints(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1RouteResponse = (
  output: any,
  context: __SerdeContext
): RouteResponse => {
  let contents: any = {
    __type: "RouteResponse",
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined
  };
  if (output.modelSelectionExpression !== undefined) {
    contents.ModelSelectionExpression = output.modelSelectionExpression;
  }
  if (output.responseModels !== undefined) {
    contents.ResponseModels = deserializeAws_restJson1_1RouteModels(
      output.responseModels,
      context
    );
  }
  if (output.responseParameters !== undefined) {
    contents.ResponseParameters = deserializeAws_restJson1_1RouteParameters(
      output.responseParameters,
      context
    );
  }
  if (output.routeResponseId !== undefined) {
    contents.RouteResponseId = output.routeResponseId;
  }
  if (output.routeResponseKey !== undefined) {
    contents.RouteResponseKey = output.routeResponseKey;
  }
  return contents;
};

const deserializeAws_restJson1_1RouteSettings = (
  output: any,
  context: __SerdeContext
): RouteSettings => {
  let contents: any = {
    __type: "RouteSettings",
    DataTraceEnabled: undefined,
    DetailedMetricsEnabled: undefined,
    LoggingLevel: undefined,
    ThrottlingBurstLimit: undefined,
    ThrottlingRateLimit: undefined
  };
  if (output.dataTraceEnabled !== undefined) {
    contents.DataTraceEnabled = output.dataTraceEnabled;
  }
  if (output.detailedMetricsEnabled !== undefined) {
    contents.DetailedMetricsEnabled = output.detailedMetricsEnabled;
  }
  if (output.loggingLevel !== undefined) {
    contents.LoggingLevel = output.loggingLevel;
  }
  if (output.throttlingBurstLimit !== undefined) {
    contents.ThrottlingBurstLimit = output.throttlingBurstLimit;
  }
  if (output.throttlingRateLimit !== undefined) {
    contents.ThrottlingRateLimit = output.throttlingRateLimit;
  }
  return contents;
};

const deserializeAws_restJson1_1RouteSettingsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: RouteSettings } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1RouteSettings(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1Stage = (
  output: any,
  context: __SerdeContext
): Stage => {
  let contents: any = {
    __type: "Stage",
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
    Tags: undefined
  };
  if (output.accessLogSettings !== undefined) {
    contents.AccessLogSettings = deserializeAws_restJson1_1AccessLogSettings(
      output.accessLogSettings,
      context
    );
  }
  if (output.apiGatewayManaged !== undefined) {
    contents.ApiGatewayManaged = output.apiGatewayManaged;
  }
  if (output.autoDeploy !== undefined) {
    contents.AutoDeploy = output.autoDeploy;
  }
  if (output.clientCertificateId !== undefined) {
    contents.ClientCertificateId = output.clientCertificateId;
  }
  if (output.createdDate !== undefined) {
    contents.CreatedDate = new Date(output.createdDate);
  }
  if (output.defaultRouteSettings !== undefined) {
    contents.DefaultRouteSettings = deserializeAws_restJson1_1RouteSettings(
      output.defaultRouteSettings,
      context
    );
  }
  if (output.deploymentId !== undefined) {
    contents.DeploymentId = output.deploymentId;
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.lastDeploymentStatusMessage !== undefined) {
    contents.LastDeploymentStatusMessage = output.lastDeploymentStatusMessage;
  }
  if (output.lastUpdatedDate !== undefined) {
    contents.LastUpdatedDate = new Date(output.lastUpdatedDate);
  }
  if (output.routeSettings !== undefined) {
    contents.RouteSettings = deserializeAws_restJson1_1RouteSettingsMap(
      output.routeSettings,
      context
    );
  }
  if (output.stageName !== undefined) {
    contents.StageName = output.stageName;
  }
  if (output.stageVariables !== undefined) {
    contents.StageVariables = deserializeAws_restJson1_1StageVariablesMap(
      output.stageVariables,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1StageVariablesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1TemplateMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1__listOfApi = (
  output: any,
  context: __SerdeContext
): Array<Api> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Api(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfApiMapping = (
  output: any,
  context: __SerdeContext
): Array<ApiMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ApiMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfAuthorizer = (
  output: any,
  context: __SerdeContext
): Array<Authorizer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Authorizer(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDeployment = (
  output: any,
  context: __SerdeContext
): Array<Deployment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Deployment(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDomainName = (
  output: any,
  context: __SerdeContext
): Array<DomainName> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainName(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfIntegration = (
  output: any,
  context: __SerdeContext
): Array<Integration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Integration(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfIntegrationResponse = (
  output: any,
  context: __SerdeContext
): Array<IntegrationResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IntegrationResponse(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfModel = (
  output: any,
  context: __SerdeContext
): Array<Model> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Model(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfRoute = (
  output: any,
  context: __SerdeContext
): Array<Route> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Route(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfRouteResponse = (
  output: any,
  context: __SerdeContext
): Array<RouteResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RouteResponse(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfStage = (
  output: any,
  context: __SerdeContext
): Array<Stage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Stage(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__string = (
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
