// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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
import {
  CreateDomainNameAccessAssociationCommandInput,
  CreateDomainNameAccessAssociationCommandOutput,
} from "../commands/CreateDomainNameAccessAssociationCommand";
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
import {
  DeleteDomainNameAccessAssociationCommandInput,
  DeleteDomainNameAccessAssociationCommandOutput,
} from "../commands/DeleteDomainNameAccessAssociationCommand";
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
import {
  GetDomainNameAccessAssociationsCommandInput,
  GetDomainNameAccessAssociationsCommandOutput,
} from "../commands/GetDomainNameAccessAssociationsCommand";
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
import {
  RejectDomainNameAccessAssociationCommandInput,
  RejectDomainNameAccessAssociationCommandOutput,
} from "../commands/RejectDomainNameAccessAssociationCommand";
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
  ApiKey,
  ApiStage,
  BadRequestException,
  CanarySettings,
  ClientCertificate,
  ConflictException,
  Deployment,
  DeploymentCanarySettings,
  DocumentationPartLocation,
  DocumentationVersion,
  DomainName,
  EndpointConfiguration,
  EndpointType,
  LimitExceededException,
  MethodSetting,
  MutualTlsAuthenticationInput,
  NotFoundException,
  PatchOperation,
  QuotaSettings,
  RestApi,
  ServiceUnavailableException,
  Stage,
  StageKey,
  ThrottleSettings,
  TlsConfig,
  TooManyRequestsException,
  UnauthorizedException,
  UsagePlan,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateApiKeyCommand
 */
