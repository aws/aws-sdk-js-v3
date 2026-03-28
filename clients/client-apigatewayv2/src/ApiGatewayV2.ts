// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { ApiGatewayV2Client } from "./ApiGatewayV2Client";
import { type CreateApiCommandInput, type CreateApiCommandOutput, CreateApiCommand } from "./commands/CreateApiCommand";
import {
  type CreateApiMappingCommandInput,
  type CreateApiMappingCommandOutput,
  CreateApiMappingCommand,
} from "./commands/CreateApiMappingCommand";
import {
  type CreateAuthorizerCommandInput,
  type CreateAuthorizerCommandOutput,
  CreateAuthorizerCommand,
} from "./commands/CreateAuthorizerCommand";
import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type CreateDomainNameCommandInput,
  type CreateDomainNameCommandOutput,
  CreateDomainNameCommand,
} from "./commands/CreateDomainNameCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type CreateIntegrationResponseCommandInput,
  type CreateIntegrationResponseCommandOutput,
  CreateIntegrationResponseCommand,
} from "./commands/CreateIntegrationResponseCommand";
import {
  type CreateModelCommandInput,
  type CreateModelCommandOutput,
  CreateModelCommand,
} from "./commands/CreateModelCommand";
import {
  type CreatePortalCommandInput,
  type CreatePortalCommandOutput,
  CreatePortalCommand,
} from "./commands/CreatePortalCommand";
import {
  type CreatePortalProductCommandInput,
  type CreatePortalProductCommandOutput,
  CreatePortalProductCommand,
} from "./commands/CreatePortalProductCommand";
import {
  type CreateProductPageCommandInput,
  type CreateProductPageCommandOutput,
  CreateProductPageCommand,
} from "./commands/CreateProductPageCommand";
import {
  type CreateProductRestEndpointPageCommandInput,
  type CreateProductRestEndpointPageCommandOutput,
  CreateProductRestEndpointPageCommand,
} from "./commands/CreateProductRestEndpointPageCommand";
import {
  type CreateRouteCommandInput,
  type CreateRouteCommandOutput,
  CreateRouteCommand,
} from "./commands/CreateRouteCommand";
import {
  type CreateRouteResponseCommandInput,
  type CreateRouteResponseCommandOutput,
  CreateRouteResponseCommand,
} from "./commands/CreateRouteResponseCommand";
import {
  type CreateRoutingRuleCommandInput,
  type CreateRoutingRuleCommandOutput,
  CreateRoutingRuleCommand,
} from "./commands/CreateRoutingRuleCommand";
import {
  type CreateStageCommandInput,
  type CreateStageCommandOutput,
  CreateStageCommand,
} from "./commands/CreateStageCommand";
import {
  type CreateVpcLinkCommandInput,
  type CreateVpcLinkCommandOutput,
  CreateVpcLinkCommand,
} from "./commands/CreateVpcLinkCommand";
import {
  type DeleteAccessLogSettingsCommandInput,
  type DeleteAccessLogSettingsCommandOutput,
  DeleteAccessLogSettingsCommand,
} from "./commands/DeleteAccessLogSettingsCommand";
import { type DeleteApiCommandInput, type DeleteApiCommandOutput, DeleteApiCommand } from "./commands/DeleteApiCommand";
import {
  type DeleteApiMappingCommandInput,
  type DeleteApiMappingCommandOutput,
  DeleteApiMappingCommand,
} from "./commands/DeleteApiMappingCommand";
import {
  type DeleteAuthorizerCommandInput,
  type DeleteAuthorizerCommandOutput,
  DeleteAuthorizerCommand,
} from "./commands/DeleteAuthorizerCommand";
import {
  type DeleteCorsConfigurationCommandInput,
  type DeleteCorsConfigurationCommandOutput,
  DeleteCorsConfigurationCommand,
} from "./commands/DeleteCorsConfigurationCommand";
import {
  type DeleteDeploymentCommandInput,
  type DeleteDeploymentCommandOutput,
  DeleteDeploymentCommand,
} from "./commands/DeleteDeploymentCommand";
import {
  type DeleteDomainNameCommandInput,
  type DeleteDomainNameCommandOutput,
  DeleteDomainNameCommand,
} from "./commands/DeleteDomainNameCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteIntegrationResponseCommandInput,
  type DeleteIntegrationResponseCommandOutput,
  DeleteIntegrationResponseCommand,
} from "./commands/DeleteIntegrationResponseCommand";
import {
  type DeleteModelCommandInput,
  type DeleteModelCommandOutput,
  DeleteModelCommand,
} from "./commands/DeleteModelCommand";
import {
  type DeletePortalCommandInput,
  type DeletePortalCommandOutput,
  DeletePortalCommand,
} from "./commands/DeletePortalCommand";
import {
  type DeletePortalProductCommandInput,
  type DeletePortalProductCommandOutput,
  DeletePortalProductCommand,
} from "./commands/DeletePortalProductCommand";
import {
  type DeletePortalProductSharingPolicyCommandInput,
  type DeletePortalProductSharingPolicyCommandOutput,
  DeletePortalProductSharingPolicyCommand,
} from "./commands/DeletePortalProductSharingPolicyCommand";
import {
  type DeleteProductPageCommandInput,
  type DeleteProductPageCommandOutput,
  DeleteProductPageCommand,
} from "./commands/DeleteProductPageCommand";
import {
  type DeleteProductRestEndpointPageCommandInput,
  type DeleteProductRestEndpointPageCommandOutput,
  DeleteProductRestEndpointPageCommand,
} from "./commands/DeleteProductRestEndpointPageCommand";
import {
  type DeleteRouteCommandInput,
  type DeleteRouteCommandOutput,
  DeleteRouteCommand,
} from "./commands/DeleteRouteCommand";
import {
  type DeleteRouteRequestParameterCommandInput,
  type DeleteRouteRequestParameterCommandOutput,
  DeleteRouteRequestParameterCommand,
} from "./commands/DeleteRouteRequestParameterCommand";
import {
  type DeleteRouteResponseCommandInput,
  type DeleteRouteResponseCommandOutput,
  DeleteRouteResponseCommand,
} from "./commands/DeleteRouteResponseCommand";
import {
  type DeleteRouteSettingsCommandInput,
  type DeleteRouteSettingsCommandOutput,
  DeleteRouteSettingsCommand,
} from "./commands/DeleteRouteSettingsCommand";
import {
  type DeleteRoutingRuleCommandInput,
  type DeleteRoutingRuleCommandOutput,
  DeleteRoutingRuleCommand,
} from "./commands/DeleteRoutingRuleCommand";
import {
  type DeleteStageCommandInput,
  type DeleteStageCommandOutput,
  DeleteStageCommand,
} from "./commands/DeleteStageCommand";
import {
  type DeleteVpcLinkCommandInput,
  type DeleteVpcLinkCommandOutput,
  DeleteVpcLinkCommand,
} from "./commands/DeleteVpcLinkCommand";
import {
  type DisablePortalCommandInput,
  type DisablePortalCommandOutput,
  DisablePortalCommand,
} from "./commands/DisablePortalCommand";
import { type ExportApiCommandInput, type ExportApiCommandOutput, ExportApiCommand } from "./commands/ExportApiCommand";
import { type GetApiCommandInput, type GetApiCommandOutput, GetApiCommand } from "./commands/GetApiCommand";
import {
  type GetApiMappingCommandInput,
  type GetApiMappingCommandOutput,
  GetApiMappingCommand,
} from "./commands/GetApiMappingCommand";
import {
  type GetApiMappingsCommandInput,
  type GetApiMappingsCommandOutput,
  GetApiMappingsCommand,
} from "./commands/GetApiMappingsCommand";
import { type GetApisCommandInput, type GetApisCommandOutput, GetApisCommand } from "./commands/GetApisCommand";
import {
  type GetAuthorizerCommandInput,
  type GetAuthorizerCommandOutput,
  GetAuthorizerCommand,
} from "./commands/GetAuthorizerCommand";
import {
  type GetAuthorizersCommandInput,
  type GetAuthorizersCommandOutput,
  GetAuthorizersCommand,
} from "./commands/GetAuthorizersCommand";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "./commands/GetDeploymentCommand";
import {
  type GetDeploymentsCommandInput,
  type GetDeploymentsCommandOutput,
  GetDeploymentsCommand,
} from "./commands/GetDeploymentsCommand";
import {
  type GetDomainNameCommandInput,
  type GetDomainNameCommandOutput,
  GetDomainNameCommand,
} from "./commands/GetDomainNameCommand";
import {
  type GetDomainNamesCommandInput,
  type GetDomainNamesCommandOutput,
  GetDomainNamesCommand,
} from "./commands/GetDomainNamesCommand";
import {
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationCommand,
} from "./commands/GetIntegrationCommand";
import {
  type GetIntegrationResponseCommandInput,
  type GetIntegrationResponseCommandOutput,
  GetIntegrationResponseCommand,
} from "./commands/GetIntegrationResponseCommand";
import {
  type GetIntegrationResponsesCommandInput,
  type GetIntegrationResponsesCommandOutput,
  GetIntegrationResponsesCommand,
} from "./commands/GetIntegrationResponsesCommand";
import {
  type GetIntegrationsCommandInput,
  type GetIntegrationsCommandOutput,
  GetIntegrationsCommand,
} from "./commands/GetIntegrationsCommand";
import { type GetModelCommandInput, type GetModelCommandOutput, GetModelCommand } from "./commands/GetModelCommand";
import { type GetModelsCommandInput, type GetModelsCommandOutput, GetModelsCommand } from "./commands/GetModelsCommand";
import {
  type GetModelTemplateCommandInput,
  type GetModelTemplateCommandOutput,
  GetModelTemplateCommand,
} from "./commands/GetModelTemplateCommand";
import { type GetPortalCommandInput, type GetPortalCommandOutput, GetPortalCommand } from "./commands/GetPortalCommand";
import {
  type GetPortalProductCommandInput,
  type GetPortalProductCommandOutput,
  GetPortalProductCommand,
} from "./commands/GetPortalProductCommand";
import {
  type GetPortalProductSharingPolicyCommandInput,
  type GetPortalProductSharingPolicyCommandOutput,
  GetPortalProductSharingPolicyCommand,
} from "./commands/GetPortalProductSharingPolicyCommand";
import {
  type GetProductPageCommandInput,
  type GetProductPageCommandOutput,
  GetProductPageCommand,
} from "./commands/GetProductPageCommand";
import {
  type GetProductRestEndpointPageCommandInput,
  type GetProductRestEndpointPageCommandOutput,
  GetProductRestEndpointPageCommand,
} from "./commands/GetProductRestEndpointPageCommand";
import { type GetRouteCommandInput, type GetRouteCommandOutput, GetRouteCommand } from "./commands/GetRouteCommand";
import {
  type GetRouteResponseCommandInput,
  type GetRouteResponseCommandOutput,
  GetRouteResponseCommand,
} from "./commands/GetRouteResponseCommand";
import {
  type GetRouteResponsesCommandInput,
  type GetRouteResponsesCommandOutput,
  GetRouteResponsesCommand,
} from "./commands/GetRouteResponsesCommand";
import { type GetRoutesCommandInput, type GetRoutesCommandOutput, GetRoutesCommand } from "./commands/GetRoutesCommand";
import {
  type GetRoutingRuleCommandInput,
  type GetRoutingRuleCommandOutput,
  GetRoutingRuleCommand,
} from "./commands/GetRoutingRuleCommand";
import { type GetStageCommandInput, type GetStageCommandOutput, GetStageCommand } from "./commands/GetStageCommand";
import { type GetStagesCommandInput, type GetStagesCommandOutput, GetStagesCommand } from "./commands/GetStagesCommand";
import { type GetTagsCommandInput, type GetTagsCommandOutput, GetTagsCommand } from "./commands/GetTagsCommand";
import {
  type GetVpcLinkCommandInput,
  type GetVpcLinkCommandOutput,
  GetVpcLinkCommand,
} from "./commands/GetVpcLinkCommand";
import {
  type GetVpcLinksCommandInput,
  type GetVpcLinksCommandOutput,
  GetVpcLinksCommand,
} from "./commands/GetVpcLinksCommand";
import { type ImportApiCommandInput, type ImportApiCommandOutput, ImportApiCommand } from "./commands/ImportApiCommand";
import {
  type ListPortalProductsCommandInput,
  type ListPortalProductsCommandOutput,
  ListPortalProductsCommand,
} from "./commands/ListPortalProductsCommand";
import {
  type ListPortalsCommandInput,
  type ListPortalsCommandOutput,
  ListPortalsCommand,
} from "./commands/ListPortalsCommand";
import {
  type ListProductPagesCommandInput,
  type ListProductPagesCommandOutput,
  ListProductPagesCommand,
} from "./commands/ListProductPagesCommand";
import {
  type ListProductRestEndpointPagesCommandInput,
  type ListProductRestEndpointPagesCommandOutput,
  ListProductRestEndpointPagesCommand,
} from "./commands/ListProductRestEndpointPagesCommand";
import {
  type ListRoutingRulesCommandInput,
  type ListRoutingRulesCommandOutput,
  ListRoutingRulesCommand,
} from "./commands/ListRoutingRulesCommand";
import {
  type PreviewPortalCommandInput,
  type PreviewPortalCommandOutput,
  PreviewPortalCommand,
} from "./commands/PreviewPortalCommand";
import {
  type PublishPortalCommandInput,
  type PublishPortalCommandOutput,
  PublishPortalCommand,
} from "./commands/PublishPortalCommand";
import {
  type PutPortalProductSharingPolicyCommandInput,
  type PutPortalProductSharingPolicyCommandOutput,
  PutPortalProductSharingPolicyCommand,
} from "./commands/PutPortalProductSharingPolicyCommand";
import {
  type PutRoutingRuleCommandInput,
  type PutRoutingRuleCommandOutput,
  PutRoutingRuleCommand,
} from "./commands/PutRoutingRuleCommand";
import {
  type ReimportApiCommandInput,
  type ReimportApiCommandOutput,
  ReimportApiCommand,
} from "./commands/ReimportApiCommand";
import {
  type ResetAuthorizersCacheCommandInput,
  type ResetAuthorizersCacheCommandOutput,
  ResetAuthorizersCacheCommand,
} from "./commands/ResetAuthorizersCacheCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { type UpdateApiCommandInput, type UpdateApiCommandOutput, UpdateApiCommand } from "./commands/UpdateApiCommand";
import {
  type UpdateApiMappingCommandInput,
  type UpdateApiMappingCommandOutput,
  UpdateApiMappingCommand,
} from "./commands/UpdateApiMappingCommand";
import {
  type UpdateAuthorizerCommandInput,
  type UpdateAuthorizerCommandOutput,
  UpdateAuthorizerCommand,
} from "./commands/UpdateAuthorizerCommand";
import {
  type UpdateDeploymentCommandInput,
  type UpdateDeploymentCommandOutput,
  UpdateDeploymentCommand,
} from "./commands/UpdateDeploymentCommand";
import {
  type UpdateDomainNameCommandInput,
  type UpdateDomainNameCommandOutput,
  UpdateDomainNameCommand,
} from "./commands/UpdateDomainNameCommand";
import {
  type UpdateIntegrationCommandInput,
  type UpdateIntegrationCommandOutput,
  UpdateIntegrationCommand,
} from "./commands/UpdateIntegrationCommand";
import {
  type UpdateIntegrationResponseCommandInput,
  type UpdateIntegrationResponseCommandOutput,
  UpdateIntegrationResponseCommand,
} from "./commands/UpdateIntegrationResponseCommand";
import {
  type UpdateModelCommandInput,
  type UpdateModelCommandOutput,
  UpdateModelCommand,
} from "./commands/UpdateModelCommand";
import {
  type UpdatePortalCommandInput,
  type UpdatePortalCommandOutput,
  UpdatePortalCommand,
} from "./commands/UpdatePortalCommand";
import {
  type UpdatePortalProductCommandInput,
  type UpdatePortalProductCommandOutput,
  UpdatePortalProductCommand,
} from "./commands/UpdatePortalProductCommand";
import {
  type UpdateProductPageCommandInput,
  type UpdateProductPageCommandOutput,
  UpdateProductPageCommand,
} from "./commands/UpdateProductPageCommand";
import {
  type UpdateProductRestEndpointPageCommandInput,
  type UpdateProductRestEndpointPageCommandOutput,
  UpdateProductRestEndpointPageCommand,
} from "./commands/UpdateProductRestEndpointPageCommand";
import {
  type UpdateRouteCommandInput,
  type UpdateRouteCommandOutput,
  UpdateRouteCommand,
} from "./commands/UpdateRouteCommand";
import {
  type UpdateRouteResponseCommandInput,
  type UpdateRouteResponseCommandOutput,
  UpdateRouteResponseCommand,
} from "./commands/UpdateRouteResponseCommand";
import {
  type UpdateStageCommandInput,
  type UpdateStageCommandOutput,
  UpdateStageCommand,
} from "./commands/UpdateStageCommand";
import {
  type UpdateVpcLinkCommandInput,
  type UpdateVpcLinkCommandOutput,
  UpdateVpcLinkCommand,
} from "./commands/UpdateVpcLinkCommand";
import { paginateListRoutingRules } from "./pagination/ListRoutingRulesPaginator";

