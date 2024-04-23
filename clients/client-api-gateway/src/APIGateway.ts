// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { APIGatewayClient, APIGatewayClientConfig } from "./APIGatewayClient";
import {
  CreateApiKeyCommand,
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
} from "./commands/CreateApiKeyCommand";
import {
  CreateAuthorizerCommand,
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
} from "./commands/CreateAuthorizerCommand";
import {
  CreateBasePathMappingCommand,
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDocumentationPartCommand,
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand";
import {
  CreateDocumentationVersionCommand,
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand";
import {
  CreateDomainNameCommand,
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateRequestValidatorCommand,
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand";
import {
  CreateResourceCommand,
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import {
  CreateRestApiCommand,
  CreateRestApiCommandInput,
  CreateRestApiCommandOutput,
} from "./commands/CreateRestApiCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateUsagePlanCommand,
  CreateUsagePlanCommandInput,
  CreateUsagePlanCommandOutput,
} from "./commands/CreateUsagePlanCommand";
import {
  CreateUsagePlanKeyCommand,
  CreateUsagePlanKeyCommandInput,
  CreateUsagePlanKeyCommandOutput,
} from "./commands/CreateUsagePlanKeyCommand";
import {
  CreateVpcLinkCommand,
  CreateVpcLinkCommandInput,
  CreateVpcLinkCommandOutput,
} from "./commands/CreateVpcLinkCommand";
import {
  DeleteApiKeyCommand,
  DeleteApiKeyCommandInput,
  DeleteApiKeyCommandOutput,
} from "./commands/DeleteApiKeyCommand";
import {
  DeleteAuthorizerCommand,
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput,
} from "./commands/DeleteAuthorizerCommand";
import {
  DeleteBasePathMappingCommand,
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand";
import {
  DeleteClientCertificateCommand,
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DeleteDocumentationPartCommand,
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand";
import {
  DeleteDocumentationVersionCommand,
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand";
import {
  DeleteDomainNameCommand,
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
import {
  DeleteGatewayResponseCommand,
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand";
import {
  DeleteIntegrationCommand,
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommand,
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import {
  DeleteMethodCommand,
  DeleteMethodCommandInput,
  DeleteMethodCommandOutput,
} from "./commands/DeleteMethodCommand";
import {
  DeleteMethodResponseCommand,
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteRequestValidatorCommand,
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand";
import {
  DeleteResourceCommand,
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import {
  DeleteRestApiCommand,
  DeleteRestApiCommandInput,
  DeleteRestApiCommandOutput,
} from "./commands/DeleteRestApiCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteUsagePlanCommand,
  DeleteUsagePlanCommandInput,
  DeleteUsagePlanCommandOutput,
} from "./commands/DeleteUsagePlanCommand";
import {
  DeleteUsagePlanKeyCommand,
  DeleteUsagePlanKeyCommandInput,
  DeleteUsagePlanKeyCommandOutput,
} from "./commands/DeleteUsagePlanKeyCommand";
import {
  DeleteVpcLinkCommand,
  DeleteVpcLinkCommandInput,
  DeleteVpcLinkCommandOutput,
} from "./commands/DeleteVpcLinkCommand";
import {
  FlushStageAuthorizersCacheCommand,
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand";
import {
  FlushStageCacheCommand,
  FlushStageCacheCommandInput,
  FlushStageCacheCommandOutput,
} from "./commands/FlushStageCacheCommand";
import {
  GenerateClientCertificateCommand,
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand";
import { GetAccountCommand, GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetApiKeyCommand, GetApiKeyCommandInput, GetApiKeyCommandOutput } from "./commands/GetApiKeyCommand";
import { GetApiKeysCommand, GetApiKeysCommandInput, GetApiKeysCommandOutput } from "./commands/GetApiKeysCommand";
import {
  GetAuthorizerCommand,
  GetAuthorizerCommandInput,
  GetAuthorizerCommandOutput,
} from "./commands/GetAuthorizerCommand";
import {
  GetAuthorizersCommand,
  GetAuthorizersCommandInput,
  GetAuthorizersCommandOutput,
} from "./commands/GetAuthorizersCommand";
import {
  GetBasePathMappingCommand,
  GetBasePathMappingCommandInput,
  GetBasePathMappingCommandOutput,
} from "./commands/GetBasePathMappingCommand";
import {
  GetBasePathMappingsCommand,
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand";
import {
  GetClientCertificateCommand,
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand";
import {
  GetClientCertificatesCommand,
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentsCommand,
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
} from "./commands/GetDeploymentsCommand";
import {
  GetDocumentationPartCommand,
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand";
import {
  GetDocumentationPartsCommand,
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand";
import {
  GetDocumentationVersionCommand,
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand";
import {
  GetDocumentationVersionsCommand,
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand";
import {
  GetDomainNameCommand,
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
} from "./commands/GetDomainNameCommand";
import {
  GetDomainNamesCommand,
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
} from "./commands/GetDomainNamesCommand";
import { GetExportCommand, GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import {
  GetGatewayResponseCommand,
  GetGatewayResponseCommandInput,
  GetGatewayResponseCommandOutput,
} from "./commands/GetGatewayResponseCommand";
import {
  GetGatewayResponsesCommand,
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand";
import {
  GetIntegrationCommand,
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommand,
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import { GetMethodCommand, GetMethodCommandInput, GetMethodCommandOutput } from "./commands/GetMethodCommand";
import {
  GetMethodResponseCommand,
  GetMethodResponseCommandInput,
  GetMethodResponseCommandOutput,
} from "./commands/GetMethodResponseCommand";
import { GetModelCommand, GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetModelTemplateCommand,
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput,
} from "./commands/GetModelTemplateCommand";
import {
  GetRequestValidatorCommand,
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand";
import {
  GetRequestValidatorsCommand,
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand";
import { GetResourceCommand, GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "./commands/GetResourcesCommand";
import { GetRestApiCommand, GetRestApiCommandInput, GetRestApiCommandOutput } from "./commands/GetRestApiCommand";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand";
import { GetSdkCommand, GetSdkCommandInput, GetSdkCommandOutput } from "./commands/GetSdkCommand";
import { GetSdkTypeCommand, GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "./commands/GetSdkTypeCommand";
import { GetSdkTypesCommand, GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "./commands/GetSdkTypesCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommand, GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageCommand, GetUsageCommandInput, GetUsageCommandOutput } from "./commands/GetUsageCommand";
import {
  GetUsagePlanCommand,
  GetUsagePlanCommandInput,
  GetUsagePlanCommandOutput,
} from "./commands/GetUsagePlanCommand";
import {
  GetUsagePlanKeyCommand,
  GetUsagePlanKeyCommandInput,
  GetUsagePlanKeyCommandOutput,
} from "./commands/GetUsagePlanKeyCommand";
import {
  GetUsagePlanKeysCommand,
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
} from "./commands/GetUsagePlanKeysCommand";
import {
  GetUsagePlansCommand,
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
} from "./commands/GetUsagePlansCommand";
import { GetVpcLinkCommand, GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand, GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import {
  ImportApiKeysCommand,
  ImportApiKeysCommandInput,
  ImportApiKeysCommandOutput,
} from "./commands/ImportApiKeysCommand";
import {
  ImportDocumentationPartsCommand,
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand";
import {
  ImportRestApiCommand,
  ImportRestApiCommandInput,
  ImportRestApiCommandOutput,
} from "./commands/ImportRestApiCommand";
import {
  PutGatewayResponseCommand,
  PutGatewayResponseCommandInput,
  PutGatewayResponseCommandOutput,
} from "./commands/PutGatewayResponseCommand";
import {
  PutIntegrationCommand,
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutIntegrationResponseCommand,
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand";
import { PutMethodCommand, PutMethodCommandInput, PutMethodCommandOutput } from "./commands/PutMethodCommand";
import {
  PutMethodResponseCommand,
  PutMethodResponseCommandInput,
  PutMethodResponseCommandOutput,
} from "./commands/PutMethodResponseCommand";
import { PutRestApiCommand, PutRestApiCommandInput, PutRestApiCommandOutput } from "./commands/PutRestApiCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestInvokeAuthorizerCommand,
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import {
  TestInvokeMethodCommand,
  TestInvokeMethodCommandInput,
  TestInvokeMethodCommandOutput,
} from "./commands/TestInvokeMethodCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountCommand,
  UpdateAccountCommandInput,
  UpdateAccountCommandOutput,
} from "./commands/UpdateAccountCommand";
import {
  UpdateApiKeyCommand,
  UpdateApiKeyCommandInput,
  UpdateApiKeyCommandOutput,
} from "./commands/UpdateApiKeyCommand";
import {
  UpdateAuthorizerCommand,
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
} from "./commands/UpdateAuthorizerCommand";
import {
  UpdateBasePathMappingCommand,
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand";
import {
  UpdateClientCertificateCommand,
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand";
import {
  UpdateDeploymentCommand,
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput,
} from "./commands/UpdateDeploymentCommand";
import {
  UpdateDocumentationPartCommand,
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand";
import {
  UpdateDocumentationVersionCommand,
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand";
import {
  UpdateDomainNameCommand,
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
import {
  UpdateGatewayResponseCommand,
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand";
import {
  UpdateIntegrationCommand,
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommand,
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import {
  UpdateMethodCommand,
  UpdateMethodCommandInput,
  UpdateMethodCommandOutput,
} from "./commands/UpdateMethodCommand";
import {
  UpdateMethodResponseCommand,
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand";
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateRequestValidatorCommand,
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import {
  UpdateRestApiCommand,
  UpdateRestApiCommandInput,
  UpdateRestApiCommandOutput,
} from "./commands/UpdateRestApiCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateUsageCommand, UpdateUsageCommandInput, UpdateUsageCommandOutput } from "./commands/UpdateUsageCommand";
import {
  UpdateUsagePlanCommand,
  UpdateUsagePlanCommandInput,
  UpdateUsagePlanCommandOutput,
} from "./commands/UpdateUsagePlanCommand";
import {
  UpdateVpcLinkCommand,
  UpdateVpcLinkCommandInput,
  UpdateVpcLinkCommandOutput,
} from "./commands/UpdateVpcLinkCommand";

const commands = {
  CreateApiKeyCommand,
  CreateAuthorizerCommand,
  CreateBasePathMappingCommand,
  CreateDeploymentCommand,
  CreateDocumentationPartCommand,
  CreateDocumentationVersionCommand,
  CreateDomainNameCommand,
  CreateModelCommand,
  CreateRequestValidatorCommand,
  CreateResourceCommand,
  CreateRestApiCommand,
  CreateStageCommand,
  CreateUsagePlanCommand,
  CreateUsagePlanKeyCommand,
  CreateVpcLinkCommand,
  DeleteApiKeyCommand,
  DeleteAuthorizerCommand,
  DeleteBasePathMappingCommand,
  DeleteClientCertificateCommand,
  DeleteDeploymentCommand,
  DeleteDocumentationPartCommand,
  DeleteDocumentationVersionCommand,
  DeleteDomainNameCommand,
  DeleteGatewayResponseCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResponseCommand,
  DeleteMethodCommand,
  DeleteMethodResponseCommand,
  DeleteModelCommand,
  DeleteRequestValidatorCommand,
  DeleteResourceCommand,
  DeleteRestApiCommand,
  DeleteStageCommand,
  DeleteUsagePlanCommand,
  DeleteUsagePlanKeyCommand,
  DeleteVpcLinkCommand,
  FlushStageAuthorizersCacheCommand,
  FlushStageCacheCommand,
  GenerateClientCertificateCommand,
  GetAccountCommand,
  GetApiKeyCommand,
  GetApiKeysCommand,
  GetAuthorizerCommand,
  GetAuthorizersCommand,
  GetBasePathMappingCommand,
  GetBasePathMappingsCommand,
  GetClientCertificateCommand,
  GetClientCertificatesCommand,
  GetDeploymentCommand,
  GetDeploymentsCommand,
  GetDocumentationPartCommand,
  GetDocumentationPartsCommand,
  GetDocumentationVersionCommand,
  GetDocumentationVersionsCommand,
  GetDomainNameCommand,
  GetDomainNamesCommand,
  GetExportCommand,
  GetGatewayResponseCommand,
  GetGatewayResponsesCommand,
  GetIntegrationCommand,
  GetIntegrationResponseCommand,
  GetMethodCommand,
  GetMethodResponseCommand,
  GetModelCommand,
  GetModelsCommand,
  GetModelTemplateCommand,
  GetRequestValidatorCommand,
  GetRequestValidatorsCommand,
  GetResourceCommand,
  GetResourcesCommand,
  GetRestApiCommand,
  GetRestApisCommand,
  GetSdkCommand,
  GetSdkTypeCommand,
  GetSdkTypesCommand,
  GetStageCommand,
  GetStagesCommand,
  GetTagsCommand,
  GetUsageCommand,
  GetUsagePlanCommand,
  GetUsagePlanKeyCommand,
  GetUsagePlanKeysCommand,
  GetUsagePlansCommand,
  GetVpcLinkCommand,
  GetVpcLinksCommand,
  ImportApiKeysCommand,
  ImportDocumentationPartsCommand,
  ImportRestApiCommand,
  PutGatewayResponseCommand,
  PutIntegrationCommand,
  PutIntegrationResponseCommand,
  PutMethodCommand,
  PutMethodResponseCommand,
  PutRestApiCommand,
  TagResourceCommand,
  TestInvokeAuthorizerCommand,
  TestInvokeMethodCommand,
  UntagResourceCommand,
  UpdateAccountCommand,
  UpdateApiKeyCommand,
  UpdateAuthorizerCommand,
  UpdateBasePathMappingCommand,
  UpdateClientCertificateCommand,
  UpdateDeploymentCommand,
  UpdateDocumentationPartCommand,
  UpdateDocumentationVersionCommand,
  UpdateDomainNameCommand,
  UpdateGatewayResponseCommand,
  UpdateIntegrationCommand,
  UpdateIntegrationResponseCommand,
  UpdateMethodCommand,
  UpdateMethodResponseCommand,
  UpdateModelCommand,
  UpdateRequestValidatorCommand,
  UpdateResourceCommand,
  UpdateRestApiCommand,
  UpdateStageCommand,
  UpdateUsageCommand,
  UpdateUsagePlanCommand,
  UpdateVpcLinkCommand,
};

export interface APIGateway {
  /**
   * @see {@link CreateApiKeyCommand}
   */
  createApiKey(args: CreateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiKeyCommandOutput>;
  createApiKey(args: CreateApiKeyCommandInput, cb: (err: any, data?: CreateApiKeyCommandOutput) => void): void;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAuthorizerCommand}
   */
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthorizerCommandOutput>;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBasePathMappingCommand}
   */
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBasePathMappingCommandOutput>;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDocumentationPartCommand}
   */
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationPartCommandOutput>;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDocumentationVersionCommand}
   */
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationVersionCommandOutput>;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainNameCommand}
   */
  createDomainName(
    args: CreateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainNameCommandOutput>;
  createDomainName(
    args: CreateDomainNameCommandInput,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  createDomainName(
    args: CreateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCommand}
   */
  createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRequestValidatorCommand}
   */
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRequestValidatorCommandOutput>;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceCommand}
   */
  createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  createResource(args: CreateResourceCommandInput, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
  createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRestApiCommand}
   */
  createRestApi(args: CreateRestApiCommandInput, options?: __HttpHandlerOptions): Promise<CreateRestApiCommandOutput>;
  createRestApi(args: CreateRestApiCommandInput, cb: (err: any, data?: CreateRestApiCommandOutput) => void): void;
  createRestApi(
    args: CreateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsagePlanCommand}
   */
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanCommandOutput>;
  createUsagePlan(args: CreateUsagePlanCommandInput, cb: (err: any, data?: CreateUsagePlanCommandOutput) => void): void;
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsagePlanKeyCommand}
   */
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanKeyCommandOutput>;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcLinkCommand}
   */
  createVpcLink(args: CreateVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateVpcLinkCommandOutput>;
  createVpcLink(args: CreateVpcLinkCommandInput, cb: (err: any, data?: CreateVpcLinkCommandOutput) => void): void;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiKeyCommand}
   */
  deleteApiKey(args: DeleteApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiKeyCommandOutput>;
  deleteApiKey(args: DeleteApiKeyCommandInput, cb: (err: any, data?: DeleteApiKeyCommandOutput) => void): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAuthorizerCommand}
   */
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthorizerCommandOutput>;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBasePathMappingCommand}
   */
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBasePathMappingCommandOutput>;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClientCertificateCommand}
   */
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientCertificateCommandOutput>;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDocumentationPartCommand}
   */
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationPartCommandOutput>;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDocumentationVersionCommand}
   */
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationVersionCommandOutput>;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainNameCommand}
   */
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainNameCommandOutput>;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayResponseCommand}
   */
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayResponseCommandOutput>;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationResponseCommand}
   */
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationResponseCommandOutput>;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMethodCommand}
   */
  deleteMethod(args: DeleteMethodCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMethodCommandOutput>;
  deleteMethod(args: DeleteMethodCommandInput, cb: (err: any, data?: DeleteMethodCommandOutput) => void): void;
  deleteMethod(
    args: DeleteMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMethodResponseCommand}
   */
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMethodResponseCommandOutput>;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelCommand}
   */
  deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRequestValidatorCommand}
   */
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRequestValidatorCommandOutput>;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceCommand}
   */
  deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  deleteResource(args: DeleteResourceCommandInput, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
  deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRestApiCommand}
   */
  deleteRestApi(args: DeleteRestApiCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRestApiCommandOutput>;
  deleteRestApi(args: DeleteRestApiCommandInput, cb: (err: any, data?: DeleteRestApiCommandOutput) => void): void;
  deleteRestApi(
    args: DeleteRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsagePlanCommand}
   */
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanCommandOutput>;
  deleteUsagePlan(args: DeleteUsagePlanCommandInput, cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void): void;
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsagePlanKeyCommand}
   */
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanKeyCommandOutput>;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcLinkCommand}
   */
  deleteVpcLink(args: DeleteVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVpcLinkCommandOutput>;
  deleteVpcLink(args: DeleteVpcLinkCommandInput, cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void): void;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link FlushStageAuthorizersCacheCommand}
   */
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageAuthorizersCacheCommandOutput>;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link FlushStageCacheCommand}
   */
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageCacheCommandOutput>;
  flushStageCache(args: FlushStageCacheCommandInput, cb: (err: any, data?: FlushStageCacheCommandOutput) => void): void;
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateClientCertificateCommand}
   */
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateClientCertificateCommandOutput>;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiKeyCommand}
   */
  getApiKey(args: GetApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetApiKeyCommandOutput>;
  getApiKey(args: GetApiKeyCommandInput, cb: (err: any, data?: GetApiKeyCommandOutput) => void): void;
  getApiKey(
    args: GetApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiKeysCommand}
   */
  getApiKeys(args: GetApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetApiKeysCommandOutput>;
  getApiKeys(args: GetApiKeysCommandInput, cb: (err: any, data?: GetApiKeysCommandOutput) => void): void;
  getApiKeys(
    args: GetApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizerCommand}
   */
  getAuthorizer(args: GetAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<GetAuthorizerCommandOutput>;
  getAuthorizer(args: GetAuthorizerCommandInput, cb: (err: any, data?: GetAuthorizerCommandOutput) => void): void;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizersCommand}
   */
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizersCommandOutput>;
  getAuthorizers(args: GetAuthorizersCommandInput, cb: (err: any, data?: GetAuthorizersCommandOutput) => void): void;
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBasePathMappingCommand}
   */
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingCommandOutput>;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBasePathMappingsCommand}
   */
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingsCommandOutput>;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClientCertificateCommand}
   */
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificateCommandOutput>;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClientCertificatesCommand}
   */
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificatesCommandOutput>;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentsCommand}
   */
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentsCommandOutput>;
  getDeployments(args: GetDeploymentsCommandInput, cb: (err: any, data?: GetDeploymentsCommandOutput) => void): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentationPartCommand}
   */
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartCommandOutput>;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentationPartsCommand}
   */
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartsCommandOutput>;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentationVersionCommand}
   */
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionCommandOutput>;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentationVersionsCommand}
   */
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionsCommandOutput>;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainNameCommand}
   */
  getDomainName(args: GetDomainNameCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainNameCommandOutput>;
  getDomainName(args: GetDomainNameCommandInput, cb: (err: any, data?: GetDomainNameCommandOutput) => void): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainNamesCommand}
   */
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNamesCommandOutput>;
  getDomainNames(args: GetDomainNamesCommandInput, cb: (err: any, data?: GetDomainNamesCommandOutput) => void): void;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportCommand}
   */
  getExport(args: GetExportCommandInput, options?: __HttpHandlerOptions): Promise<GetExportCommandOutput>;
  getExport(args: GetExportCommandInput, cb: (err: any, data?: GetExportCommandOutput) => void): void;
  getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayResponseCommand}
   */
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponseCommandOutput>;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayResponsesCommand}
   */
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponsesCommandOutput>;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(args: GetIntegrationCommandInput, cb: (err: any, data?: GetIntegrationCommandOutput) => void): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationResponseCommand}
   */
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponseCommandOutput>;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMethodCommand}
   */
  getMethod(args: GetMethodCommandInput, options?: __HttpHandlerOptions): Promise<GetMethodCommandOutput>;
  getMethod(args: GetMethodCommandInput, cb: (err: any, data?: GetMethodCommandOutput) => void): void;
  getMethod(
    args: GetMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMethodResponseCommand}
   */
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMethodResponseCommandOutput>;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelCommand}
   */
  getModel(args: GetModelCommandInput, options?: __HttpHandlerOptions): Promise<GetModelCommandOutput>;
  getModel(args: GetModelCommandInput, cb: (err: any, data?: GetModelCommandOutput) => void): void;
  getModel(
    args: GetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelsCommand}
   */
  getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
  getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
  getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelTemplateCommand}
   */
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelTemplateCommandOutput>;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequestValidatorCommand}
   */
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorCommandOutput>;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequestValidatorsCommand}
   */
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorsCommandOutput>;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceCommand}
   */
  getResource(args: GetResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceCommandOutput>;
  getResource(args: GetResourceCommandInput, cb: (err: any, data?: GetResourceCommandOutput) => void): void;
  getResource(
    args: GetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcesCommand}
   */
  getResources(args: GetResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcesCommandOutput>;
  getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRestApiCommand}
   */
  getRestApi(args: GetRestApiCommandInput, options?: __HttpHandlerOptions): Promise<GetRestApiCommandOutput>;
  getRestApi(args: GetRestApiCommandInput, cb: (err: any, data?: GetRestApiCommandOutput) => void): void;
  getRestApi(
    args: GetRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRestApisCommand}
   */
  getRestApis(args: GetRestApisCommandInput, options?: __HttpHandlerOptions): Promise<GetRestApisCommandOutput>;
  getRestApis(args: GetRestApisCommandInput, cb: (err: any, data?: GetRestApisCommandOutput) => void): void;
  getRestApis(
    args: GetRestApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSdkCommand}
   */
  getSdk(args: GetSdkCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkCommandOutput>;
  getSdk(args: GetSdkCommandInput, cb: (err: any, data?: GetSdkCommandOutput) => void): void;
  getSdk(
    args: GetSdkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSdkTypeCommand}
   */
  getSdkType(args: GetSdkTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkTypeCommandOutput>;
  getSdkType(args: GetSdkTypeCommandInput, cb: (err: any, data?: GetSdkTypeCommandOutput) => void): void;
  getSdkType(
    args: GetSdkTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSdkTypesCommand}
   */
  getSdkTypes(args: GetSdkTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkTypesCommandOutput>;
  getSdkTypes(args: GetSdkTypesCommandInput, cb: (err: any, data?: GetSdkTypesCommandOutput) => void): void;
  getSdkTypes(
    args: GetSdkTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStagesCommand}
   */
  getStages(args: GetStagesCommandInput, options?: __HttpHandlerOptions): Promise<GetStagesCommandOutput>;
  getStages(args: GetStagesCommandInput, cb: (err: any, data?: GetStagesCommandOutput) => void): void;
  getStages(
    args: GetStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageCommand}
   */
  getUsage(args: GetUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageCommandOutput>;
  getUsage(args: GetUsageCommandInput, cb: (err: any, data?: GetUsageCommandOutput) => void): void;
  getUsage(
    args: GetUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsagePlanCommand}
   */
  getUsagePlan(args: GetUsagePlanCommandInput, options?: __HttpHandlerOptions): Promise<GetUsagePlanCommandOutput>;
  getUsagePlan(args: GetUsagePlanCommandInput, cb: (err: any, data?: GetUsagePlanCommandOutput) => void): void;
  getUsagePlan(
    args: GetUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsagePlanKeyCommand}
   */
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeyCommandOutput>;
  getUsagePlanKey(args: GetUsagePlanKeyCommandInput, cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void): void;
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsagePlanKeysCommand}
   */
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeysCommandOutput>;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsagePlansCommand}
   */
  getUsagePlans(args: GetUsagePlansCommandInput, options?: __HttpHandlerOptions): Promise<GetUsagePlansCommandOutput>;
  getUsagePlans(args: GetUsagePlansCommandInput, cb: (err: any, data?: GetUsagePlansCommandOutput) => void): void;
  getUsagePlans(
    args: GetUsagePlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcLinkCommand}
   */
  getVpcLink(args: GetVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinkCommandOutput>;
  getVpcLink(args: GetVpcLinkCommandInput, cb: (err: any, data?: GetVpcLinkCommandOutput) => void): void;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcLinksCommand}
   */
  getVpcLinks(args: GetVpcLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(args: GetVpcLinksCommandInput, cb: (err: any, data?: GetVpcLinksCommandOutput) => void): void;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportApiKeysCommand}
   */
  importApiKeys(args: ImportApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<ImportApiKeysCommandOutput>;
  importApiKeys(args: ImportApiKeysCommandInput, cb: (err: any, data?: ImportApiKeysCommandOutput) => void): void;
  importApiKeys(
    args: ImportApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportDocumentationPartsCommand}
   */
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDocumentationPartsCommandOutput>;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportRestApiCommand}
   */
  importRestApi(args: ImportRestApiCommandInput, options?: __HttpHandlerOptions): Promise<ImportRestApiCommandOutput>;
  importRestApi(args: ImportRestApiCommandInput, cb: (err: any, data?: ImportRestApiCommandOutput) => void): void;
  importRestApi(
    args: ImportRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportRestApiCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGatewayResponseCommand}
   */
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGatewayResponseCommandOutput>;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(args: PutIntegrationCommandInput, cb: (err: any, data?: PutIntegrationCommandOutput) => void): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntegrationResponseCommand}
   */
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationResponseCommandOutput>;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMethodCommand}
   */
  putMethod(args: PutMethodCommandInput, options?: __HttpHandlerOptions): Promise<PutMethodCommandOutput>;
  putMethod(args: PutMethodCommandInput, cb: (err: any, data?: PutMethodCommandOutput) => void): void;
  putMethod(
    args: PutMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMethodResponseCommand}
   */
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMethodResponseCommandOutput>;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRestApiCommand}
   */
  putRestApi(args: PutRestApiCommandInput, options?: __HttpHandlerOptions): Promise<PutRestApiCommandOutput>;
  putRestApi(args: PutRestApiCommandInput, cb: (err: any, data?: PutRestApiCommandOutput) => void): void;
  putRestApi(
    args: PutRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRestApiCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestInvokeAuthorizerCommand}
   */
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeAuthorizerCommandOutput>;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link TestInvokeMethodCommand}
   */
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeMethodCommandOutput>;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCommand}
   */
  updateAccount(args: UpdateAccountCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountCommandOutput>;
  updateAccount(args: UpdateAccountCommandInput, cb: (err: any, data?: UpdateAccountCommandOutput) => void): void;
  updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiKeyCommand}
   */
  updateApiKey(args: UpdateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiKeyCommandOutput>;
  updateApiKey(args: UpdateApiKeyCommandInput, cb: (err: any, data?: UpdateApiKeyCommandOutput) => void): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAuthorizerCommand}
   */
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthorizerCommandOutput>;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBasePathMappingCommand}
   */
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBasePathMappingCommandOutput>;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClientCertificateCommand}
   */
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClientCertificateCommandOutput>;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeploymentCommand}
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentationPartCommand}
   */
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationPartCommandOutput>;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDocumentationVersionCommand}
   */
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationVersionCommandOutput>;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainNameCommand}
   */
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainNameCommandOutput>;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayResponseCommand}
   */
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayResponseCommandOutput>;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationResponseCommand}
   */
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationResponseCommandOutput>;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMethodCommand}
   */
  updateMethod(args: UpdateMethodCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMethodCommandOutput>;
  updateMethod(args: UpdateMethodCommandInput, cb: (err: any, data?: UpdateMethodCommandOutput) => void): void;
  updateMethod(
    args: UpdateMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMethodResponseCommand}
   */
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMethodResponseCommandOutput>;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelCommand}
   */
  updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRequestValidatorCommand}
   */
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRequestValidatorCommandOutput>;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceCommand}
   */
  updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRestApiCommand}
   */
  updateRestApi(args: UpdateRestApiCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRestApiCommandOutput>;
  updateRestApi(args: UpdateRestApiCommandInput, cb: (err: any, data?: UpdateRestApiCommandOutput) => void): void;
  updateRestApi(
    args: UpdateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStageCommand}
   */
  updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUsageCommand}
   */
  updateUsage(args: UpdateUsageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUsageCommandOutput>;
  updateUsage(args: UpdateUsageCommandInput, cb: (err: any, data?: UpdateUsageCommandOutput) => void): void;
  updateUsage(
    args: UpdateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUsagePlanCommand}
   */
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsagePlanCommandOutput>;
  updateUsagePlan(args: UpdateUsagePlanCommandInput, cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void): void;
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcLinkCommand}
   */
  updateVpcLink(args: UpdateVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVpcLinkCommandOutput>;
  updateVpcLink(args: UpdateVpcLinkCommandInput, cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void): void;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon API Gateway</fullname>
 *          <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>
 */
export class APIGateway extends APIGatewayClient implements APIGateway {}
createAggregatedClient(commands, APIGateway);
