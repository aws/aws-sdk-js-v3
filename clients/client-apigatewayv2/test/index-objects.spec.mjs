import {
  AccessDeniedException,
  ApiGatewayV2,
  ApiGatewayV2Client,
  ApiGatewayV2ServiceException,
  AuthorizationType,
  AuthorizerType,
  BadRequestException,
  ConflictException,
  ConnectionType,
  ContentHandlingStrategy,
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
  DeploymentStatus,
  DisablePortalCommand,
  DomainNameStatus,
  EndpointType,
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
  GetModelTemplateCommand,
  GetModelsCommand,
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
  IntegrationType,
  IpAddressType,
  ListPortalProductsCommand,
  ListPortalsCommand,
  ListProductPagesCommand,
  ListProductRestEndpointPagesCommand,
  ListRoutingRulesCommand,
  LoggingLevel,
  NotFoundException,
  PassthroughBehavior,
  PreviewPortalCommand,
  PreviewStatus,
  ProtocolType,
  PublishPortalCommand,
  PublishStatus,
  PutPortalProductSharingPolicyCommand,
  PutRoutingRuleCommand,
  ReimportApiCommand,
  ResetAuthorizersCacheCommand,
  RoutingMode,
  SecurityPolicy,
  Status,
  TagResourceCommand,
  TooManyRequestsException,
  TryItState,
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
  VpcLinkStatus,
  VpcLinkVersion,
  paginateListRoutingRules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApiGatewayV2Client === "function");