const commands = {
  CreateApiCommand,
  CreateApiMappingCommand,
  CreateAuthorizerCommand,
  CreateDeploymentCommand,
  CreateDomainNameCommand,
  CreateIntegrationCommand,
  CreateIntegrationResponseCommand,
  CreateModelCommand,
  CreatePortalCommand,
  CreatePortalProductCommand,
  CreateProductPageCommand,
  CreateProductRestEndpointPageCommand,
  CreateRouteCommand,
  CreateRouteResponseCommand,
  CreateRoutingRuleCommand,
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
  DeletePortalCommand,
  DeletePortalProductCommand,
  DeletePortalProductSharingPolicyCommand,
  DeleteProductPageCommand,
  DeleteProductRestEndpointPageCommand,
  DeleteRouteCommand,
  DeleteRouteRequestParameterCommand,
  DeleteRouteResponseCommand,
  DeleteRouteSettingsCommand,
  DeleteRoutingRuleCommand,
  DeleteStageCommand,
  DeleteVpcLinkCommand,
  DisablePortalCommand,
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
  GetPortalCommand,
  GetPortalProductCommand,
  GetPortalProductSharingPolicyCommand,
  GetProductPageCommand,
  GetProductRestEndpointPageCommand,
  GetRouteCommand,
  GetRouteResponseCommand,
  GetRouteResponsesCommand,
  GetRoutesCommand,
  GetRoutingRuleCommand,
  GetStageCommand,
  GetStagesCommand,
  GetTagsCommand,
  GetVpcLinkCommand,
  GetVpcLinksCommand,
  ImportApiCommand,
  ListPortalProductsCommand,
  ListPortalsCommand,
  ListProductPagesCommand,
  ListProductRestEndpointPagesCommand,
  ListRoutingRulesCommand,
  PreviewPortalCommand,
  PublishPortalCommand,
  PutPortalProductSharingPolicyCommand,
  PutRoutingRuleCommand,
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
  UpdatePortalCommand,
  UpdatePortalProductCommand,
  UpdateProductPageCommand,
  UpdateProductRestEndpointPageCommand,
  UpdateRouteCommand,
  UpdateRouteResponseCommand,
  UpdateStageCommand,
  UpdateVpcLinkCommand,
};
const paginators = {
  paginateListRoutingRules,
};