export const se_CreateApiKeyCommand = async (
  input: CreateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/apikeys");
  let body: any;
  body = JSON.stringify(
    take(input, {
      customerId: [],
      description: [],
      enabled: [],
      generateDistinctId: [],
      name: [],
      stageKeys: (_) => _json(_),
      tags: (_) => _json(_),
      value: [],
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
  b.bp("/restapis/{restApiId}/authorizers");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authType: [],
      authorizerCredentials: [],
      authorizerResultTtlInSeconds: [],
      authorizerUri: [],
      identitySource: [],
      identityValidationExpression: [],
      name: [],
      providerARNs: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBasePathMappingCommand
 */
export const se_CreateBasePathMappingCommand = async (
  input: CreateBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domainnames/{domainName}/basepathmappings");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      basePath: [],
      restApiId: [],
      stage: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/restapis/{restApiId}/deployments");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      cacheClusterEnabled: [],
      cacheClusterSize: [],
      canarySettings: (_) => se_DeploymentCanarySettings(_, context),
      description: [],
      stageDescription: [],
      stageName: [],
      tracingEnabled: [],
      variables: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDocumentationPartCommand
 */
export const se_CreateDocumentationPartCommand = async (
  input: CreateDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/documentation/parts");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      location: (_) => _json(_),
      properties: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDocumentationVersionCommand
 */
export const se_CreateDocumentationVersionCommand = async (
  input: CreateDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/documentation/versions");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      documentationVersion: [],
      stageName: [],
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
  b.bp("/domainnames");
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificateArn: [],
      certificateBody: [],
      certificateChain: [],
      certificateName: [],
      certificatePrivateKey: [],
      domainName: [],
      endpointConfiguration: (_) => _json(_),
      mutualTlsAuthentication: (_) => _json(_),
      ownershipVerificationCertificateArn: [],
      policy: [],
      regionalCertificateArn: [],
      regionalCertificateName: [],
      routingMode: [],
      securityPolicy: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainNameAccessAssociationCommand
 */
export const se_CreateDomainNameAccessAssociationCommand = async (
  input: CreateDomainNameAccessAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domainnameaccessassociations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessAssociationSource: [],
      accessAssociationSourceType: [],
      domainNameArn: [],
      tags: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/models");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentType: [],
      description: [],
      name: [],
      schema: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRequestValidatorCommand
 */
export const se_CreateRequestValidatorCommand = async (
  input: CreateRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/requestvalidators");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      validateRequestBody: [],
      validateRequestParameters: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResourceCommand
 */
export const se_CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{parentId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("parentId", () => input.parentId!, "{parentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      pathPart: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRestApiCommand
 */
export const se_CreateRestApiCommand = async (
  input: CreateRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis");
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKeySource: [],
      binaryMediaTypes: (_) => _json(_),
      cloneFrom: [],
      description: [],
      disableExecuteApiEndpoint: [],
      endpointConfiguration: (_) => _json(_),
      minimumCompressionSize: [],
      name: [],
      policy: [],
      tags: (_) => _json(_),
      version: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/restapis/{restApiId}/stages");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      cacheClusterEnabled: [],
      cacheClusterSize: [],
      canarySettings: (_) => se_CanarySettings(_, context),
      deploymentId: [],
      description: [],
      documentationVersion: [],
      stageName: [],
      tags: (_) => _json(_),
      tracingEnabled: [],
      variables: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUsagePlanCommand
 */
export const se_CreateUsagePlanCommand = async (
  input: CreateUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/usageplans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiStages: (_) => se_ListOfApiStage(_, context),
      description: [],
      name: [],
      quota: (_) => _json(_),
      tags: (_) => _json(_),
      throttle: (_) => se_ThrottleSettings(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUsagePlanKeyCommand
 */
export const se_CreateUsagePlanKeyCommand = async (
  input: CreateUsagePlanKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/usageplans/{usagePlanId}/keys");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      keyId: [],
      keyType: [],
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
  b.bp("/vpclinks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      tags: (_) => _json(_),
      targetArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiKeyCommand
 */
export const se_DeleteApiKeyCommand = async (
  input: DeleteApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/apikeys/{apiKey}");
  b.p("apiKey", () => input.apiKey!, "{apiKey}", false);
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
  b.bp("/restapis/{restApiId}/authorizers/{authorizerId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("authorizerId", () => input.authorizerId!, "{authorizerId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBasePathMappingCommand
 */
export const se_DeleteBasePathMappingCommand = async (
  input: DeleteBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainnames/{domainName}/basepathmappings/{basePath}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  b.p("basePath", () => input.basePath!, "{basePath}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteClientCertificateCommand
 */
export const se_DeleteClientCertificateCommand = async (
  input: DeleteClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clientcertificates/{clientCertificateId}");
  b.p("clientCertificateId", () => input.clientCertificateId!, "{clientCertificateId}", false);
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
  b.bp("/restapis/{restApiId}/deployments/{deploymentId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("deploymentId", () => input.deploymentId!, "{deploymentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDocumentationPartCommand
 */
export const se_DeleteDocumentationPartCommand = async (
  input: DeleteDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/documentation/parts/{documentationPartId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("documentationPartId", () => input.documentationPartId!, "{documentationPartId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDocumentationVersionCommand
 */
export const se_DeleteDocumentationVersionCommand = async (
  input: DeleteDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/documentation/versions/{documentationVersion}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("documentationVersion", () => input.documentationVersion!, "{documentationVersion}", false);
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
  b.bp("/domainnames/{domainName}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainNameAccessAssociationCommand
 */
export const se_DeleteDomainNameAccessAssociationCommand = async (
  input: DeleteDomainNameAccessAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainnameaccessassociations/{domainNameAccessAssociationArn}");
  b.p(
    "domainNameAccessAssociationArn",
    () => input.domainNameAccessAssociationArn!,
    "{domainNameAccessAssociationArn}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGatewayResponseCommand
 */
export const se_DeleteGatewayResponseCommand = async (
  input: DeleteGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/gatewayresponses/{responseType}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("responseType", () => input.responseType!, "{responseType}", false);
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
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
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
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMethodCommand
 */
export const se_DeleteMethodCommand = async (
  input: DeleteMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMethodResponseCommand
 */
export const se_DeleteMethodResponseCommand = async (
  input: DeleteMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
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
  b.bp("/restapis/{restApiId}/models/{modelName}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("modelName", () => input.modelName!, "{modelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRequestValidatorCommand
 */
export const se_DeleteRequestValidatorCommand = async (
  input: DeleteRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/requestvalidators/{requestValidatorId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("requestValidatorId", () => input.requestValidatorId!, "{requestValidatorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourceCommand
 */
export const se_DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources/{resourceId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRestApiCommand
 */
export const se_DeleteRestApiCommand = async (
  input: DeleteRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/restapis/{restApiId}/stages/{stageName}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUsagePlanCommand
 */
export const se_DeleteUsagePlanCommand = async (
  input: DeleteUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans/{usagePlanId}");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUsagePlanKeyCommand
 */
export const se_DeleteUsagePlanKeyCommand = async (
  input: DeleteUsagePlanKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans/{usagePlanId}/keys/{keyId}");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  b.p("keyId", () => input.keyId!, "{keyId}", false);
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
  b.bp("/vpclinks/{vpcLinkId}");
  b.p("vpcLinkId", () => input.vpcLinkId!, "{vpcLinkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1FlushStageAuthorizersCacheCommand
 */
export const se_FlushStageAuthorizersCacheCommand = async (
  input: FlushStageAuthorizersCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/stages/{stageName}/cache/authorizers");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1FlushStageCacheCommand
 */
export const se_FlushStageCacheCommand = async (
  input: FlushStageCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/stages/{stageName}/cache/data");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateClientCertificateCommand
 */
export const se_GenerateClientCertificateCommand = async (
  input: GenerateClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clientcertificates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountCommand
 */
export const se_GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiKeyCommand
 */
export const se_GetApiKeyCommand = async (
  input: GetApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/apikeys/{apiKey}");
  b.p("apiKey", () => input.apiKey!, "{apiKey}", false);
  const query: any = map({
    [_iV]: [() => input.includeValue !== void 0, () => input[_iV]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiKeysCommand
 */
export const se_GetApiKeysCommand = async (
  input: GetApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/apikeys");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_n]: [, input[_nQ]!],
    [_cI]: [, input[_cI]!],
    [_iVn]: [() => input.includeValues !== void 0, () => input[_iVn]!.toString()],
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
  b.bp("/restapis/{restApiId}/authorizers/{authorizerId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("authorizerId", () => input.authorizerId!, "{authorizerId}", false);
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
  b.bp("/restapis/{restApiId}/authorizers");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBasePathMappingCommand
 */
export const se_GetBasePathMappingCommand = async (
  input: GetBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainnames/{domainName}/basepathmappings/{basePath}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  b.p("basePath", () => input.basePath!, "{basePath}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBasePathMappingsCommand
 */
export const se_GetBasePathMappingsCommand = async (
  input: GetBasePathMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainnames/{domainName}/basepathmappings");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetClientCertificateCommand
 */
export const se_GetClientCertificateCommand = async (
  input: GetClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clientcertificates/{clientCertificateId}");
  b.p("clientCertificateId", () => input.clientCertificateId!, "{clientCertificateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetClientCertificatesCommand
 */
export const se_GetClientCertificatesCommand = async (
  input: GetClientCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clientcertificates");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
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
  b.bp("/restapis/{restApiId}/deployments/{deploymentId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("deploymentId", () => input.deploymentId!, "{deploymentId}", false);
  const query: any = map({
    [_e]: [() => input.embed !== void 0, () => input[_e]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/restapis/{restApiId}/deployments");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentationPartCommand
 */
export const se_GetDocumentationPartCommand = async (
  input: GetDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/documentation/parts/{documentationPartId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("documentationPartId", () => input.documentationPartId!, "{documentationPartId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentationPartsCommand
 */
export const se_GetDocumentationPartsCommand = async (
  input: GetDocumentationPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/documentation/parts");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_t]: [, input[_t]!],
    [_n]: [, input[_nQ]!],
    [_pa]: [, input[_pa]!],
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_lS]: [, input[_lS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentationVersionCommand
 */
export const se_GetDocumentationVersionCommand = async (
  input: GetDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/documentation/versions/{documentationVersion}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("documentationVersion", () => input.documentationVersion!, "{documentationVersion}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentationVersionsCommand
 */
export const se_GetDocumentationVersionsCommand = async (
  input: GetDocumentationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/documentation/versions");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
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
  b.bp("/domainnames/{domainName}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainNameAccessAssociationsCommand
 */
export const se_GetDomainNameAccessAssociationsCommand = async (
  input: GetDomainNameAccessAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainnameaccessassociations");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_rO]: [, input[_rO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/domainnames");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_rO]: [, input[_rO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExportCommand
 */
export const se_GetExportCommand = async (
  input: GetExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ac]: input[_a]!,
  });
  b.bp("/restapis/{restApiId}/stages/{stageName}/exports/{exportType}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
  b.p("exportType", () => input.exportType!, "{exportType}", false);
  const query: any = map({
    ...convertMap(input.parameters),
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGatewayResponseCommand
 */
export const se_GetGatewayResponseCommand = async (
  input: GetGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/gatewayresponses/{responseType}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("responseType", () => input.responseType!, "{responseType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGatewayResponsesCommand
 */
export const se_GetGatewayResponsesCommand = async (
  input: GetGatewayResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/gatewayresponses");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
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
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
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
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMethodCommand
 */
export const se_GetMethodCommand = async (
  input: GetMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMethodResponseCommand
 */
export const se_GetMethodResponseCommand = async (
  input: GetMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/restapis/{restApiId}/models/{modelName}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("modelName", () => input.modelName!, "{modelName}", false);
  const query: any = map({
    [_f]: [() => input.flatten !== void 0, () => input[_f]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/restapis/{restApiId}/models");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
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
  b.bp("/restapis/{restApiId}/models/{modelName}/default_template");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("modelName", () => input.modelName!, "{modelName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRequestValidatorCommand
 */
export const se_GetRequestValidatorCommand = async (
  input: GetRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/requestvalidators/{requestValidatorId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("requestValidatorId", () => input.requestValidatorId!, "{requestValidatorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRequestValidatorsCommand
 */
export const se_GetRequestValidatorsCommand = async (
  input: GetRequestValidatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/requestvalidators");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceCommand
 */
export const se_GetResourceCommand = async (
  input: GetResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources/{resourceId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  const query: any = map({
    [_e]: [() => input.embed !== void 0, () => input[_e]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcesCommand
 */
export const se_GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/resources");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_e]: [() => input.embed !== void 0, () => input[_e]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRestApiCommand
 */
export const se_GetRestApiCommand = async (
  input: GetRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRestApisCommand
 */
export const se_GetRestApisCommand = async (
  input: GetRestApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSdkCommand
 */
export const se_GetSdkCommand = async (input: GetSdkCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
  b.p("sdkType", () => input.sdkType!, "{sdkType}", false);
  const query: any = map({
    ...convertMap(input.parameters),
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSdkTypeCommand
 */
export const se_GetSdkTypeCommand = async (
  input: GetSdkTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdktypes/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSdkTypesCommand
 */
export const se_GetSdkTypesCommand = async (
  input: GetSdkTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdktypes");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
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
  b.bp("/restapis/{restApiId}/stages/{stageName}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
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
  b.bp("/restapis/{restApiId}/stages");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_dI]: [, input[_dI]!],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUsageCommand
 */
export const se_GetUsageCommand = async (
  input: GetUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans/{usagePlanId}/usage");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  const query: any = map({
    [_kI]: [, input[_kI]!],
    [_sD]: [, __expectNonNull(input[_sD]!, `startDate`)],
    [_eD]: [, __expectNonNull(input[_eD]!, `endDate`)],
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUsagePlanCommand
 */
export const se_GetUsagePlanCommand = async (
  input: GetUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans/{usagePlanId}");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUsagePlanKeyCommand
 */
export const se_GetUsagePlanKeyCommand = async (
  input: GetUsagePlanKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans/{usagePlanId}/keys/{keyId}");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  b.p("keyId", () => input.keyId!, "{keyId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUsagePlanKeysCommand
 */
export const se_GetUsagePlanKeysCommand = async (
  input: GetUsagePlanKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans/{usagePlanId}/keys");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
    [_n]: [, input[_nQ]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUsagePlansCommand
 */
export const se_GetUsagePlansCommand = async (
  input: GetUsagePlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/usageplans");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_kI]: [, input[_kI]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/vpclinks/{vpcLinkId}");
  b.p("vpcLinkId", () => input.vpcLinkId!, "{vpcLinkId}", false);
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
  b.bp("/vpclinks");
  const query: any = map({
    [_p]: [, input[_p]!],
    [_l]: [() => input.limit !== void 0, () => input[_l]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportApiKeysCommand
 */
export const se_ImportApiKeysCommand = async (
  input: ImportApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  b.bp("/apikeys");
  const query: any = map({
    [_m]: [, "import"],
    [_fo]: [, __expectNonNull(input[_fo]!, `format`)],
    [_fa]: [() => input.failOnWarnings !== void 0, () => input[_fOW]!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportDocumentationPartsCommand
 */
export const se_ImportDocumentationPartsCommand = async (
  input: ImportDocumentationPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  b.bp("/restapis/{restApiId}/documentation/parts");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    [_m]: [, input[_m]!],
    [_fa]: [() => input.failOnWarnings !== void 0, () => input[_fOW]!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportRestApiCommand
 */
export const se_ImportRestApiCommand = async (
  input: ImportRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  b.bp("/restapis");
  const query: any = map({
    [_m]: [, "import"],
    ...convertMap(input.parameters),
    [_fa]: [() => input.failOnWarnings !== void 0, () => input[_fOW]!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutGatewayResponseCommand
 */
export const se_PutGatewayResponseCommand = async (
  input: PutGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/gatewayresponses/{responseType}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("responseType", () => input.responseType!, "{responseType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      responseParameters: (_) => _json(_),
      responseTemplates: (_) => _json(_),
      statusCode: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutIntegrationCommand
 */
export const se_PutIntegrationCommand = async (
  input: PutIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      cacheKeyParameters: (_) => _json(_),
      cacheNamespace: [],
      connectionId: [],
      connectionType: [],
      contentHandling: [],
      credentials: [],
      httpMethod: [, , `integrationHttpMethod`],
      passthroughBehavior: [],
      requestParameters: (_) => _json(_),
      requestTemplates: (_) => _json(_),
      timeoutInMillis: [],
      tlsConfig: (_) => _json(_),
      type: [],
      uri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutIntegrationResponseCommand
 */
export const se_PutIntegrationResponseCommand = async (
  input: PutIntegrationResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentHandling: [],
      responseParameters: (_) => _json(_),
      responseTemplates: (_) => _json(_),
      selectionPattern: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutMethodCommand
 */
export const se_PutMethodCommand = async (
  input: PutMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKeyRequired: [],
      authorizationScopes: (_) => _json(_),
      authorizationType: [],
      authorizerId: [],
      operationName: [],
      requestModels: (_) => _json(_),
      requestParameters: (_) => _json(_),
      requestValidatorId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutMethodResponseCommand
 */
export const se_PutMethodResponseCommand = async (
  input: PutMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      responseModels: (_) => _json(_),
      responseParameters: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRestApiCommand
 */
export const se_PutRestApiCommand = async (
  input: PutRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  b.bp("/restapis/{restApiId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  const query: any = map({
    ...convertMap(input.parameters),
    [_m]: [, input[_m]!],
    [_fa]: [() => input.failOnWarnings !== void 0, () => input[_fOW]!.toString()],
  });
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectDomainNameAccessAssociationCommand
 */
export const se_RejectDomainNameAccessAssociationCommand = async (
  input: RejectDomainNameAccessAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rejectdomainnameaccessassociations");
  const query: any = map({
    [_dNAAA]: [, __expectNonNull(input[_dNAAA]!, `domainNameAccessAssociationArn`)],
    [_dNA]: [, __expectNonNull(input[_dNA]!, `domainNameArn`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
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
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestInvokeAuthorizerCommand
 */
export const se_TestInvokeAuthorizerCommand = async (
  input: TestInvokeAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/authorizers/{authorizerId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("authorizerId", () => input.authorizerId!, "{authorizerId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalContext: (_) => _json(_),
      body: [],
      headers: (_) => _json(_),
      multiValueHeaders: (_) => _json(_),
      pathWithQueryString: [],
      stageVariables: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestInvokeMethodCommand
 */
export const se_TestInvokeMethodCommand = async (
  input: TestInvokeMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      body: [],
      clientCertificateId: [],
      headers: (_) => _json(_),
      multiValueHeaders: (_) => _json(_),
      pathWithQueryString: [],
      stageVariables: (_) => _json(_),
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
 * serializeAws_restJson1UpdateAccountCommand
 */
export const se_UpdateAccountCommand = async (
  input: UpdateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/account");
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiKeyCommand
 */
export const se_UpdateApiKeyCommand = async (
  input: UpdateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/apikeys/{apiKey}");
  b.p("apiKey", () => input.apiKey!, "{apiKey}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/authorizers/{authorizerId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("authorizerId", () => input.authorizerId!, "{authorizerId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBasePathMappingCommand
 */
export const se_UpdateBasePathMappingCommand = async (
  input: UpdateBasePathMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domainnames/{domainName}/basepathmappings/{basePath}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  b.p("basePath", () => input.basePath!, "{basePath}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateClientCertificateCommand
 */
export const se_UpdateClientCertificateCommand = async (
  input: UpdateClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clientcertificates/{clientCertificateId}");
  b.p("clientCertificateId", () => input.clientCertificateId!, "{clientCertificateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/deployments/{deploymentId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("deploymentId", () => input.deploymentId!, "{deploymentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDocumentationPartCommand
 */
export const se_UpdateDocumentationPartCommand = async (
  input: UpdateDocumentationPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/documentation/parts/{documentationPartId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("documentationPartId", () => input.documentationPartId!, "{documentationPartId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDocumentationVersionCommand
 */
export const se_UpdateDocumentationVersionCommand = async (
  input: UpdateDocumentationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/documentation/versions/{documentationVersion}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("documentationVersion", () => input.documentationVersion!, "{documentationVersion}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/domainnames/{domainName}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  const query: any = map({
    [_dNI]: [, input[_dNI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGatewayResponseCommand
 */
export const se_UpdateGatewayResponseCommand = async (
  input: UpdateGatewayResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/gatewayresponses/{responseType}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("responseType", () => input.responseType!, "{responseType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMethodCommand
 */
export const se_UpdateMethodCommand = async (
  input: UpdateMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMethodResponseCommand
 */
export const se_UpdateMethodResponseCommand = async (
  input: UpdateMethodResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  b.p("httpMethod", () => input.httpMethod!, "{httpMethod}", false);
  b.p("statusCode", () => input.statusCode!, "{statusCode}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/models/{modelName}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("modelName", () => input.modelName!, "{modelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRequestValidatorCommand
 */
export const se_UpdateRequestValidatorCommand = async (
  input: UpdateRequestValidatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/requestvalidators/{requestValidatorId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("requestValidatorId", () => input.requestValidatorId!, "{requestValidatorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResourceCommand
 */
export const se_UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}/resources/{resourceId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("resourceId", () => input.resourceId!, "{resourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRestApiCommand
 */
export const se_UpdateRestApiCommand = async (
  input: UpdateRestApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restapis/{restApiId}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/restapis/{restApiId}/stages/{stageName}");
  b.p("restApiId", () => input.restApiId!, "{restApiId}", false);
  b.p("stageName", () => input.stageName!, "{stageName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUsageCommand
 */
export const se_UpdateUsageCommand = async (
  input: UpdateUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/usageplans/{usagePlanId}/keys/{keyId}/usage");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  b.p("keyId", () => input.keyId!, "{keyId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUsagePlanCommand
 */
export const se_UpdateUsagePlanCommand = async (
  input: UpdateUsagePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/usageplans/{usagePlanId}");
  b.p("usagePlanId", () => input.usagePlanId!, "{usagePlanId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
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
  b.bp("/vpclinks/{vpcLinkId}");
  b.p("vpcLinkId", () => input.vpcLinkId!, "{vpcLinkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      patchOperations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateApiKeyCommand
 */
export const de_CreateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerId: __expectString,
    description: __expectString,
    enabled: __expectBoolean,
    id: __expectString,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stageKeys: _json,
    tags: _json,
    value: __expectString,
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
    authType: __expectString,
    authorizerCredentials: __expectString,
    authorizerResultTtlInSeconds: __expectInt32,
    authorizerUri: __expectString,
    id: __expectString,
    identitySource: __expectString,
    identityValidationExpression: __expectString,
    name: __expectString,
    providerARNs: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBasePathMappingCommand
 */
export const de_CreateBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBasePathMappingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    basePath: __expectString,
    restApiId: __expectString,
    stage: __expectString,
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
    apiSummary: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDocumentationPartCommand
 */
export const de_CreateDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentationPartCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    location: _json,
    properties: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDocumentationVersionCommand
 */
export const de_CreateDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    version: __expectString,
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
    certificateArn: __expectString,
    certificateName: __expectString,
    certificateUploadDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    distributionDomainName: __expectString,
    distributionHostedZoneId: __expectString,
    domainName: __expectString,
    domainNameArn: __expectString,
    domainNameId: __expectString,
    domainNameStatus: __expectString,
    domainNameStatusMessage: __expectString,
    endpointConfiguration: _json,
    managementPolicy: __expectString,
    mutualTlsAuthentication: _json,
    ownershipVerificationCertificateArn: __expectString,
    policy: __expectString,
    regionalCertificateArn: __expectString,
    regionalCertificateName: __expectString,
    regionalDomainName: __expectString,
    regionalHostedZoneId: __expectString,
    routingMode: __expectString,
    securityPolicy: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainNameAccessAssociationCommand
 */
export const de_CreateDomainNameAccessAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameAccessAssociationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessAssociationSource: __expectString,
    accessAssociationSourceType: __expectString,
    domainNameAccessAssociationArn: __expectString,
    domainNameArn: __expectString,
    tags: _json,
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
    contentType: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    schema: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRequestValidatorCommand
 */
export const de_CreateRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRequestValidatorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    validateRequestBody: __expectBoolean,
    validateRequestParameters: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceCommand
 */
export const de_CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    parentId: __expectString,
    path: __expectString,
    pathPart: __expectString,
    resourceMethods: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRestApiCommand
 */
export const de_CreateRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRestApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySource: __expectString,
    binaryMediaTypes: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    disableExecuteApiEndpoint: __expectBoolean,
    endpointConfiguration: _json,
    id: __expectString,
    minimumCompressionSize: __expectInt32,
    name: __expectString,
    policy: __expectString,
    rootResourceId: __expectString,
    tags: _json,
    version: __expectString,
    warnings: _json,
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
    accessLogSettings: _json,
    cacheClusterEnabled: __expectBoolean,
    cacheClusterSize: __expectString,
    cacheClusterStatus: __expectString,
    canarySettings: (_) => de_CanarySettings(_, context),
    clientCertificateId: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    description: __expectString,
    documentationVersion: __expectString,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    methodSettings: (_) => de_MapOfMethodSettings(_, context),
    stageName: __expectString,
    tags: _json,
    tracingEnabled: __expectBoolean,
    variables: _json,
    webAclArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUsagePlanCommand
 */
export const de_CreateUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsagePlanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiStages: (_) => de_ListOfApiStage(_, context),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    productCode: __expectString,
    quota: _json,
    tags: _json,
    throttle: (_) => de_ThrottleSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUsagePlanKeyCommand
 */
export const de_CreateUsagePlanKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsagePlanKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    type: __expectString,
    value: __expectString,
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
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    tags: _json,
    targetArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApiKeyCommand
 */
export const de_DeleteApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAuthorizerCommand
 */
export const de_DeleteAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteBasePathMappingCommand
 */
export const de_DeleteBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBasePathMappingCommandOutput> => {
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
 * deserializeAws_restJson1DeleteClientCertificateCommand
 */
export const de_DeleteClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientCertificateCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDeploymentCommand
 */
export const de_DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDocumentationPartCommand
 */
export const de_DeleteDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentationPartCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDocumentationVersionCommand
 */
export const de_DeleteDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentationVersionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDomainNameCommand
 */
export const de_DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDomainNameAccessAssociationCommand
 */
export const de_DeleteDomainNameAccessAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameAccessAssociationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteGatewayResponseCommand
 */
export const de_DeleteGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayResponseCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMethodCommand
 */
export const de_DeleteMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMethodCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMethodResponseCommand
 */
export const de_DeleteMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMethodResponseCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRequestValidatorCommand
 */
export const de_DeleteRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRequestValidatorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteResourceCommand
 */
export const de_DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRestApiCommand
 */
export const de_DeleteRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRestApiCommandOutput> => {
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
 * deserializeAws_restJson1DeleteStageCommand
 */
export const de_DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
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
 * deserializeAws_restJson1DeleteUsagePlanCommand
 */
export const de_DeleteUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsagePlanCommandOutput> => {
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
 * deserializeAws_restJson1DeleteUsagePlanKeyCommand
 */
export const de_DeleteUsagePlanKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsagePlanKeyCommandOutput> => {
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
 * deserializeAws_restJson1FlushStageAuthorizersCacheCommand
 */
export const de_FlushStageAuthorizersCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushStageAuthorizersCacheCommandOutput> => {
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
 * deserializeAws_restJson1FlushStageCacheCommand
 */
export const de_FlushStageCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushStageCacheCommandOutput> => {
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
 * deserializeAws_restJson1GenerateClientCertificateCommand
 */
export const de_GenerateClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateClientCertificateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientCertificateId: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    expirationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pemEncodedCertificate: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountCommand
 */
export const de_GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeyVersion: __expectString,
    cloudwatchRoleArn: __expectString,
    features: _json,
    throttleSettings: (_) => de_ThrottleSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiKeyCommand
 */
export const de_GetApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerId: __expectString,
    description: __expectString,
    enabled: __expectBoolean,
    id: __expectString,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stageKeys: _json,
    tags: _json,
    value: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiKeysCommand
 */
export const de_GetApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, (_) => de_ListOfApiKey(_, context), `item`],
    position: __expectString,
    warnings: _json,
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
    authType: __expectString,
    authorizerCredentials: __expectString,
    authorizerResultTtlInSeconds: __expectInt32,
    authorizerUri: __expectString,
    id: __expectString,
    identitySource: __expectString,
    identityValidationExpression: __expectString,
    name: __expectString,
    providerARNs: _json,
    type: __expectString,
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
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBasePathMappingCommand
 */
export const de_GetBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBasePathMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    basePath: __expectString,
    restApiId: __expectString,
    stage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBasePathMappingsCommand
 */
export const de_GetBasePathMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBasePathMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetClientCertificateCommand
 */
export const de_GetClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClientCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientCertificateId: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    expirationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pemEncodedCertificate: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetClientCertificatesCommand
 */
export const de_GetClientCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClientCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, (_) => de_ListOfClientCertificate(_, context), `item`],
    position: __expectString,
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
    apiSummary: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
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
    items: [, (_) => de_ListOfDeployment(_, context), `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentationPartCommand
 */
export const de_GetDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    location: _json,
    properties: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentationPartsCommand
 */
export const de_GetDocumentationPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentationVersionCommand
 */
export const de_GetDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentationVersionsCommand
 */
export const de_GetDocumentationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, (_) => de_ListOfDocumentationVersion(_, context), `item`],
    position: __expectString,
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
    certificateArn: __expectString,
    certificateName: __expectString,
    certificateUploadDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    distributionDomainName: __expectString,
    distributionHostedZoneId: __expectString,
    domainName: __expectString,
    domainNameArn: __expectString,
    domainNameId: __expectString,
    domainNameStatus: __expectString,
    domainNameStatusMessage: __expectString,
    endpointConfiguration: _json,
    managementPolicy: __expectString,
    mutualTlsAuthentication: _json,
    ownershipVerificationCertificateArn: __expectString,
    policy: __expectString,
    regionalCertificateArn: __expectString,
    regionalCertificateName: __expectString,
    regionalDomainName: __expectString,
    regionalHostedZoneId: __expectString,
    routingMode: __expectString,
    securityPolicy: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainNameAccessAssociationsCommand
 */
export const de_GetDomainNameAccessAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameAccessAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
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
    items: [, (_) => de_ListOfDomainName(_, context), `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExportCommand
 */
export const de_GetExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_cD]: [, output.headers[_cd]],
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetGatewayResponseCommand
 */
export const de_GetGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultResponse: __expectBoolean,
    responseParameters: _json,
    responseTemplates: _json,
    responseType: __expectString,
    statusCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGatewayResponsesCommand
 */
export const de_GetGatewayResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
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
    cacheKeyParameters: _json,
    cacheNamespace: __expectString,
    connectionId: __expectString,
    connectionType: __expectString,
    contentHandling: __expectString,
    credentials: __expectString,
    httpMethod: __expectString,
    integrationResponses: _json,
    passthroughBehavior: __expectString,
    requestParameters: _json,
    requestTemplates: _json,
    timeoutInMillis: __expectInt32,
    tlsConfig: _json,
    type: __expectString,
    uri: __expectString,
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
    contentHandling: __expectString,
    responseParameters: _json,
    responseTemplates: _json,
    selectionPattern: __expectString,
    statusCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMethodCommand
 */
export const de_GetMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeyRequired: __expectBoolean,
    authorizationScopes: _json,
    authorizationType: __expectString,
    authorizerId: __expectString,
    httpMethod: __expectString,
    methodIntegration: _json,
    methodResponses: _json,
    operationName: __expectString,
    requestModels: _json,
    requestParameters: _json,
    requestValidatorId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMethodResponseCommand
 */
export const de_GetMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMethodResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    responseModels: _json,
    responseParameters: _json,
    statusCode: __expectString,
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
    contentType: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    schema: __expectString,
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
    items: [, _json, `item`],
    position: __expectString,
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
    value: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRequestValidatorCommand
 */
export const de_GetRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestValidatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    validateRequestBody: __expectBoolean,
    validateRequestParameters: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRequestValidatorsCommand
 */
export const de_GetRequestValidatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestValidatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceCommand
 */
export const de_GetResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    parentId: __expectString,
    path: __expectString,
    pathPart: __expectString,
    resourceMethods: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcesCommand
 */
export const de_GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRestApiCommand
 */
export const de_GetRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySource: __expectString,
    binaryMediaTypes: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    disableExecuteApiEndpoint: __expectBoolean,
    endpointConfiguration: _json,
    id: __expectString,
    minimumCompressionSize: __expectInt32,
    name: __expectString,
    policy: __expectString,
    rootResourceId: __expectString,
    tags: _json,
    version: __expectString,
    warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRestApisCommand
 */
export const de_GetRestApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, (_) => de_ListOfRestApi(_, context), `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSdkCommand
 */
export const de_GetSdkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_cD]: [, output.headers[_cd]],
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetSdkTypeCommand
 */
export const de_GetSdkTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationProperties: _json,
    description: __expectString,
    friendlyName: __expectString,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSdkTypesCommand
 */
export const de_GetSdkTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSdkTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
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
    accessLogSettings: _json,
    cacheClusterEnabled: __expectBoolean,
    cacheClusterSize: __expectString,
    cacheClusterStatus: __expectString,
    canarySettings: (_) => de_CanarySettings(_, context),
    clientCertificateId: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    description: __expectString,
    documentationVersion: __expectString,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    methodSettings: (_) => de_MapOfMethodSettings(_, context),
    stageName: __expectString,
    tags: _json,
    tracingEnabled: __expectBoolean,
    variables: _json,
    webAclArn: __expectString,
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
    item: (_) => de_ListOfStage(_, context),
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUsageCommand
 */
export const de_GetUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endDate: __expectString,
    items: [, _json, `values`],
    position: __expectString,
    startDate: __expectString,
    usagePlanId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUsagePlanCommand
 */
export const de_GetUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiStages: (_) => de_ListOfApiStage(_, context),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    productCode: __expectString,
    quota: _json,
    tags: _json,
    throttle: (_) => de_ThrottleSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUsagePlanKeyCommand
 */
export const de_GetUsagePlanKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    type: __expectString,
    value: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUsagePlanKeysCommand
 */
export const de_GetUsagePlanKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlanKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUsagePlansCommand
 */
export const de_GetUsagePlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsagePlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: [, (_) => de_ListOfUsagePlan(_, context), `item`],
    position: __expectString,
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
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    tags: _json,
    targetArns: _json,
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
    items: [, _json, `item`],
    position: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportApiKeysCommand
 */
export const de_ImportApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportApiKeysCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ids: _json,
    warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportDocumentationPartsCommand
 */
export const de_ImportDocumentationPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDocumentationPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ids: _json,
    warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportRestApiCommand
 */
export const de_ImportRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportRestApiCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySource: __expectString,
    binaryMediaTypes: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    disableExecuteApiEndpoint: __expectBoolean,
    endpointConfiguration: _json,
    id: __expectString,
    minimumCompressionSize: __expectInt32,
    name: __expectString,
    policy: __expectString,
    rootResourceId: __expectString,
    tags: _json,
    version: __expectString,
    warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutGatewayResponseCommand
 */
export const de_PutGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGatewayResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultResponse: __expectBoolean,
    responseParameters: _json,
    responseTemplates: _json,
    responseType: __expectString,
    statusCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutIntegrationCommand
 */
export const de_PutIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cacheKeyParameters: _json,
    cacheNamespace: __expectString,
    connectionId: __expectString,
    connectionType: __expectString,
    contentHandling: __expectString,
    credentials: __expectString,
    httpMethod: __expectString,
    integrationResponses: _json,
    passthroughBehavior: __expectString,
    requestParameters: _json,
    requestTemplates: _json,
    timeoutInMillis: __expectInt32,
    tlsConfig: _json,
    type: __expectString,
    uri: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutIntegrationResponseCommand
 */
export const de_PutIntegrationResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentHandling: __expectString,
    responseParameters: _json,
    responseTemplates: _json,
    selectionPattern: __expectString,
    statusCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutMethodCommand
 */
export const de_PutMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMethodCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeyRequired: __expectBoolean,
    authorizationScopes: _json,
    authorizationType: __expectString,
    authorizerId: __expectString,
    httpMethod: __expectString,
    methodIntegration: _json,
    methodResponses: _json,
    operationName: __expectString,
    requestModels: _json,
    requestParameters: _json,
    requestValidatorId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutMethodResponseCommand
 */
export const de_PutMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMethodResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    responseModels: _json,
    responseParameters: _json,
    statusCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRestApiCommand
 */
export const de_PutRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRestApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySource: __expectString,
    binaryMediaTypes: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    disableExecuteApiEndpoint: __expectBoolean,
    endpointConfiguration: _json,
    id: __expectString,
    minimumCompressionSize: __expectInt32,
    name: __expectString,
    policy: __expectString,
    rootResourceId: __expectString,
    tags: _json,
    version: __expectString,
    warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectDomainNameAccessAssociationCommand
 */
export const de_RejectDomainNameAccessAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDomainNameAccessAssociationCommandOutput> => {
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
 * deserializeAws_restJson1TestInvokeAuthorizerCommand
 */
export const de_TestInvokeAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorization: _json,
    claims: _json,
    clientStatus: __expectInt32,
    latency: __expectLong,
    log: __expectString,
    policy: __expectString,
    principalId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TestInvokeMethodCommand
 */
export const de_TestInvokeMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    body: __expectString,
    headers: _json,
    latency: __expectLong,
    log: __expectString,
    multiValueHeaders: _json,
    status: __expectInt32,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1UpdateAccountCommand
 */
export const de_UpdateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeyVersion: __expectString,
    cloudwatchRoleArn: __expectString,
    features: _json,
    throttleSettings: (_) => de_ThrottleSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiKeyCommand
 */
export const de_UpdateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerId: __expectString,
    description: __expectString,
    enabled: __expectBoolean,
    id: __expectString,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stageKeys: _json,
    tags: _json,
    value: __expectString,
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
    authType: __expectString,
    authorizerCredentials: __expectString,
    authorizerResultTtlInSeconds: __expectInt32,
    authorizerUri: __expectString,
    id: __expectString,
    identitySource: __expectString,
    identityValidationExpression: __expectString,
    name: __expectString,
    providerARNs: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBasePathMappingCommand
 */
export const de_UpdateBasePathMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBasePathMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    basePath: __expectString,
    restApiId: __expectString,
    stage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClientCertificateCommand
 */
export const de_UpdateClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClientCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientCertificateId: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    expirationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pemEncodedCertificate: __expectString,
    tags: _json,
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
    apiSummary: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDocumentationPartCommand
 */
export const de_UpdateDocumentationPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentationPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    location: _json,
    properties: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDocumentationVersionCommand
 */
export const de_UpdateDocumentationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    version: __expectString,
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
    certificateArn: __expectString,
    certificateName: __expectString,
    certificateUploadDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    distributionDomainName: __expectString,
    distributionHostedZoneId: __expectString,
    domainName: __expectString,
    domainNameArn: __expectString,
    domainNameId: __expectString,
    domainNameStatus: __expectString,
    domainNameStatusMessage: __expectString,
    endpointConfiguration: _json,
    managementPolicy: __expectString,
    mutualTlsAuthentication: _json,
    ownershipVerificationCertificateArn: __expectString,
    policy: __expectString,
    regionalCertificateArn: __expectString,
    regionalCertificateName: __expectString,
    regionalDomainName: __expectString,
    regionalHostedZoneId: __expectString,
    routingMode: __expectString,
    securityPolicy: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayResponseCommand
 */
export const de_UpdateGatewayResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultResponse: __expectBoolean,
    responseParameters: _json,
    responseTemplates: _json,
    responseType: __expectString,
    statusCode: __expectString,
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
    cacheKeyParameters: _json,
    cacheNamespace: __expectString,
    connectionId: __expectString,
    connectionType: __expectString,
    contentHandling: __expectString,
    credentials: __expectString,
    httpMethod: __expectString,
    integrationResponses: _json,
    passthroughBehavior: __expectString,
    requestParameters: _json,
    requestTemplates: _json,
    timeoutInMillis: __expectInt32,
    tlsConfig: _json,
    type: __expectString,
    uri: __expectString,
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
    contentHandling: __expectString,
    responseParameters: _json,
    responseTemplates: _json,
    selectionPattern: __expectString,
    statusCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMethodCommand
 */
export const de_UpdateMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeyRequired: __expectBoolean,
    authorizationScopes: _json,
    authorizationType: __expectString,
    authorizerId: __expectString,
    httpMethod: __expectString,
    methodIntegration: _json,
    methodResponses: _json,
    operationName: __expectString,
    requestModels: _json,
    requestParameters: _json,
    requestValidatorId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMethodResponseCommand
 */
export const de_UpdateMethodResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMethodResponseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    responseModels: _json,
    responseParameters: _json,
    statusCode: __expectString,
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
    contentType: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    schema: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRequestValidatorCommand
 */
export const de_UpdateRequestValidatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRequestValidatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    name: __expectString,
    validateRequestBody: __expectBoolean,
    validateRequestParameters: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceCommand
 */
export const de_UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    parentId: __expectString,
    path: __expectString,
    pathPart: __expectString,
    resourceMethods: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRestApiCommand
 */
export const de_UpdateRestApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRestApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySource: __expectString,
    binaryMediaTypes: _json,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    disableExecuteApiEndpoint: __expectBoolean,
    endpointConfiguration: _json,
    id: __expectString,
    minimumCompressionSize: __expectInt32,
    name: __expectString,
    policy: __expectString,
    rootResourceId: __expectString,
    tags: _json,
    version: __expectString,
    warnings: _json,
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
    accessLogSettings: _json,
    cacheClusterEnabled: __expectBoolean,
    cacheClusterSize: __expectString,
    cacheClusterStatus: __expectString,
    canarySettings: (_) => de_CanarySettings(_, context),
    clientCertificateId: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    description: __expectString,
    documentationVersion: __expectString,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    methodSettings: (_) => de_MapOfMethodSettings(_, context),
    stageName: __expectString,
    tags: _json,
    tracingEnabled: __expectBoolean,
    variables: _json,
    webAclArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUsageCommand
 */
export const de_UpdateUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endDate: __expectString,
    items: [, _json, `values`],
    position: __expectString,
    startDate: __expectString,
    usagePlanId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUsagePlanCommand
 */
export const de_UpdateUsagePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsagePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiStages: (_) => de_ListOfApiStage(_, context),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    productCode: __expectString,
    quota: _json,
    tags: _json,
    throttle: (_) => de_ThrottleSettings(_, context),
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
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    tags: _json,
    targetArns: _json,
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
    case "com.amazonaws.apigateway#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
    message: __expectString,
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({
    [_rAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({
    [_rAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
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
  const contents: any = map({
    [_rAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ApiStage
 */
const se_ApiStage = (input: ApiStage, context: __SerdeContext): any => {
  return take(input, {
    apiId: [],
    stage: [],
    throttle: (_) => se_MapOfApiStageThrottleSettings(_, context),
  });
};

/**
 * serializeAws_restJson1CanarySettings
 */
const se_CanarySettings = (input: CanarySettings, context: __SerdeContext): any => {
  return take(input, {
    deploymentId: [],
    percentTraffic: __serializeFloat,
    stageVariableOverrides: _json,
    useStageCache: [],
  });
};

/**
 * serializeAws_restJson1DeploymentCanarySettings
 */
const se_DeploymentCanarySettings = (input: DeploymentCanarySettings, context: __SerdeContext): any => {
  return take(input, {
    percentTraffic: __serializeFloat,
    stageVariableOverrides: _json,
    useStageCache: [],
  });
};

// se_DocumentationPartLocation omitted.

// se_EndpointConfiguration omitted.

/**
 * serializeAws_restJson1ListOfApiStage
 */
const se_ListOfApiStage = (input: ApiStage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ApiStage(entry, context);
    });
};

// se_ListOfARNs omitted.

// se_ListOfEndpointType omitted.

// se_ListOfPatchOperation omitted.

// se_ListOfStageKeys omitted.

// se_ListOfString omitted.

/**
 * serializeAws_restJson1MapOfApiStageThrottleSettings
 */
const se_MapOfApiStageThrottleSettings = (input: Record<string, ThrottleSettings>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ThrottleSettings(value, context);
    return acc;
  }, {});
};

// se_MapOfStringToBoolean omitted.

// se_MapOfStringToList omitted.

// se_MapOfStringToString omitted.

// se_MutualTlsAuthenticationInput omitted.

// se_PatchOperation omitted.

// se_QuotaSettings omitted.

// se_StageKey omitted.

/**
 * serializeAws_restJson1ThrottleSettings
 */
const se_ThrottleSettings = (input: ThrottleSettings, context: __SerdeContext): any => {
  return take(input, {
    burstLimit: [],
    rateLimit: __serializeFloat,
  });
};

// se_TlsConfig omitted.

// de_AccessLogSettings omitted.

/**
 * deserializeAws_restJson1ApiKey
 */
const de_ApiKey = (output: any, context: __SerdeContext): ApiKey => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerId: __expectString,
    description: __expectString,
    enabled: __expectBoolean,
    id: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stageKeys: _json,
    tags: _json,
    value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ApiStage
 */
const de_ApiStage = (output: any, context: __SerdeContext): ApiStage => {
  return take(output, {
    apiId: __expectString,
    stage: __expectString,
    throttle: (_: any) => de_MapOfApiStageThrottleSettings(_, context),
  }) as any;
};

// de_Authorizer omitted.

// de_BasePathMapping omitted.

/**
 * deserializeAws_restJson1CanarySettings
 */
const de_CanarySettings = (output: any, context: __SerdeContext): CanarySettings => {
  return take(output, {
    deploymentId: __expectString,
    percentTraffic: __limitedParseDouble,
    stageVariableOverrides: _json,
    useStageCache: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1ClientCertificate
 */
const de_ClientCertificate = (output: any, context: __SerdeContext): ClientCertificate => {
  return take(output, {
    clientCertificateId: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    expirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pemEncodedCertificate: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return take(output, {
    apiSummary: _json,
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
  }) as any;
};

// de_DocumentationPart omitted.

// de_DocumentationPartLocation omitted.

/**
 * deserializeAws_restJson1DocumentationVersion
 */
const de_DocumentationVersion = (output: any, context: __SerdeContext): DocumentationVersion => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainName
 */
const de_DomainName = (output: any, context: __SerdeContext): DomainName => {
  return take(output, {
    certificateArn: __expectString,
    certificateName: __expectString,
    certificateUploadDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    distributionDomainName: __expectString,
    distributionHostedZoneId: __expectString,
    domainName: __expectString,
    domainNameArn: __expectString,
    domainNameId: __expectString,
    domainNameStatus: __expectString,
    domainNameStatusMessage: __expectString,
    endpointConfiguration: _json,
    managementPolicy: __expectString,
    mutualTlsAuthentication: _json,
    ownershipVerificationCertificateArn: __expectString,
    policy: __expectString,
    regionalCertificateArn: __expectString,
    regionalCertificateName: __expectString,
    regionalDomainName: __expectString,
    regionalHostedZoneId: __expectString,
    routingMode: __expectString,
    securityPolicy: __expectString,
    tags: _json,
  }) as any;
};

// de_DomainNameAccessAssociation omitted.

// de_EndpointConfiguration omitted.

// de_GatewayResponse omitted.

// de_Integration omitted.

// de_IntegrationResponse omitted.

/**
 * deserializeAws_restJson1ListOfApiKey
 */
const de_ListOfApiKey = (output: any, context: __SerdeContext): ApiKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApiKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfApiStage
 */
const de_ListOfApiStage = (output: any, context: __SerdeContext): ApiStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApiStage(entry, context);
    });
  return retVal;
};

// de_ListOfARNs omitted.

// de_ListOfAuthorizer omitted.

// de_ListOfBasePathMapping omitted.

/**
 * deserializeAws_restJson1ListOfClientCertificate
 */
const de_ListOfClientCertificate = (output: any, context: __SerdeContext): ClientCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClientCertificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfDeployment
 */
const de_ListOfDeployment = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Deployment(entry, context);
    });
  return retVal;
};

// de_ListOfDocumentationPart omitted.

/**
 * deserializeAws_restJson1ListOfDocumentationVersion
 */
const de_ListOfDocumentationVersion = (output: any, context: __SerdeContext): DocumentationVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentationVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfDomainName
 */
const de_ListOfDomainName = (output: any, context: __SerdeContext): DomainName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainName(entry, context);
    });
  return retVal;
};

// de_ListOfDomainNameAccessAssociation omitted.

// de_ListOfEndpointType omitted.

// de_ListOfGatewayResponse omitted.

// de_ListOfLong omitted.

// de_ListOfModel omitted.

// de_ListOfRequestValidator omitted.

// de_ListOfResource omitted.

/**
 * deserializeAws_restJson1ListOfRestApi
 */
const de_ListOfRestApi = (output: any, context: __SerdeContext): RestApi[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RestApi(entry, context);
    });
  return retVal;
};

// de_ListOfSdkConfigurationProperty omitted.

// de_ListOfSdkType omitted.

/**
 * deserializeAws_restJson1ListOfStage
 */
const de_ListOfStage = (output: any, context: __SerdeContext): Stage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Stage(entry, context);
    });
  return retVal;
};

// de_ListOfString omitted.

// de_ListOfUsage omitted.

/**
 * deserializeAws_restJson1ListOfUsagePlan
 */
const de_ListOfUsagePlan = (output: any, context: __SerdeContext): UsagePlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsagePlan(entry, context);
    });
  return retVal;
};

// de_ListOfUsagePlanKey omitted.

// de_ListOfVpcLink omitted.

/**
 * deserializeAws_restJson1MapOfApiStageThrottleSettings
 */
const de_MapOfApiStageThrottleSettings = (output: any, context: __SerdeContext): Record<string, ThrottleSettings> => {
  return Object.entries(output).reduce((acc: Record<string, ThrottleSettings>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ThrottleSettings(value, context);
    return acc;
  }, {} as Record<string, ThrottleSettings>);
};

// de_MapOfIntegrationResponse omitted.

// de_MapOfKeyUsages omitted.

// de_MapOfMethod omitted.

// de_MapOfMethodResponse omitted.

/**
 * deserializeAws_restJson1MapOfMethodSettings
 */
const de_MapOfMethodSettings = (output: any, context: __SerdeContext): Record<string, MethodSetting> => {
  return Object.entries(output).reduce((acc: Record<string, MethodSetting>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_MethodSetting(value, context);
    return acc;
  }, {} as Record<string, MethodSetting>);
};

// de_MapOfMethodSnapshot omitted.

// de_MapOfStringToBoolean omitted.

// de_MapOfStringToList omitted.

// de_MapOfStringToString omitted.

// de_Method omitted.

// de_MethodResponse omitted.

/**
 * deserializeAws_restJson1MethodSetting
 */
const de_MethodSetting = (output: any, context: __SerdeContext): MethodSetting => {
  return take(output, {
    cacheDataEncrypted: __expectBoolean,
    cacheTtlInSeconds: __expectInt32,
    cachingEnabled: __expectBoolean,
    dataTraceEnabled: __expectBoolean,
    loggingLevel: __expectString,
    metricsEnabled: __expectBoolean,
    requireAuthorizationForCacheControl: __expectBoolean,
    throttlingBurstLimit: __expectInt32,
    throttlingRateLimit: __limitedParseDouble,
    unauthorizedCacheControlHeaderStrategy: __expectString,
  }) as any;
};

// de_MethodSnapshot omitted.

// de_Model omitted.

// de_MutualTlsAuthentication omitted.

// de_PathToMapOfMethodSnapshot omitted.

// de_QuotaSettings omitted.

// de_RequestValidator omitted.

// de_Resource omitted.

/**
 * deserializeAws_restJson1RestApi
 */
const de_RestApi = (output: any, context: __SerdeContext): RestApi => {
  return take(output, {
    apiKeySource: __expectString,
    binaryMediaTypes: _json,
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    disableExecuteApiEndpoint: __expectBoolean,
    endpointConfiguration: _json,
    id: __expectString,
    minimumCompressionSize: __expectInt32,
    name: __expectString,
    policy: __expectString,
    rootResourceId: __expectString,
    tags: _json,
    version: __expectString,
    warnings: _json,
  }) as any;
};

// de_SdkConfigurationProperty omitted.

// de_SdkType omitted.

/**
 * deserializeAws_restJson1Stage
 */
const de_Stage = (output: any, context: __SerdeContext): Stage => {
  return take(output, {
    accessLogSettings: _json,
    cacheClusterEnabled: __expectBoolean,
    cacheClusterSize: __expectString,
    cacheClusterStatus: __expectString,
    canarySettings: (_: any) => de_CanarySettings(_, context),
    clientCertificateId: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    description: __expectString,
    documentationVersion: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    methodSettings: (_: any) => de_MapOfMethodSettings(_, context),
    stageName: __expectString,
    tags: _json,
    tracingEnabled: __expectBoolean,
    variables: _json,
    webAclArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ThrottleSettings
 */
const de_ThrottleSettings = (output: any, context: __SerdeContext): ThrottleSettings => {
  return take(output, {
    burstLimit: __expectInt32,
    rateLimit: __limitedParseDouble,
  }) as any;
};

// de_TlsConfig omitted.

/**
 * deserializeAws_restJson1UsagePlan
 */
const de_UsagePlan = (output: any, context: __SerdeContext): UsagePlan => {
  return take(output, {
    apiStages: (_: any) => de_ListOfApiStage(_, context),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    productCode: __expectString,
    quota: _json,
    tags: _json,
    throttle: (_: any) => de_ThrottleSettings(_, context),
  }) as any;
};

// de_UsagePlanKey omitted.

// de_VpcLink omitted.

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

const _a = "accepts";
const _ac = "accept";
const _cD = "contentDisposition";
const _cI = "customerId";
const _cT = "contentType";
const _cd = "content-disposition";
const _ct = "content-type";
const _dI = "deploymentId";
const _dNA = "domainNameArn";
const _dNAAA = "domainNameAccessAssociationArn";
const _dNI = "domainNameId";
const _e = "embed";
const _eD = "endDate";
const _f = "flatten";
const _fOW = "failOnWarnings";
const _fa = "failonwarnings";
const _fo = "format";
const _iV = "includeValue";
const _iVn = "includeValues";
const _kI = "keyId";
const _l = "limit";
const _lS = "locationStatus";
const _m = "mode";
const _n = "name";
const _nQ = "nameQuery";
const _p = "position";
const _pa = "path";
const _rAS = "retryAfterSeconds";
const _rO = "resourceOwner";
const _ra = "retry-after";
const _sD = "startDate";
const _t = "type";
const _tK = "tagKeys";