assert(typeof ApiGatewayV2 === "function");
// commands
assert(typeof CreateApiCommand === "function");
assert(typeof CreateApiMappingCommand === "function");
assert(typeof CreateAuthorizerCommand === "function");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDomainNameCommand === "function");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegrationResponseCommand === "function");
assert(typeof CreateModelCommand === "function");
assert(typeof CreatePortalCommand === "function");
assert(typeof CreatePortalProductCommand === "function");
assert(typeof CreateProductPageCommand === "function");
assert(typeof CreateProductRestEndpointPageCommand === "function");
assert(typeof CreateRouteCommand === "function");
assert(typeof CreateRouteResponseCommand === "function");
assert(typeof CreateRoutingRuleCommand === "function");
assert(typeof CreateStageCommand === "function");
assert(typeof CreateVpcLinkCommand === "function");
assert(typeof DeleteAccessLogSettingsCommand === "function");
assert(typeof DeleteApiCommand === "function");
assert(typeof DeleteApiMappingCommand === "function");
assert(typeof DeleteAuthorizerCommand === "function");
assert(typeof DeleteCorsConfigurationCommand === "function");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDomainNameCommand === "function");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegrationResponseCommand === "function");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeletePortalCommand === "function");
assert(typeof DeletePortalProductCommand === "function");
assert(typeof DeletePortalProductSharingPolicyCommand === "function");
assert(typeof DeleteProductPageCommand === "function");
assert(typeof DeleteProductRestEndpointPageCommand === "function");
assert(typeof DeleteRouteCommand === "function");
assert(typeof DeleteRouteRequestParameterCommand === "function");
assert(typeof DeleteRouteResponseCommand === "function");
assert(typeof DeleteRouteSettingsCommand === "function");
assert(typeof DeleteRoutingRuleCommand === "function");
assert(typeof DeleteStageCommand === "function");
assert(typeof DeleteVpcLinkCommand === "function");
assert(typeof DisablePortalCommand === "function");
assert(typeof ExportApiCommand === "function");
assert(typeof GetApiCommand === "function");
assert(typeof GetApiMappingCommand === "function");
assert(typeof GetApiMappingsCommand === "function");
assert(typeof GetApisCommand === "function");
assert(typeof GetAuthorizerCommand === "function");
assert(typeof GetAuthorizersCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeploymentsCommand === "function");
assert(typeof GetDomainNameCommand === "function");
assert(typeof GetDomainNamesCommand === "function");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegrationResponseCommand === "function");
assert(typeof GetIntegrationResponsesCommand === "function");
assert(typeof GetIntegrationsCommand === "function");
assert(typeof GetModelCommand === "function");
assert(typeof GetModelsCommand === "function");
assert(typeof GetModelTemplateCommand === "function");
assert(typeof GetPortalCommand === "function");
assert(typeof GetPortalProductCommand === "function");
assert(typeof GetPortalProductSharingPolicyCommand === "function");
assert(typeof GetProductPageCommand === "function");
assert(typeof GetProductRestEndpointPageCommand === "function");
assert(typeof GetRouteCommand === "function");
assert(typeof GetRouteResponseCommand === "function");
assert(typeof GetRouteResponsesCommand === "function");
assert(typeof GetRoutesCommand === "function");
assert(typeof GetRoutingRuleCommand === "function");
assert(typeof GetStageCommand === "function");
assert(typeof GetStagesCommand === "function");
assert(typeof GetTagsCommand === "function");
assert(typeof GetVpcLinkCommand === "function");
assert(typeof GetVpcLinksCommand === "function");
assert(typeof ImportApiCommand === "function");
assert(typeof ListPortalProductsCommand === "function");
assert(typeof ListPortalsCommand === "function");
assert(typeof ListProductPagesCommand === "function");
assert(typeof ListProductRestEndpointPagesCommand === "function");
assert(typeof ListRoutingRulesCommand === "function");
assert(typeof PreviewPortalCommand === "function");
assert(typeof PublishPortalCommand === "function");
assert(typeof PutPortalProductSharingPolicyCommand === "function");
assert(typeof PutRoutingRuleCommand === "function");
assert(typeof ReimportApiCommand === "function");
assert(typeof ResetAuthorizersCacheCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApiCommand === "function");
assert(typeof UpdateApiMappingCommand === "function");
assert(typeof UpdateAuthorizerCommand === "function");
assert(typeof UpdateDeploymentCommand === "function");
assert(typeof UpdateDomainNameCommand === "function");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegrationResponseCommand === "function");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdatePortalCommand === "function");
assert(typeof UpdatePortalProductCommand === "function");
assert(typeof UpdateProductPageCommand === "function");
assert(typeof UpdateProductRestEndpointPageCommand === "function");
assert(typeof UpdateRouteCommand === "function");
assert(typeof UpdateRouteResponseCommand === "function");
assert(typeof UpdateStageCommand === "function");
assert(typeof UpdateVpcLinkCommand === "function");
// enums
assert(typeof AuthorizationType === "object");
assert(typeof AuthorizerType === "object");
assert(typeof ConnectionType === "object");
assert(typeof ContentHandlingStrategy === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DomainNameStatus === "object");
assert(typeof EndpointType === "object");
assert(typeof IntegrationType === "object");
assert(typeof IpAddressType === "object");
assert(typeof LoggingLevel === "object");
assert(typeof PassthroughBehavior === "object");
assert(typeof PreviewStatus === "object");
assert(typeof ProtocolType === "object");
assert(typeof PublishStatus === "object");
assert(typeof RoutingMode === "object");
assert(typeof SecurityPolicy === "object");
assert(typeof Status === "object");
assert(typeof TryItState === "object");
assert(typeof VpcLinkStatus === "object");
assert(typeof VpcLinkVersion === "object");
// errors
assert(AccessDeniedException.prototype instanceof ApiGatewayV2ServiceException);
assert(BadRequestException.prototype instanceof ApiGatewayV2ServiceException);
assert(ConflictException.prototype instanceof ApiGatewayV2ServiceException);
assert(NotFoundException.prototype instanceof ApiGatewayV2ServiceException);
assert(TooManyRequestsException.prototype instanceof ApiGatewayV2ServiceException);
assert(ApiGatewayV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRoutingRules === "function");
console.log(`ApiGatewayV2 index test passed.`);
