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
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
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
import { CreateRoutingRuleCommandInput, CreateRoutingRuleCommandOutput } from "../commands/CreateRoutingRuleCommand";
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
import { DeleteRoutingRuleCommandInput, DeleteRoutingRuleCommandOutput } from "../commands/DeleteRoutingRuleCommand";
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
import { GetRoutingRuleCommandInput, GetRoutingRuleCommandOutput } from "../commands/GetRoutingRuleCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "../commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "../commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { ImportApiCommandInput, ImportApiCommandOutput } from "../commands/ImportApiCommand";
import { ListRoutingRulesCommandInput, ListRoutingRulesCommandOutput } from "../commands/ListRoutingRulesCommand";
import { PutRoutingRuleCommandInput, PutRoutingRuleCommandOutput } from "../commands/PutRoutingRuleCommand";
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
  RoutingRule,
  RoutingRuleAction,
  RoutingRuleActionInvokeApi,
  RoutingRuleCondition,
  RoutingRuleMatchBasePaths,
  RoutingRuleMatchHeaders,
  RoutingRuleMatchHeaderValue,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis");
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKeySelectionExpression: [, , `ApiKeySelectionExpression`],
      corsConfiguration: [, (_) => se_Cors(_, context), `CorsConfiguration`],
      credentialsArn: [, , `CredentialsArn`],
      description: [, , `Description`],
      disableExecuteApiEndpoint: [, , `DisableExecuteApiEndpoint`],
      disableSchemaValidation: [, , `DisableSchemaValidation`],
      ipAddressType: [, , `IpAddressType`],
      name: [, , `Name`],
      protocolType: [, , `ProtocolType`],
      routeKey: [, , `RouteKey`],
      routeSelectionExpression: [, , `RouteSelectionExpression`],
      tags: [, (_) => _json(_), `Tags`],
      target: [, , `Target`],
      version: [, , `Version`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApiMappingCommand
 */
export const se_CreateApiMappingCommand = async (
  input: CreateApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domainnames/{DomainName}/apimappings");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiId: [, , `ApiId`],
      apiMappingKey: [, , `ApiMappingKey`],
      stage: [, , `Stage`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAuthorizerCommand
 */
export const se_CreateAuthorizerCommand = async (
  input: CreateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/authorizers");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
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
  b.bp("/v2/apis/{ApiId}/deployments");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      stageName: [, , `StageName`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainNameCommand
 */
export const se_CreateDomainNameCommand = async (
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domainnames");
  let body: any;
  body = JSON.stringify(
    take(input, {
      domainName: [, , `DomainName`],
      domainNameConfigurations: [, (_) => se_DomainNameConfigurations(_, context), `DomainNameConfigurations`],
      mutualTlsAuthentication: [, (_) => se_MutualTlsAuthenticationInput(_, context), `MutualTlsAuthentication`],
      routingMode: [, , `RoutingMode`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIntegrationCommand
 */
export const se_CreateIntegrationCommand = async (
  input: CreateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/integrations");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIntegrationResponseCommand
 */
export const se_CreateIntegrationResponseCommand = async (
  input: CreateIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/models");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentType: [, , `ContentType`],
      description: [, , `Description`],
      name: [, , `Name`],
      schema: [, , `Schema`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRouteCommand
 */
export const se_CreateRouteCommand = async (
  input: CreateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/routes");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRouteResponseCommand
 */
export const se_CreateRouteResponseCommand = async (
  input: CreateRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}/routeresponses");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      modelSelectionExpression: [, , `ModelSelectionExpression`],
      responseModels: [, (_) => _json(_), `ResponseModels`],
      responseParameters: [, (_) => se_RouteParameters(_, context), `ResponseParameters`],
      routeResponseKey: [, , `RouteResponseKey`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoutingRuleCommand
 */
export const se_CreateRoutingRuleCommand = async (
  input: CreateRoutingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domainnames/{DomainName}/routingrules");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_dNI]: [, input[_DNI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: [, (_) => se___listOfRoutingRuleAction(_, context), `Actions`],
      conditions: [, (_) => se___listOfRoutingRuleCondition(_, context), `Conditions`],
      priority: [, , `Priority`],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStageCommand
 */
export const se_CreateStageCommand = async (
  input: CreateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/stages");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVpcLinkCommand
 */
export const se_CreateVpcLinkCommand = async (
  input: CreateVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/vpclinks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [, , `Name`],
      securityGroupIds: [, (_) => _json(_), `SecurityGroupIds`],
      subnetIds: [, (_) => _json(_), `SubnetIds`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccessLogSettingsCommand
 */
export const se_DeleteAccessLogSettingsCommand = async (
  input: DeleteAccessLogSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/stages/{StageName}/accesslogsettings");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiCommand
 */
export const se_DeleteApiCommand = async (
  input: DeleteApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiMappingCommand
 */
export const se_DeleteApiMappingCommand = async (
  input: DeleteApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}");
  b.p("ApiMappingId", () => input.ApiMappingId!, "{ApiMappingId}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAuthorizerCommand
 */
export const se_DeleteAuthorizerCommand = async (
  input: DeleteAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/authorizers/{AuthorizerId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("AuthorizerId", () => input.AuthorizerId!, "{AuthorizerId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCorsConfigurationCommand
 */
export const se_DeleteCorsConfigurationCommand = async (
  input: DeleteCorsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/cors");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
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
  b.bp("/v2/apis/{ApiId}/deployments/{DeploymentId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("DeploymentId", () => input.DeploymentId!, "{DeploymentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainNameCommand
 */
export const se_DeleteDomainNameCommand = async (
  input: DeleteDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIntegrationResponseCommand
 */
export const se_DeleteIntegrationResponseCommand = async (
  input: DeleteIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
  b.p("IntegrationResponseId", () => input.IntegrationResponseId!, "{IntegrationResponseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/models/{ModelId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("ModelId", () => input.ModelId!, "{ModelId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRouteCommand
 */
export const se_DeleteRouteCommand = async (
  input: DeleteRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRouteRequestParameterCommand
 */
export const se_DeleteRouteRequestParameterCommand = async (
  input: DeleteRouteRequestParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RequestParameterKey", () => input.RequestParameterKey!, "{RequestParameterKey}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRouteResponseCommand
 */
export const se_DeleteRouteResponseCommand = async (
  input: DeleteRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  b.p("RouteResponseId", () => input.RouteResponseId!, "{RouteResponseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRouteSettingsCommand
 */
export const se_DeleteRouteSettingsCommand = async (
  input: DeleteRouteSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteKey", () => input.RouteKey!, "{RouteKey}", false);
  b.p("StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoutingRuleCommand
 */
export const se_DeleteRoutingRuleCommand = async (
  input: DeleteRoutingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("RoutingRuleId", () => input.RoutingRuleId!, "{RoutingRuleId}", false);
  const query: any = map({
    [_dNI]: [, input[_DNI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteStageCommand
 */
export const se_DeleteStageCommand = async (
  input: DeleteStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/stages/{StageName}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVpcLinkCommand
 */
export const se_DeleteVpcLinkCommand = async (
  input: DeleteVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/vpclinks/{VpcLinkId}");
  b.p("VpcLinkId", () => input.VpcLinkId!, "{VpcLinkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportApiCommand
 */
export const se_ExportApiCommand = async (
  input: ExportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/exports/{Specification}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("Specification", () => input.Specification!, "{Specification}", false);
  const query: any = map({
    [_eV]: [, input[_EV]!],
    [_iE]: [() => input.IncludeExtensions !== void 0, () => input[_IE]!.toString()],
    [_oT]: [, __expectNonNull(input[_OT]!, `OutputType`)],
    [_sN]: [, input[_SN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiCommand
 */
export const se_GetApiCommand = async (input: GetApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiMappingCommand
 */
export const se_GetApiMappingCommand = async (
  input: GetApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}");
  b.p("ApiMappingId", () => input.ApiMappingId!, "{ApiMappingId}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiMappingsCommand
 */
export const se_GetApiMappingsCommand = async (
  input: GetApiMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}/apimappings");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApisCommand
 */
export const se_GetApisCommand = async (
  input: GetApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis");
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAuthorizerCommand
 */
export const se_GetAuthorizerCommand = async (
  input: GetAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/authorizers/{AuthorizerId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("AuthorizerId", () => input.AuthorizerId!, "{AuthorizerId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAuthorizersCommand
 */
export const se_GetAuthorizersCommand = async (
  input: GetAuthorizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/authorizers");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/v2/apis/{ApiId}/deployments/{DeploymentId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("DeploymentId", () => input.DeploymentId!, "{DeploymentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeploymentsCommand
 */
export const se_GetDeploymentsCommand = async (
  input: GetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/deployments");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainNameCommand
 */
export const se_GetDomainNameCommand = async (
  input: GetDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainNamesCommand
 */
export const se_GetDomainNamesCommand = async (
  input: GetDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames");
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIntegrationCommand
 */
export const se_GetIntegrationCommand = async (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIntegrationResponseCommand
 */
export const se_GetIntegrationResponseCommand = async (
  input: GetIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
  b.p("IntegrationResponseId", () => input.IntegrationResponseId!, "{IntegrationResponseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIntegrationResponsesCommand
 */
export const se_GetIntegrationResponsesCommand = async (
  input: GetIntegrationResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIntegrationsCommand
 */
export const se_GetIntegrationsCommand = async (
  input: GetIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/integrations");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelCommand
 */
export const se_GetModelCommand = async (
  input: GetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/models/{ModelId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("ModelId", () => input.ModelId!, "{ModelId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelsCommand
 */
export const se_GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/models");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelTemplateCommand
 */
export const se_GetModelTemplateCommand = async (
  input: GetModelTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/models/{ModelId}/template");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("ModelId", () => input.ModelId!, "{ModelId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRouteCommand
 */
export const se_GetRouteCommand = async (
  input: GetRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRouteResponseCommand
 */
export const se_GetRouteResponseCommand = async (
  input: GetRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  b.p("RouteResponseId", () => input.RouteResponseId!, "{RouteResponseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRouteResponsesCommand
 */
export const se_GetRouteResponsesCommand = async (
  input: GetRouteResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}/routeresponses");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRoutesCommand
 */
export const se_GetRoutesCommand = async (
  input: GetRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/routes");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRoutingRuleCommand
 */
export const se_GetRoutingRuleCommand = async (
  input: GetRoutingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("RoutingRuleId", () => input.RoutingRuleId!, "{RoutingRuleId}", false);
  const query: any = map({
    [_dNI]: [, input[_DNI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStageCommand
 */
export const se_GetStageCommand = async (
  input: GetStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/stages/{StageName}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("StageName", () => input.StageName!, "{StageName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStagesCommand
 */
export const se_GetStagesCommand = async (
  input: GetStagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/stages");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTagsCommand
 */
export const se_GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVpcLinkCommand
 */
export const se_GetVpcLinkCommand = async (
  input: GetVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/vpclinks/{VpcLinkId}");
  b.p("VpcLinkId", () => input.VpcLinkId!, "{VpcLinkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVpcLinksCommand
 */
export const se_GetVpcLinksCommand = async (
  input: GetVpcLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/vpclinks");
  const query: any = map({
    [_mR]: [, input[_MR]!],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportApiCommand
 */
export const se_ImportApiCommand = async (
  input: ImportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis");
  const query: any = map({
    [_b]: [, input[_B]!],
    [_fOW]: [() => input.FailOnWarnings !== void 0, () => input[_FOW]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      body: [, , `Body`],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoutingRulesCommand
 */
export const se_ListRoutingRulesCommand = async (
  input: ListRoutingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domainnames/{DomainName}/routingrules");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_dNI]: [, input[_DNI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRoutingRuleCommand
 */
export const se_PutRoutingRuleCommand = async (
  input: PutRoutingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("RoutingRuleId", () => input.RoutingRuleId!, "{RoutingRuleId}", false);
  const query: any = map({
    [_dNI]: [, input[_DNI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: [, (_) => se___listOfRoutingRuleAction(_, context), `Actions`],
      conditions: [, (_) => se___listOfRoutingRuleCondition(_, context), `Conditions`],
      priority: [, , `Priority`],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReimportApiCommand
 */
export const se_ReimportApiCommand = async (
  input: ReimportApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  const query: any = map({
    [_b]: [, input[_B]!],
    [_fOW]: [() => input.FailOnWarnings !== void 0, () => input[_FOW]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      body: [, , `Body`],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetAuthorizersCacheCommand
 */
export const se_ResetAuthorizersCacheCommand = async (
  input: ResetAuthorizersCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{ApiId}/stages/{StageName}/cache/authorizers");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("StageName", () => input.StageName!, "{StageName}", false);
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
  b.bp("/v2/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
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
  b.bp("/v2/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiCommand
 */
export const se_UpdateApiCommand = async (
  input: UpdateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKeySelectionExpression: [, , `ApiKeySelectionExpression`],
      corsConfiguration: [, (_) => se_Cors(_, context), `CorsConfiguration`],
      credentialsArn: [, , `CredentialsArn`],
      description: [, , `Description`],
      disableExecuteApiEndpoint: [, , `DisableExecuteApiEndpoint`],
      disableSchemaValidation: [, , `DisableSchemaValidation`],
      ipAddressType: [, , `IpAddressType`],
      name: [, , `Name`],
      routeKey: [, , `RouteKey`],
      routeSelectionExpression: [, , `RouteSelectionExpression`],
      target: [, , `Target`],
      version: [, , `Version`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiMappingCommand
 */
export const se_UpdateApiMappingCommand = async (
  input: UpdateApiMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}");
  b.p("ApiMappingId", () => input.ApiMappingId!, "{ApiMappingId}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiId: [, , `ApiId`],
      apiMappingKey: [, , `ApiMappingKey`],
      stage: [, , `Stage`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAuthorizerCommand
 */
export const se_UpdateAuthorizerCommand = async (
  input: UpdateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/authorizers/{AuthorizerId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("AuthorizerId", () => input.AuthorizerId!, "{AuthorizerId}", false);
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
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeploymentCommand
 */
export const se_UpdateDeploymentCommand = async (
  input: UpdateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/deployments/{DeploymentId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("DeploymentId", () => input.DeploymentId!, "{DeploymentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainNameCommand
 */
export const se_UpdateDomainNameCommand = async (
  input: UpdateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domainnames/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      domainNameConfigurations: [, (_) => se_DomainNameConfigurations(_, context), `DomainNameConfigurations`],
      mutualTlsAuthentication: [, (_) => se_MutualTlsAuthenticationInput(_, context), `MutualTlsAuthentication`],
      routingMode: [, , `RoutingMode`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIntegrationCommand
 */
export const se_UpdateIntegrationCommand = async (
  input: UpdateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
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
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIntegrationResponseCommand
 */
export const se_UpdateIntegrationResponseCommand = async (
  input: UpdateIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("IntegrationId", () => input.IntegrationId!, "{IntegrationId}", false);
  b.p("IntegrationResponseId", () => input.IntegrationResponseId!, "{IntegrationResponseId}", false);
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
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateModelCommand
 */
export const se_UpdateModelCommand = async (
  input: UpdateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/models/{ModelId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("ModelId", () => input.ModelId!, "{ModelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentType: [, , `ContentType`],
      description: [, , `Description`],
      name: [, , `Name`],
      schema: [, , `Schema`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRouteCommand
 */
export const se_UpdateRouteCommand = async (
  input: UpdateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
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
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRouteResponseCommand
 */
export const se_UpdateRouteResponseCommand = async (
  input: UpdateRouteResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("RouteId", () => input.RouteId!, "{RouteId}", false);
  b.p("RouteResponseId", () => input.RouteResponseId!, "{RouteResponseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      modelSelectionExpression: [, , `ModelSelectionExpression`],
      responseModels: [, (_) => _json(_), `ResponseModels`],
      responseParameters: [, (_) => se_RouteParameters(_, context), `ResponseParameters`],
      routeResponseKey: [, , `RouteResponseKey`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateStageCommand
 */
export const se_UpdateStageCommand = async (
  input: UpdateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{ApiId}/stages/{StageName}");
  b.p("ApiId", () => input.ApiId!, "{ApiId}", false);
  b.p("StageName", () => input.StageName!, "{StageName}", false);
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
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVpcLinkCommand
 */
export const se_UpdateVpcLinkCommand = async (
  input: UpdateVpcLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/vpclinks/{VpcLinkId}");
  b.p("VpcLinkId", () => input.VpcLinkId!, "{VpcLinkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [, , `Name`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateApiCommand
 */
export const de_CreateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    IpAddressType: [, __expectString, `ipAddressType`],
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
 * deserializeAws_restJson1CreateApiMappingCommand
 */
export const de_CreateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiMappingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateAuthorizerCommand
 */
export const de_CreateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateDomainNameCommand
 */
export const de_CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameArn: [, __expectString, `domainNameArn`],
    DomainNameConfigurations: [, (_) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    RoutingMode: [, __expectString, `routingMode`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntegrationCommand
 */
export const de_CreateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateIntegrationResponseCommand
 */
export const de_CreateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRouteCommand
 */
export const de_CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRouteResponseCommand
 */
export const de_CreateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRoutingRuleCommand
 */
export const de_CreateRoutingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoutingRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Actions: [, (_) => de___listOfRoutingRuleAction(_, context), `actions`],
    Conditions: [, (_) => de___listOfRoutingRuleCondition(_, context), `conditions`],
    Priority: [, __expectInt32, `priority`],
    RoutingRuleArn: [, __expectString, `routingRuleArn`],
    RoutingRuleId: [, __expectString, `routingRuleId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStageCommand
 */
export const de_CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateVpcLinkCommand
 */
export const de_CreateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcLinkCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteAccessLogSettingsCommand
 */
export const de_DeleteAccessLogSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSettingsCommandOutput> => {
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
 * deserializeAws_restJson1DeleteApiCommand
 */
export const de_DeleteApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
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
 * deserializeAws_restJson1DeleteApiMappingCommand
 */
export const de_DeleteApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiMappingCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAuthorizerCommand
 */
export const de_DeleteAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteCorsConfigurationCommand
 */
export const de_DeleteCorsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDomainNameCommand
 */
export const de_DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIntegrationResponseCommand
 */
export const de_DeleteIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationResponseCommandOutput> => {
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
 * deserializeAws_restJson1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRouteCommand
 */
export const de_DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRouteRequestParameterCommand
 */
export const de_DeleteRouteRequestParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteRequestParameterCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRouteResponseCommand
 */
export const de_DeleteRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteResponseCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRouteSettingsCommand
 */
export const de_DeleteRouteSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteSettingsCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRoutingRuleCommand
 */
export const de_DeleteRoutingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoutingRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteStageCommand
 */
export const de_DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVpcLinkCommand
 */
export const de_DeleteVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcLinkCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ExportApiCommand
 */
export const de_ExportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetApiCommand
 */
export const de_GetApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    IpAddressType: [, __expectString, `ipAddressType`],
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
 * deserializeAws_restJson1GetApiMappingCommand
 */
export const de_GetApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetApiMappingsCommand
 */
export const de_GetApiMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetApisCommand
 */
export const de_GetApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetAuthorizerCommand
 */
export const de_GetAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetAuthorizersCommand
 */
export const de_GetAuthorizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetDeploymentsCommand
 */
export const de_GetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetDomainNameCommand
 */
export const de_GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameArn: [, __expectString, `domainNameArn`],
    DomainNameConfigurations: [, (_) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    RoutingMode: [, __expectString, `routingMode`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainNamesCommand
 */
export const de_GetDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetIntegrationCommand
 */
export const de_GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetIntegrationResponseCommand
 */
export const de_GetIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetIntegrationResponsesCommand
 */
export const de_GetIntegrationResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetIntegrationsCommand
 */
export const de_GetIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetModelCommand
 */
export const de_GetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetModelsCommand
 */
export const de_GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetModelTemplateCommand
 */
export const de_GetModelTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRouteCommand
 */
export const de_GetRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRouteResponseCommand
 */
export const de_GetRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRouteResponsesCommand
 */
export const de_GetRouteResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRoutesCommand
 */
export const de_GetRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRoutingRuleCommand
 */
export const de_GetRoutingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Actions: [, (_) => de___listOfRoutingRuleAction(_, context), `actions`],
    Conditions: [, (_) => de___listOfRoutingRuleCondition(_, context), `conditions`],
    Priority: [, __expectInt32, `priority`],
    RoutingRuleArn: [, __expectString, `routingRuleArn`],
    RoutingRuleId: [, __expectString, `routingRuleId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStageCommand
 */
export const de_GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetStagesCommand
 */
export const de_GetStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetTagsCommand
 */
export const de_GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetVpcLinkCommand
 */
export const de_GetVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetVpcLinksCommand
 */
export const de_GetVpcLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ImportApiCommand
 */
export const de_ImportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    IpAddressType: [, __expectString, `ipAddressType`],
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
 * deserializeAws_restJson1ListRoutingRulesCommand
 */
export const de_ListRoutingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    RoutingRules: [, (_) => de___listOfRoutingRule(_, context), `routingRules`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRoutingRuleCommand
 */
export const de_PutRoutingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRoutingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Actions: [, (_) => de___listOfRoutingRuleAction(_, context), `actions`],
    Conditions: [, (_) => de___listOfRoutingRuleCondition(_, context), `conditions`],
    Priority: [, __expectInt32, `priority`],
    RoutingRuleArn: [, __expectString, `routingRuleArn`],
    RoutingRuleId: [, __expectString, `routingRuleId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReimportApiCommand
 */
export const de_ReimportApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReimportApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    IpAddressType: [, __expectString, `ipAddressType`],
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
 * deserializeAws_restJson1ResetAuthorizersCacheCommand
 */
export const de_ResetAuthorizersCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAuthorizersCacheCommandOutput> => {
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
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
 * deserializeAws_restJson1UpdateApiCommand
 */
export const de_UpdateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    IpAddressType: [, __expectString, `ipAddressType`],
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
 * deserializeAws_restJson1UpdateApiMappingCommand
 */
export const de_UpdateApiMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateAuthorizerCommand
 */
export const de_UpdateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateDeploymentCommand
 */
export const de_UpdateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateDomainNameCommand
 */
export const de_UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiMappingSelectionExpression: [, __expectString, `apiMappingSelectionExpression`],
    DomainName: [, __expectString, `domainName`],
    DomainNameArn: [, __expectString, `domainNameArn`],
    DomainNameConfigurations: [, (_) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    RoutingMode: [, __expectString, `routingMode`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIntegrationCommand
 */
export const de_UpdateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateIntegrationResponseCommand
 */
export const de_UpdateIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateModelCommand
 */
export const de_UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateRouteCommand
 */
export const de_UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateRouteResponseCommand
 */
export const de_UpdateRouteResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateStageCommand
 */
export const de_UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateVpcLinkCommand
 */
export const de_UpdateVpcLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.apigatewayv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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
 * serializeAws_restJson1__listOfRoutingRuleAction
 */
const se___listOfRoutingRuleAction = (input: RoutingRuleAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingRuleAction(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfRoutingRuleCondition
 */
const se___listOfRoutingRuleCondition = (input: RoutingRuleCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingRuleCondition(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfRoutingRuleMatchHeaderValue
 */
const se___listOfRoutingRuleMatchHeaderValue = (input: RoutingRuleMatchHeaderValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingRuleMatchHeaderValue(entry, context);
    });
};

// se___listOfSelectionKey omitted.

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
    certificateUploadDate: [, __serializeDateTime, `CertificateUploadDate`],
    domainNameStatus: [, , `DomainNameStatus`],
    domainNameStatusMessage: [, , `DomainNameStatusMessage`],
    endpointType: [, , `EndpointType`],
    hostedZoneId: [, , `HostedZoneId`],
    ipAddressType: [, , `IpAddressType`],
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

/**
 * serializeAws_restJson1RoutingRuleAction
 */
const se_RoutingRuleAction = (input: RoutingRuleAction, context: __SerdeContext): any => {
  return take(input, {
    invokeApi: [, (_) => se_RoutingRuleActionInvokeApi(_, context), `InvokeApi`],
  });
};

/**
 * serializeAws_restJson1RoutingRuleActionInvokeApi
 */
const se_RoutingRuleActionInvokeApi = (input: RoutingRuleActionInvokeApi, context: __SerdeContext): any => {
  return take(input, {
    apiId: [, , `ApiId`],
    stage: [, , `Stage`],
    stripBasePath: [, , `StripBasePath`],
  });
};

/**
 * serializeAws_restJson1RoutingRuleCondition
 */
const se_RoutingRuleCondition = (input: RoutingRuleCondition, context: __SerdeContext): any => {
  return take(input, {
    matchBasePaths: [, (_) => se_RoutingRuleMatchBasePaths(_, context), `MatchBasePaths`],
    matchHeaders: [, (_) => se_RoutingRuleMatchHeaders(_, context), `MatchHeaders`],
  });
};

/**
 * serializeAws_restJson1RoutingRuleMatchBasePaths
 */
const se_RoutingRuleMatchBasePaths = (input: RoutingRuleMatchBasePaths, context: __SerdeContext): any => {
  return take(input, {
    anyOf: [, _json, `AnyOf`],
  });
};

/**
 * serializeAws_restJson1RoutingRuleMatchHeaders
 */
const se_RoutingRuleMatchHeaders = (input: RoutingRuleMatchHeaders, context: __SerdeContext): any => {
  return take(input, {
    anyOf: [, (_) => se___listOfRoutingRuleMatchHeaderValue(_, context), `AnyOf`],
  });
};

/**
 * serializeAws_restJson1RoutingRuleMatchHeaderValue
 */
const se_RoutingRuleMatchHeaderValue = (input: RoutingRuleMatchHeaderValue, context: __SerdeContext): any => {
  return take(input, {
    header: [, , `Header`],
    valueGlob: [, , `ValueGlob`],
  });
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
 * deserializeAws_restJson1__listOfRoutingRule
 */
const de___listOfRoutingRule = (output: any, context: __SerdeContext): RoutingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRoutingRuleAction
 */
const de___listOfRoutingRuleAction = (output: any, context: __SerdeContext): RoutingRuleAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingRuleAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRoutingRuleCondition
 */
const de___listOfRoutingRuleCondition = (output: any, context: __SerdeContext): RoutingRuleCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingRuleCondition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRoutingRuleMatchHeaderValue
 */
const de___listOfRoutingRuleMatchHeaderValue = (
  output: any,
  context: __SerdeContext
): RoutingRuleMatchHeaderValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingRuleMatchHeaderValue(entry, context);
    });
  return retVal;
};

// de___listOfSelectionKey omitted.

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
    IpAddressType: [, __expectString, `ipAddressType`],
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
    DomainNameArn: [, __expectString, `domainNameArn`],
    DomainNameConfigurations: [, (_: any) => de_DomainNameConfigurations(_, context), `domainNameConfigurations`],
    MutualTlsAuthentication: [, (_: any) => de_MutualTlsAuthentication(_, context), `mutualTlsAuthentication`],
    RoutingMode: [, __expectString, `routingMode`],
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
    IpAddressType: [, __expectString, `ipAddressType`],
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
    acc[key as string] = de_ParameterConstraints(value, context);
    return acc;
  }, {} as Record<string, ParameterConstraints>);
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
    acc[key as string] = de_RouteSettings(value, context);
    return acc;
  }, {} as Record<string, RouteSettings>);
};

/**
 * deserializeAws_restJson1RoutingRule
 */
const de_RoutingRule = (output: any, context: __SerdeContext): RoutingRule => {
  return take(output, {
    Actions: [, (_: any) => de___listOfRoutingRuleAction(_, context), `actions`],
    Conditions: [, (_: any) => de___listOfRoutingRuleCondition(_, context), `conditions`],
    Priority: [, __expectInt32, `priority`],
    RoutingRuleArn: [, __expectString, `routingRuleArn`],
    RoutingRuleId: [, __expectString, `routingRuleId`],
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingRuleAction
 */
const de_RoutingRuleAction = (output: any, context: __SerdeContext): RoutingRuleAction => {
  return take(output, {
    InvokeApi: [, (_: any) => de_RoutingRuleActionInvokeApi(_, context), `invokeApi`],
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingRuleActionInvokeApi
 */
const de_RoutingRuleActionInvokeApi = (output: any, context: __SerdeContext): RoutingRuleActionInvokeApi => {
  return take(output, {
    ApiId: [, __expectString, `apiId`],
    Stage: [, __expectString, `stage`],
    StripBasePath: [, __expectBoolean, `stripBasePath`],
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingRuleCondition
 */
const de_RoutingRuleCondition = (output: any, context: __SerdeContext): RoutingRuleCondition => {
  return take(output, {
    MatchBasePaths: [, (_: any) => de_RoutingRuleMatchBasePaths(_, context), `matchBasePaths`],
    MatchHeaders: [, (_: any) => de_RoutingRuleMatchHeaders(_, context), `matchHeaders`],
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingRuleMatchBasePaths
 */
const de_RoutingRuleMatchBasePaths = (output: any, context: __SerdeContext): RoutingRuleMatchBasePaths => {
  return take(output, {
    AnyOf: [, _json, `anyOf`],
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingRuleMatchHeaders
 */
const de_RoutingRuleMatchHeaders = (output: any, context: __SerdeContext): RoutingRuleMatchHeaders => {
  return take(output, {
    AnyOf: [, (_: any) => de___listOfRoutingRuleMatchHeaderValue(_, context), `anyOf`],
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingRuleMatchHeaderValue
 */
const de_RoutingRuleMatchHeaderValue = (output: any, context: __SerdeContext): RoutingRuleMatchHeaderValue => {
  return take(output, {
    Header: [, __expectString, `header`],
    ValueGlob: [, __expectString, `valueGlob`],
  }) as any;
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

const _B = "Basepath";
const _DNI = "DomainNameId";
const _EV = "ExportVersion";
const _FOW = "FailOnWarnings";
const _IE = "IncludeExtensions";
const _MR = "MaxResults";
const _NT = "NextToken";
const _OT = "OutputType";
const _SN = "StageName";
const _TK = "TagKeys";
const _b = "basepath";
const _dNI = "domainNameId";
const _eV = "exportVersion";
const _fOW = "failOnWarnings";
const _iE = "includeExtensions";
const _mR = "maxResults";
const _nT = "nextToken";
const _oT = "outputType";
const _sN = "stageName";
const _tK = "tagKeys";