export interface ApiGatewayV2 {
  /**
   * @see {@link CreateApiCommand}
   */
  createApi(
    args: CreateApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiCommandOutput>;
  createApi(
    args: CreateApiCommandInput,
    cb: (err: any, data?: CreateApiCommandOutput) => void
  ): void;
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
  createModel(
    args: CreateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCommandOutput>;
  createModel(
    args: CreateModelCommandInput,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalCommand}
   */
  createPortal(
    args: CreatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortalCommandOutput>;
  createPortal(
    args: CreatePortalCommandInput,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;
  createPortal(
    args: CreatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalProductCommand}
   */
  createPortalProduct(
    args: CreatePortalProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortalProductCommandOutput>;
  createPortalProduct(
    args: CreatePortalProductCommandInput,
    cb: (err: any, data?: CreatePortalProductCommandOutput) => void
  ): void;
  createPortalProduct(
    args: CreatePortalProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalProductCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProductPageCommand}
   */
  createProductPage(
    args: CreateProductPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProductPageCommandOutput>;
  createProductPage(
    args: CreateProductPageCommandInput,
    cb: (err: any, data?: CreateProductPageCommandOutput) => void
  ): void;
  createProductPage(
    args: CreateProductPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProductRestEndpointPageCommand}
   */
  createProductRestEndpointPage(
    args: CreateProductRestEndpointPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProductRestEndpointPageCommandOutput>;
  createProductRestEndpointPage(
    args: CreateProductRestEndpointPageCommandInput,
    cb: (err: any, data?: CreateProductRestEndpointPageCommandOutput) => void
  ): void;
  createProductRestEndpointPage(
    args: CreateProductRestEndpointPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProductRestEndpointPageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(
    args: CreateRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteCommandOutput>;
  createRoute(
    args: CreateRouteCommandInput,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;
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
   * @see {@link CreateRoutingRuleCommand}
   */
  createRoutingRule(
    args: CreateRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoutingRuleCommandOutput>;
  createRoutingRule(
    args: CreateRoutingRuleCommandInput,
    cb: (err: any, data?: CreateRoutingRuleCommandOutput) => void
  ): void;
  createRoutingRule(
    args: CreateRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(
    args: CreateStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStageCommandOutput>;
  createStage(
    args: CreateStageCommandInput,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcLinkCommand}
   */
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcLinkCommandOutput>;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
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
  deleteApi(
    args: DeleteApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiCommandOutput>;
  deleteApi(
    args: DeleteApiCommandInput,
    cb: (err: any, data?: DeleteApiCommandOutput) => void
  ): void;
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
  deleteModel(
    args: DeleteModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelCommandOutput>;
  deleteModel(
    args: DeleteModelCommandInput,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalCommand}
   */
  deletePortal(
    args: DeletePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalCommandOutput>;
  deletePortal(
    args: DeletePortalCommandInput,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;
  deletePortal(
    args: DeletePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalProductCommand}
   */
  deletePortalProduct(
    args: DeletePortalProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalProductCommandOutput>;
  deletePortalProduct(
    args: DeletePortalProductCommandInput,
    cb: (err: any, data?: DeletePortalProductCommandOutput) => void
  ): void;
  deletePortalProduct(
    args: DeletePortalProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalProductSharingPolicyCommand}
   */
  deletePortalProductSharingPolicy(
    args: DeletePortalProductSharingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalProductSharingPolicyCommandOutput>;
  deletePortalProductSharingPolicy(
    args: DeletePortalProductSharingPolicyCommandInput,
    cb: (err: any, data?: DeletePortalProductSharingPolicyCommandOutput) => void
  ): void;
  deletePortalProductSharingPolicy(
    args: DeletePortalProductSharingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalProductSharingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductPageCommand}
   */
  deleteProductPage(
    args: DeleteProductPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProductPageCommandOutput>;
  deleteProductPage(
    args: DeleteProductPageCommandInput,
    cb: (err: any, data?: DeleteProductPageCommandOutput) => void
  ): void;
  deleteProductPage(
    args: DeleteProductPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductRestEndpointPageCommand}
   */
  deleteProductRestEndpointPage(
    args: DeleteProductRestEndpointPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProductRestEndpointPageCommandOutput>;
  deleteProductRestEndpointPage(
    args: DeleteProductRestEndpointPageCommandInput,
    cb: (err: any, data?: DeleteProductRestEndpointPageCommandOutput) => void
  ): void;
  deleteProductRestEndpointPage(
    args: DeleteProductRestEndpointPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProductRestEndpointPageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(
    args: DeleteRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteCommandOutput>;
  deleteRoute(
    args: DeleteRouteCommandInput,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;
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
   * @see {@link DeleteRoutingRuleCommand}
   */
  deleteRoutingRule(
    args: DeleteRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoutingRuleCommandOutput>;
  deleteRoutingRule(
    args: DeleteRoutingRuleCommandInput,
    cb: (err: any, data?: DeleteRoutingRuleCommandOutput) => void
  ): void;
  deleteRoutingRule(
    args: DeleteRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(
    args: DeleteStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStageCommandOutput>;
  deleteStage(
    args: DeleteStageCommandInput,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcLinkCommand}
   */
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcLinkCommandOutput>;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DisablePortalCommand}
   */
  disablePortal(
    args: DisablePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisablePortalCommandOutput>;
  disablePortal(
    args: DisablePortalCommandInput,
    cb: (err: any, data?: DisablePortalCommandOutput) => void
  ): void;
  disablePortal(
    args: DisablePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisablePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportApiCommand}
   */
  exportApi(
    args: ExportApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportApiCommandOutput>;
  exportApi(
    args: ExportApiCommandInput,
    cb: (err: any, data?: ExportApiCommandOutput) => void
  ): void;
  exportApi(
    args: ExportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiCommand}
   */
  getApi(
    args: GetApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiCommandOutput>;
  getApi(
    args: GetApiCommandInput,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;
  getApi(
    args: GetApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiMappingCommand}
   */
  getApiMapping(
    args: GetApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiMappingCommandOutput>;
  getApiMapping(
    args: GetApiMappingCommandInput,
    cb: (err: any, data?: GetApiMappingCommandOutput) => void
  ): void;
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
  getApiMappings(
    args: GetApiMappingsCommandInput,
    cb: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): void;
  getApiMappings(
    args: GetApiMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApisCommand}
   */
  getApis(): Promise<GetApisCommandOutput>;
  getApis(
    args: GetApisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApisCommandOutput>;
  getApis(
    args: GetApisCommandInput,
    cb: (err: any, data?: GetApisCommandOutput) => void
  ): void;
  getApis(
    args: GetApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizerCommand}
   */
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizerCommandOutput>;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
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
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
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
  getDeployments(
    args: GetDeploymentsCommandInput,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainNameCommand}
   */
  getDomainName(
    args: GetDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNameCommandOutput>;
  getDomainName(
    args: GetDomainNameCommandInput,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainNamesCommand}
   */
  getDomainNames(): Promise<GetDomainNamesCommandOutput>;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNamesCommandOutput>;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;
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
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
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
  getIntegrations(
    args: GetIntegrationsCommandInput,
    cb: (err: any, data?: GetIntegrationsCommandOutput) => void
  ): void;
  getIntegrations(
    args: GetIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelCommand}
   */
  getModel(
    args: GetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelCommandOutput>;
  getModel(
    args: GetModelCommandInput,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;
  getModel(
    args: GetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelsCommand}
   */
  getModels(
    args: GetModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelsCommandOutput>;
  getModels(
    args: GetModelsCommandInput,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
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
   * @see {@link GetPortalCommand}
   */
  getPortal(
    args: GetPortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortalCommandOutput>;
  getPortal(
    args: GetPortalCommandInput,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;
  getPortal(
    args: GetPortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortalProductCommand}
   */
  getPortalProduct(
    args: GetPortalProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortalProductCommandOutput>;
  getPortalProduct(
    args: GetPortalProductCommandInput,
    cb: (err: any, data?: GetPortalProductCommandOutput) => void
  ): void;
  getPortalProduct(
    args: GetPortalProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalProductCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortalProductSharingPolicyCommand}
   */
  getPortalProductSharingPolicy(
    args: GetPortalProductSharingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortalProductSharingPolicyCommandOutput>;
  getPortalProductSharingPolicy(
    args: GetPortalProductSharingPolicyCommandInput,
    cb: (err: any, data?: GetPortalProductSharingPolicyCommandOutput) => void
  ): void;
  getPortalProductSharingPolicy(
    args: GetPortalProductSharingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalProductSharingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductPageCommand}
   */
  getProductPage(
    args: GetProductPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProductPageCommandOutput>;
  getProductPage(
    args: GetProductPageCommandInput,
    cb: (err: any, data?: GetProductPageCommandOutput) => void
  ): void;
  getProductPage(
    args: GetProductPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductRestEndpointPageCommand}
   */
  getProductRestEndpointPage(
    args: GetProductRestEndpointPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProductRestEndpointPageCommandOutput>;
  getProductRestEndpointPage(
    args: GetProductRestEndpointPageCommandInput,
    cb: (err: any, data?: GetProductRestEndpointPageCommandOutput) => void
  ): void;
  getProductRestEndpointPage(
    args: GetProductRestEndpointPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProductRestEndpointPageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteCommand}
   */
  getRoute(
    args: GetRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteCommandOutput>;
  getRoute(
    args: GetRouteCommandInput,
    cb: (err: any, data?: GetRouteCommandOutput) => void
  ): void;
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
  getRoutes(
    args: GetRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoutesCommandOutput>;
  getRoutes(
    args: GetRoutesCommandInput,
    cb: (err: any, data?: GetRoutesCommandOutput) => void
  ): void;
  getRoutes(
    args: GetRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoutingRuleCommand}
   */
  getRoutingRule(
    args: GetRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoutingRuleCommandOutput>;
  getRoutingRule(
    args: GetRoutingRuleCommandInput,
    cb: (err: any, data?: GetRoutingRuleCommandOutput) => void
  ): void;
  getRoutingRule(
    args: GetRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(
    args: GetStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStageCommandOutput>;
  getStage(
    args: GetStageCommandInput,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStagesCommand}
   */
  getStages(
    args: GetStagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStagesCommandOutput>;
  getStages(
    args: GetStagesCommandInput,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;
  getStages(
    args: GetStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(
    args: GetTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagsCommandOutput>;
  getTags(
    args: GetTagsCommandInput,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcLinkCommand}
   */
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcLinkCommandOutput>;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcLinksCommand}
   */
  getVpcLinks(): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportApiCommand}
   */
  importApi(
    args: ImportApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportApiCommandOutput>;
  importApi(
    args: ImportApiCommandInput,
    cb: (err: any, data?: ImportApiCommandOutput) => void
  ): void;
  importApi(
    args: ImportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortalProductsCommand}
   */
  listPortalProducts(): Promise<ListPortalProductsCommandOutput>;
  listPortalProducts(
    args: ListPortalProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortalProductsCommandOutput>;
  listPortalProducts(
    args: ListPortalProductsCommandInput,
    cb: (err: any, data?: ListPortalProductsCommandOutput) => void
  ): void;
  listPortalProducts(
    args: ListPortalProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortalProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortalsCommand}
   */
  listPortals(): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;
  listPortals(
    args: ListPortalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductPagesCommand}
   */
  listProductPages(
    args: ListProductPagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProductPagesCommandOutput>;
  listProductPages(
    args: ListProductPagesCommandInput,
    cb: (err: any, data?: ListProductPagesCommandOutput) => void
  ): void;
  listProductPages(
    args: ListProductPagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProductPagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductRestEndpointPagesCommand}
   */
  listProductRestEndpointPages(
    args: ListProductRestEndpointPagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProductRestEndpointPagesCommandOutput>;
  listProductRestEndpointPages(
    args: ListProductRestEndpointPagesCommandInput,
    cb: (err: any, data?: ListProductRestEndpointPagesCommandOutput) => void
  ): void;
  listProductRestEndpointPages(
    args: ListProductRestEndpointPagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProductRestEndpointPagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingRulesCommand}
   */
  listRoutingRules(
    args: ListRoutingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingRulesCommandOutput>;
  listRoutingRules(
    args: ListRoutingRulesCommandInput,
    cb: (err: any, data?: ListRoutingRulesCommandOutput) => void
  ): void;
  listRoutingRules(
    args: ListRoutingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link PreviewPortalCommand}
   */
  previewPortal(
    args: PreviewPortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PreviewPortalCommandOutput>;
  previewPortal(
    args: PreviewPortalCommandInput,
    cb: (err: any, data?: PreviewPortalCommandOutput) => void
  ): void;
  previewPortal(
    args: PreviewPortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PreviewPortalCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishPortalCommand}
   */
  publishPortal(
    args: PublishPortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishPortalCommandOutput>;
  publishPortal(
    args: PublishPortalCommandInput,
    cb: (err: any, data?: PublishPortalCommandOutput) => void
  ): void;
  publishPortal(
    args: PublishPortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishPortalCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPortalProductSharingPolicyCommand}
   */
  putPortalProductSharingPolicy(
    args: PutPortalProductSharingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPortalProductSharingPolicyCommandOutput>;
  putPortalProductSharingPolicy(
    args: PutPortalProductSharingPolicyCommandInput,
    cb: (err: any, data?: PutPortalProductSharingPolicyCommandOutput) => void
  ): void;
  putPortalProductSharingPolicy(
    args: PutPortalProductSharingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPortalProductSharingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRoutingRuleCommand}
   */
  putRoutingRule(
    args: PutRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRoutingRuleCommandOutput>;
  putRoutingRule(
    args: PutRoutingRuleCommandInput,
    cb: (err: any, data?: PutRoutingRuleCommandOutput) => void
  ): void;
  putRoutingRule(
    args: PutRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ReimportApiCommand}
   */
  reimportApi(
    args: ReimportApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReimportApiCommandOutput>;
  reimportApi(
    args: ReimportApiCommandInput,
    cb: (err: any, data?: ReimportApiCommandOutput) => void
  ): void;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiCommand}
   */
  updateApi(
    args: UpdateApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiCommandOutput>;
  updateApi(
    args: UpdateApiCommandInput,
    cb: (err: any, data?: UpdateApiCommandOutput) => void
  ): void;
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
  updateModel(
    args: UpdateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelCommandOutput>;
  updateModel(
    args: UpdateModelCommandInput,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortalCommand}
   */
  updatePortal(
    args: UpdatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortalCommandOutput>;
  updatePortal(
    args: UpdatePortalCommandInput,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;
  updatePortal(
    args: UpdatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortalProductCommand}
   */
  updatePortalProduct(
    args: UpdatePortalProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortalProductCommandOutput>;
  updatePortalProduct(
    args: UpdatePortalProductCommandInput,
    cb: (err: any, data?: UpdatePortalProductCommandOutput) => void
  ): void;
  updatePortalProduct(
    args: UpdatePortalProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalProductCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProductPageCommand}
   */
  updateProductPage(
    args: UpdateProductPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProductPageCommandOutput>;
  updateProductPage(
    args: UpdateProductPageCommandInput,
    cb: (err: any, data?: UpdateProductPageCommandOutput) => void
  ): void;
  updateProductPage(
    args: UpdateProductPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProductPageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProductRestEndpointPageCommand}
   */
  updateProductRestEndpointPage(
    args: UpdateProductRestEndpointPageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProductRestEndpointPageCommandOutput>;
  updateProductRestEndpointPage(
    args: UpdateProductRestEndpointPageCommandInput,
    cb: (err: any, data?: UpdateProductRestEndpointPageCommandOutput) => void
  ): void;
  updateProductRestEndpointPage(
    args: UpdateProductRestEndpointPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProductRestEndpointPageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouteCommand}
   */
  updateRoute(
    args: UpdateRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteCommandOutput>;
  updateRoute(
    args: UpdateRouteCommandInput,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;
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
  updateStage(
    args: UpdateStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStageCommandOutput>;
  updateStage(
    args: UpdateStageCommandInput,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcLinkCommand}
   */
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcLinkCommandOutput>;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoutingRulesCommandOutput}.
   */
  paginateListRoutingRules(
    args: ListRoutingRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoutingRulesCommandOutput>;
}

/**
 * <p>Amazon API Gateway V2</p>
 * @public
 */
export class ApiGatewayV2 extends ApiGatewayV2Client implements ApiGatewayV2 {}
createAggregatedClient(commands, ApiGatewayV2, { paginators });
