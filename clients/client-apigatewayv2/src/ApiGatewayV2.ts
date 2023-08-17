// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ApiGatewayV2Client, ApiGatewayV2ClientConfig } from "./ApiGatewayV2Client";
import { CreateApiCommand, CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import {
  CreateApiMappingCommand,
  CreateApiMappingCommandInput,
  CreateApiMappingCommandOutput,
} from "./commands/CreateApiMappingCommand";
import {
  CreateAuthorizerCommand,
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
} from "./commands/CreateAuthorizerCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDomainNameCommand,
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import {
  CreateIntegrationCommand,
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommand,
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateRouteCommand, CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateRouteResponseCommand,
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "./commands/CreateRouteResponseCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateVpcLinkCommand,
  CreateVpcLinkCommandInput,
  CreateVpcLinkCommandOutput,
} from "./commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommand,
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "./commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommand, DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import {
  DeleteApiMappingCommand,
  DeleteApiMappingCommandInput,
  DeleteApiMappingCommandOutput,
} from "./commands/DeleteApiMappingCommand";
import {
  DeleteAuthorizerCommand,
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput,
} from "./commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommand,
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "./commands/DeleteCorsConfigurationCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DeleteDomainNameCommand,
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
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
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteRouteCommand, DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommand,
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "./commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommand,
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommand,
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteVpcLinkCommand,
  DeleteVpcLinkCommandInput,
  DeleteVpcLinkCommandOutput,
} from "./commands/DeleteVpcLinkCommand";
import { ExportApiCommand, ExportApiCommandInput, ExportApiCommandOutput } from "./commands/ExportApiCommand";
import { GetApiCommand, GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import {
  GetApiMappingCommand,
  GetApiMappingCommandInput,
  GetApiMappingCommandOutput,
} from "./commands/GetApiMappingCommand";
import {
  GetApiMappingsCommand,
  GetApiMappingsCommandInput,
  GetApiMappingsCommandOutput,
} from "./commands/GetApiMappingsCommand";
import { GetApisCommand, GetApisCommandInput, GetApisCommandOutput } from "./commands/GetApisCommand";
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
  GetDomainNameCommand,
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
} from "./commands/GetDomainNameCommand";
import {
  GetDomainNamesCommand,
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
} from "./commands/GetDomainNamesCommand";
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
import {
  GetIntegrationResponsesCommand,
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "./commands/GetIntegrationResponsesCommand";
import {
  GetIntegrationsCommand,
  GetIntegrationsCommandInput,
  GetIntegrationsCommandOutput,
} from "./commands/GetIntegrationsCommand";
import { GetModelCommand, GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetModelTemplateCommand,
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput,
} from "./commands/GetModelTemplateCommand";
import { GetRouteCommand, GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import {
  GetRouteResponseCommand,
  GetRouteResponseCommandInput,
  GetRouteResponseCommandOutput,
} from "./commands/GetRouteResponseCommand";
import {
  GetRouteResponsesCommand,
  GetRouteResponsesCommandInput,
  GetRouteResponsesCommandOutput,
} from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommand, GetRoutesCommandInput, GetRoutesCommandOutput } from "./commands/GetRoutesCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommand, GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetVpcLinkCommand, GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand, GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiCommand, ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import { ReimportApiCommand, ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommand,
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "./commands/ResetAuthorizersCacheCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateApiCommand, UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import {
  UpdateApiMappingCommand,
  UpdateApiMappingCommandInput,
  UpdateApiMappingCommandOutput,
} from "./commands/UpdateApiMappingCommand";
import {
  UpdateAuthorizerCommand,
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
} from "./commands/UpdateAuthorizerCommand";
import {
  UpdateDeploymentCommand,
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput,
} from "./commands/UpdateDeploymentCommand";
import {
  UpdateDomainNameCommand,
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
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
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateRouteCommand, UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommand,
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import {
  UpdateVpcLinkCommand,
  UpdateVpcLinkCommandInput,
  UpdateVpcLinkCommandOutput,
} from "./commands/UpdateVpcLinkCommand";

const commands = {
  CreateApiCommand,
  CreateApiMappingCommand,
  CreateAuthorizerCommand,
  CreateDeploymentCommand,
  CreateDomainNameCommand,
  CreateIntegrationCommand,
  CreateIntegrationResponseCommand,
  CreateModelCommand,
  CreateRouteCommand,
  CreateRouteResponseCommand,
  CreateStageCommand,
  CreateVpcLinkCommand,
  DeleteAccessLogSettingsCommand,
  DeleteApiCommand,
  DeleteApiMappingCommand,
  DeleteAuthorizerCommand,
  DeleteCorsConfigurationCommand,
  DeleteDeploymentCommand,
  DeleteDomainNameCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResponseCommand,
  DeleteModelCommand,
  DeleteRouteCommand,
  DeleteRouteRequestParameterCommand,
  DeleteRouteResponseCommand,
  DeleteRouteSettingsCommand,
  DeleteStageCommand,
  DeleteVpcLinkCommand,
  ExportApiCommand,
  GetApiCommand,
  GetApiMappingCommand,
  GetApiMappingsCommand,
  GetApisCommand,
  GetAuthorizerCommand,
  GetAuthorizersCommand,
  GetDeploymentCommand,
  GetDeploymentsCommand,
  GetDomainNameCommand,
  GetDomainNamesCommand,
  GetIntegrationCommand,
  GetIntegrationResponseCommand,
  GetIntegrationResponsesCommand,
  GetIntegrationsCommand,
  GetModelCommand,
  GetModelsCommand,
  GetModelTemplateCommand,
  GetRouteCommand,
  GetRouteResponseCommand,
  GetRouteResponsesCommand,
  GetRoutesCommand,
  GetStageCommand,
  GetStagesCommand,
  GetTagsCommand,
  GetVpcLinkCommand,
  GetVpcLinksCommand,
  ImportApiCommand,
  ReimportApiCommand,
  ResetAuthorizersCacheCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApiCommand,
  UpdateApiMappingCommand,
  UpdateAuthorizerCommand,
  UpdateDeploymentCommand,
  UpdateDomainNameCommand,
  UpdateIntegrationCommand,
  UpdateIntegrationResponseCommand,
  UpdateModelCommand,
  UpdateRouteCommand,
  UpdateRouteResponseCommand,
  UpdateStageCommand,
  UpdateVpcLinkCommand,
};

export interface ApiGatewayV2 {
  /**
   * @see {@link CreateApiCommand}
   */
  createApi(args: CreateApiCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiCommandOutput>;
  createApi(args: CreateApiCommandInput, cb: (err: any, data?: CreateApiCommandOutput) => void): void;
  createApi(
    args: CreateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiMappingCommand}
   */
  createApiMapping(
    args: CreateApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiMappingCommandOutput>;
  createApiMapping(
    args: CreateApiMappingCommandInput,
    cb: (err: any, data?: CreateApiMappingCommandOutput) => void
  ): void;
  createApiMapping(
    args: CreateApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiMappingCommandOutput) => void
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
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationResponseCommand}
   */
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationResponseCommandOutput>;
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    cb: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
  ): void;
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
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
   * @see {@link CreateRouteCommand}
   */
  createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteResponseCommand}
   */
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteResponseCommandOutput>;
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    cb: (err: any, data?: CreateRouteResponseCommandOutput) => void
  ): void;
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteResponseCommandOutput) => void
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
   * @see {@link DeleteAccessLogSettingsCommand}
   */
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessLogSettingsCommandOutput>;
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    cb: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): void;
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiCommand}
   */
  deleteApi(args: DeleteApiCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiCommandOutput>;
  deleteApi(args: DeleteApiCommandInput, cb: (err: any, data?: DeleteApiCommandOutput) => void): void;
  deleteApi(
    args: DeleteApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiMappingCommand}
   */
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiMappingCommandOutput>;
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    cb: (err: any, data?: DeleteApiMappingCommandOutput) => void
  ): void;
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiMappingCommandOutput) => void
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
   * @see {@link DeleteCorsConfigurationCommand}
   */
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCorsConfigurationCommandOutput>;
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    cb: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
  ): void;
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
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
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteRequestParameterCommand}
   */
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteRequestParameterCommandOutput>;
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    cb: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): void;
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteResponseCommand}
   */
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteResponseCommandOutput>;
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    cb: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): void;
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteSettingsCommand}
   */
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteSettingsCommandOutput>;
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    cb: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
  ): void;
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
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
   * @see {@link ExportApiCommand}
   */
  exportApi(args: ExportApiCommandInput, options?: __HttpHandlerOptions): Promise<ExportApiCommandOutput>;
  exportApi(args: ExportApiCommandInput, cb: (err: any, data?: ExportApiCommandOutput) => void): void;
  exportApi(
    args: ExportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiCommand}
   */
  getApi(args: GetApiCommandInput, options?: __HttpHandlerOptions): Promise<GetApiCommandOutput>;
  getApi(args: GetApiCommandInput, cb: (err: any, data?: GetApiCommandOutput) => void): void;
  getApi(
    args: GetApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiMappingCommand}
   */
  getApiMapping(args: GetApiMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetApiMappingCommandOutput>;
  getApiMapping(args: GetApiMappingCommandInput, cb: (err: any, data?: GetApiMappingCommandOutput) => void): void;
  getApiMapping(
    args: GetApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiMappingsCommand}
   */
  getApiMappings(
    args: GetApiMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiMappingsCommandOutput>;
  getApiMappings(args: GetApiMappingsCommandInput, cb: (err: any, data?: GetApiMappingsCommandOutput) => void): void;
  getApiMappings(
    args: GetApiMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApisCommand}
   */
  getApis(args: GetApisCommandInput, options?: __HttpHandlerOptions): Promise<GetApisCommandOutput>;
  getApis(args: GetApisCommandInput, cb: (err: any, data?: GetApisCommandOutput) => void): void;
  getApis(
    args: GetApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApisCommandOutput) => void
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
   * @see {@link GetIntegrationResponsesCommand}
   */
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponsesCommandOutput>;
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    cb: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): void;
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationsCommand}
   */
  getIntegrations(
    args: GetIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationsCommandOutput>;
  getIntegrations(args: GetIntegrationsCommandInput, cb: (err: any, data?: GetIntegrationsCommandOutput) => void): void;
  getIntegrations(
    args: GetIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationsCommandOutput) => void
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
   * @see {@link GetRouteCommand}
   */
  getRoute(args: GetRouteCommandInput, options?: __HttpHandlerOptions): Promise<GetRouteCommandOutput>;
  getRoute(args: GetRouteCommandInput, cb: (err: any, data?: GetRouteCommandOutput) => void): void;
  getRoute(
    args: GetRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteResponseCommand}
   */
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteResponseCommandOutput>;
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    cb: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): void;
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteResponsesCommand}
   */
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteResponsesCommandOutput>;
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    cb: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): void;
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoutesCommand}
   */
  getRoutes(args: GetRoutesCommandInput, options?: __HttpHandlerOptions): Promise<GetRoutesCommandOutput>;
  getRoutes(args: GetRoutesCommandInput, cb: (err: any, data?: GetRoutesCommandOutput) => void): void;
  getRoutes(
    args: GetRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutesCommandOutput) => void
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
   * @see {@link ImportApiCommand}
   */
  importApi(args: ImportApiCommandInput, options?: __HttpHandlerOptions): Promise<ImportApiCommandOutput>;
  importApi(args: ImportApiCommandInput, cb: (err: any, data?: ImportApiCommandOutput) => void): void;
  importApi(
    args: ImportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiCommandOutput) => void
  ): void;

  /**
   * @see {@link ReimportApiCommand}
   */
  reimportApi(args: ReimportApiCommandInput, options?: __HttpHandlerOptions): Promise<ReimportApiCommandOutput>;
  reimportApi(args: ReimportApiCommandInput, cb: (err: any, data?: ReimportApiCommandOutput) => void): void;
  reimportApi(
    args: ReimportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReimportApiCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetAuthorizersCacheCommand}
   */
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAuthorizersCacheCommandOutput>;
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    cb: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
  ): void;
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
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
   * @see {@link UpdateApiCommand}
   */
  updateApi(args: UpdateApiCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiCommandOutput>;
  updateApi(args: UpdateApiCommandInput, cb: (err: any, data?: UpdateApiCommandOutput) => void): void;
  updateApi(
    args: UpdateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiMappingCommand}
   */
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiMappingCommandOutput>;
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    cb: (err: any, data?: UpdateApiMappingCommandOutput) => void
  ): void;
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiMappingCommandOutput) => void
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
   * @see {@link UpdateRouteCommand}
   */
  updateRoute(args: UpdateRouteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRouteCommandOutput>;
  updateRoute(args: UpdateRouteCommandInput, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
  updateRoute(
    args: UpdateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouteResponseCommand}
   */
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteResponseCommandOutput>;
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    cb: (err: any, data?: UpdateRouteResponseCommandOutput) => void
  ): void;
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteResponseCommandOutput) => void
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
 * <p>Amazon API Gateway V2</p>
 */
export class ApiGatewayV2 extends ApiGatewayV2Client implements ApiGatewayV2 {}
createAggregatedClient(commands, ApiGatewayV2);
