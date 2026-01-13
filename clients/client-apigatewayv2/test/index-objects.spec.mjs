import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessLogSettings$,
  ACMManaged$,
  Api$,
  ApiGatewayV2,
  ApiGatewayV2Client,
  ApiGatewayV2ServiceException,
  ApiMapping$,
  Authorization$,
  AuthorizationType,
  Authorizer$,
  AuthorizerType,
  BadRequestException,
  BadRequestException$,
  CognitoConfig$,
  ConflictException,
  ConflictException$,
  ConnectionType,
  ContentHandlingStrategy,
  Cors$,
  CreateApi$,
  CreateApiCommand,
  CreateApiMapping$,
  CreateApiMappingCommand,
  CreateApiMappingRequest$,
  CreateApiMappingResponse$,
  CreateApiRequest$,
  CreateApiResponse$,
  CreateAuthorizer$,
  CreateAuthorizerCommand,
  CreateAuthorizerRequest$,
  CreateAuthorizerResponse$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentRequest$,
  CreateDeploymentResponse$,
  CreateDomainName$,
  CreateDomainNameCommand,
  CreateDomainNameRequest$,
  CreateDomainNameResponse$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationRequest$,
  CreateIntegrationResponse$,
  CreateIntegrationResponseCommand,
  CreateIntegrationResponseRequest$,
  CreateIntegrationResponseResponse$,
  CreateIntegrationResult$,
  CreateModel$,
  CreateModelCommand,
  CreateModelRequest$,
  CreateModelResponse$,
  CreatePortal$,
  CreatePortalCommand,
  CreatePortalProduct$,
  CreatePortalProductCommand,
  CreatePortalProductRequest$,
  CreatePortalProductResponse$,
  CreatePortalRequest$,
  CreatePortalResponse$,
  CreateProductPage$,
  CreateProductPageCommand,
  CreateProductPageRequest$,
  CreateProductPageResponse$,
  CreateProductRestEndpointPage$,
  CreateProductRestEndpointPageCommand,
  CreateProductRestEndpointPageRequest$,
  CreateProductRestEndpointPageResponse$,
  CreateRoute$,
  CreateRouteCommand,
  CreateRouteRequest$,
  CreateRouteResponse$,
  CreateRouteResponseCommand,
  CreateRouteResponseRequest$,
  CreateRouteResponseResponse$,
  CreateRouteResult$,
  CreateRoutingRule$,
  CreateRoutingRuleCommand,
  CreateRoutingRuleRequest$,
  CreateRoutingRuleResponse$,
  CreateStage$,
  CreateStageCommand,
  CreateStageRequest$,
  CreateStageResponse$,
  CreateVpcLink$,
  CreateVpcLinkCommand,
  CreateVpcLinkRequest$,
  CreateVpcLinkResponse$,
  CustomColors$,
  DeleteAccessLogSettings$,
  DeleteAccessLogSettingsCommand,
  DeleteAccessLogSettingsRequest$,
  DeleteApi$,
  DeleteApiCommand,
  DeleteApiMapping$,
  DeleteApiMappingCommand,
  DeleteApiMappingRequest$,
  DeleteApiRequest$,
  DeleteAuthorizer$,
  DeleteAuthorizerCommand,
  DeleteAuthorizerRequest$,
  DeleteCorsConfiguration$,
  DeleteCorsConfigurationCommand,
  DeleteCorsConfigurationRequest$,
  DeleteDeployment$,
  DeleteDeploymentCommand,
  DeleteDeploymentRequest$,
  DeleteDomainName$,
  DeleteDomainNameCommand,
  DeleteDomainNameRequest$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationRequest$,
  DeleteIntegrationResponse$,
  DeleteIntegrationResponseCommand,
  DeleteIntegrationResponseRequest$,
  DeleteModel$,
  DeleteModelCommand,
  DeleteModelRequest$,
  DeletePortal$,
  DeletePortalCommand,
  DeletePortalProduct$,
  DeletePortalProductCommand,
  DeletePortalProductRequest$,
  DeletePortalProductSharingPolicy$,
  DeletePortalProductSharingPolicyCommand,
  DeletePortalProductSharingPolicyRequest$,
  DeletePortalRequest$,
  DeleteProductPage$,
  DeleteProductPageCommand,
  DeleteProductPageRequest$,
  DeleteProductRestEndpointPage$,
  DeleteProductRestEndpointPageCommand,
  DeleteProductRestEndpointPageRequest$,
  DeleteRoute$,
  DeleteRouteCommand,
  DeleteRouteRequest$,
  DeleteRouteRequestParameter$,
  DeleteRouteRequestParameterCommand,
  DeleteRouteRequestParameterRequest$,
  DeleteRouteResponse$,
  DeleteRouteResponseCommand,
  DeleteRouteResponseRequest$,
  DeleteRouteSettings$,
  DeleteRouteSettingsCommand,
  DeleteRouteSettingsRequest$,
  DeleteRoutingRule$,
  DeleteRoutingRuleCommand,
  DeleteRoutingRuleRequest$,
  DeleteStage$,
  DeleteStageCommand,
  DeleteStageRequest$,
  DeleteVpcLink$,
  DeleteVpcLinkCommand,
  DeleteVpcLinkRequest$,
  DeleteVpcLinkResponse$,
  Deployment$,
  DeploymentStatus,
  DisablePortal$,
  DisablePortalCommand,
  DisablePortalRequest$,
  DisplayContent$,
  DisplayContentOverrides$,
  DisplayOrder$,
  DomainName$,
  DomainNameConfiguration$,
  DomainNameStatus,
  EndpointConfigurationRequest$,
  EndpointConfigurationResponse$,
  EndpointDisplayContent$,
  EndpointDisplayContentResponse$,
  EndpointType,
  ExportApi$,
  ExportApiCommand,
  ExportApiRequest$,
  ExportApiResponse$,
  GetApi$,
  GetApiCommand,
  GetApiMapping$,
  GetApiMappingCommand,
  GetApiMappingRequest$,
  GetApiMappingResponse$,
  GetApiMappings$,
  GetApiMappingsCommand,
  GetApiMappingsRequest$,
  GetApiMappingsResponse$,
  GetApiRequest$,
  GetApiResponse$,
  GetApis$,
  GetApisCommand,
  GetApisRequest$,
  GetApisResponse$,
  GetAuthorizer$,
  GetAuthorizerCommand,
  GetAuthorizerRequest$,
  GetAuthorizerResponse$,
  GetAuthorizers$,
  GetAuthorizersCommand,
  GetAuthorizersRequest$,
  GetAuthorizersResponse$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentRequest$,
  GetDeploymentResponse$,
  GetDeployments$,
  GetDeploymentsCommand,
  GetDeploymentsRequest$,
  GetDeploymentsResponse$,
  GetDomainName$,
  GetDomainNameCommand,
  GetDomainNameRequest$,
  GetDomainNameResponse$,
  GetDomainNames$,
  GetDomainNamesCommand,
  GetDomainNamesRequest$,
  GetDomainNamesResponse$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationRequest$,
  GetIntegrationResponse$,
  GetIntegrationResponseCommand,
  GetIntegrationResponseRequest$,
  GetIntegrationResponseResponse$,
  GetIntegrationResponses$,
  GetIntegrationResponsesCommand,
  GetIntegrationResponsesRequest$,
  GetIntegrationResponsesResponse$,
  GetIntegrationResult$,
  GetIntegrations$,
  GetIntegrationsCommand,
  GetIntegrationsRequest$,
  GetIntegrationsResponse$,
  GetModel$,
  GetModelCommand,
  GetModelRequest$,
  GetModelResponse$,
  GetModels$,
  GetModelsCommand,
  GetModelsRequest$,
  GetModelsResponse$,
  GetModelTemplate$,
  GetModelTemplateCommand,
  GetModelTemplateRequest$,
  GetModelTemplateResponse$,
  GetPortal$,
  GetPortalCommand,
  GetPortalProduct$,
  GetPortalProductCommand,
  GetPortalProductRequest$,
  GetPortalProductResponse$,
  GetPortalProductSharingPolicy$,
  GetPortalProductSharingPolicyCommand,
  GetPortalProductSharingPolicyRequest$,
  GetPortalProductSharingPolicyResponse$,
  GetPortalRequest$,
  GetPortalResponse$,
  GetProductPage$,
  GetProductPageCommand,
  GetProductPageRequest$,
  GetProductPageResponse$,
  GetProductRestEndpointPage$,
  GetProductRestEndpointPageCommand,
  GetProductRestEndpointPageRequest$,
  GetProductRestEndpointPageResponse$,
  GetRoute$,
  GetRouteCommand,
  GetRouteRequest$,
  GetRouteResponse$,
  GetRouteResponseCommand,
  GetRouteResponseRequest$,
  GetRouteResponseResponse$,
  GetRouteResponses$,
  GetRouteResponsesCommand,
  GetRouteResponsesRequest$,
  GetRouteResponsesResponse$,
  GetRouteResult$,
  GetRoutes$,
  GetRoutesCommand,
  GetRoutesRequest$,
  GetRoutesResponse$,
  GetRoutingRule$,
  GetRoutingRuleCommand,
  GetRoutingRuleRequest$,
  GetRoutingRuleResponse$,
  GetStage$,
  GetStageCommand,
  GetStageRequest$,
  GetStageResponse$,
  GetStages$,
  GetStagesCommand,
  GetStagesRequest$,
  GetStagesResponse$,
  GetTags$,
  GetTagsCommand,
  GetTagsRequest$,
  GetTagsResponse$,
  GetVpcLink$,
  GetVpcLinkCommand,
  GetVpcLinkRequest$,
  GetVpcLinkResponse$,
  GetVpcLinks$,
  GetVpcLinksCommand,
  GetVpcLinksRequest$,
  GetVpcLinksResponse$,
  IdentifierParts$,
  ImportApi$,
  ImportApiCommand,
  ImportApiRequest$,
  ImportApiResponse$,
  Integration$,
  IntegrationResponse$,
  IntegrationType,
  IpAddressType,
  JWTConfiguration$,
  ListPortalProducts$,
  ListPortalProductsCommand,
  ListPortalProductsRequest$,
  ListPortalProductsResponse$,
  ListPortals$,
  ListPortalsCommand,
  ListPortalsRequest$,
  ListPortalsResponse$,
  ListProductPages$,
  ListProductPagesCommand,
  ListProductPagesRequest$,
  ListProductPagesResponse$,
  ListProductRestEndpointPages$,
  ListProductRestEndpointPagesCommand,
  ListProductRestEndpointPagesRequest$,
  ListProductRestEndpointPagesResponse$,
  ListRoutingRules$,
  ListRoutingRulesCommand,
  ListRoutingRulesRequest$,
  ListRoutingRulesResponse$,
  LoggingLevel,
  Model$,
  MutualTlsAuthentication$,
  MutualTlsAuthenticationInput$,
  None$,
  NotFoundException,
  NotFoundException$,
  paginateListRoutingRules,
  ParameterConstraints$,
  PassthroughBehavior,
  PortalContent$,
  PortalProductSummary$,
  PortalSummary$,
  PortalTheme$,
  Preview$,
  PreviewPortal$,
  PreviewPortalCommand,
  PreviewPortalRequest$,
  PreviewPortalResponse$,
  PreviewStatus,
  ProductPageSummaryNoBody$,
  ProductRestEndpointPageSummaryNoBody$,
  ProtocolType,
  PublishPortal$,
  PublishPortalCommand,
  PublishPortalRequest$,
  PublishPortalResponse$,
  PublishStatus,
  PutPortalProductSharingPolicy$,
  PutPortalProductSharingPolicyCommand,
  PutPortalProductSharingPolicyRequest$,
  PutPortalProductSharingPolicyResponse$,
  PutRoutingRule$,
  PutRoutingRuleCommand,
  PutRoutingRuleRequest$,
  PutRoutingRuleResponse$,
  ReimportApi$,
  ReimportApiCommand,
  ReimportApiRequest$,
  ReimportApiResponse$,
  ResetAuthorizersCache$,
  ResetAuthorizersCacheCommand,
  ResetAuthorizersCacheRequest$,
  RestEndpointIdentifier$,
  Route$,
  RouteResponse$,
  RouteSettings$,
  RoutingMode,
  RoutingRule$,
  RoutingRuleAction$,
  RoutingRuleActionInvokeApi$,
  RoutingRuleCondition$,
  RoutingRuleMatchBasePaths$,
  RoutingRuleMatchHeaders$,
  RoutingRuleMatchHeaderValue$,
  Section$,
  SecurityPolicy,
  Stage$,
  Status,
  StatusException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TlsConfig$,
  TlsConfigInput$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TryItState,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateApi$,
  UpdateApiCommand,
  UpdateApiMapping$,
  UpdateApiMappingCommand,
  UpdateApiMappingRequest$,
  UpdateApiMappingResponse$,
  UpdateApiRequest$,
  UpdateApiResponse$,
  UpdateAuthorizer$,
  UpdateAuthorizerCommand,
  UpdateAuthorizerRequest$,
  UpdateAuthorizerResponse$,
  UpdateDeployment$,
  UpdateDeploymentCommand,
  UpdateDeploymentRequest$,
  UpdateDeploymentResponse$,
  UpdateDomainName$,
  UpdateDomainNameCommand,
  UpdateDomainNameRequest$,
  UpdateDomainNameResponse$,
  UpdateIntegration$,
  UpdateIntegrationCommand,
  UpdateIntegrationRequest$,
  UpdateIntegrationResponse$,
  UpdateIntegrationResponseCommand,
  UpdateIntegrationResponseRequest$,
  UpdateIntegrationResponseResponse$,
  UpdateIntegrationResult$,
  UpdateModel$,
  UpdateModelCommand,
  UpdateModelRequest$,
  UpdateModelResponse$,
  UpdatePortal$,
  UpdatePortalCommand,
  UpdatePortalProduct$,
  UpdatePortalProductCommand,
  UpdatePortalProductRequest$,
  UpdatePortalProductResponse$,
  UpdatePortalRequest$,
  UpdatePortalResponse$,
  UpdateProductPage$,
  UpdateProductPageCommand,
  UpdateProductPageRequest$,
  UpdateProductPageResponse$,
  UpdateProductRestEndpointPage$,
  UpdateProductRestEndpointPageCommand,
  UpdateProductRestEndpointPageRequest$,
  UpdateProductRestEndpointPageResponse$,
  UpdateRoute$,
  UpdateRouteCommand,
  UpdateRouteRequest$,
  UpdateRouteResponse$,
  UpdateRouteResponseCommand,
  UpdateRouteResponseRequest$,
  UpdateRouteResponseResponse$,
  UpdateRouteResult$,
  UpdateStage$,
  UpdateStageCommand,
  UpdateStageRequest$,
  UpdateStageResponse$,
  UpdateVpcLink$,
  UpdateVpcLinkCommand,
  UpdateVpcLinkRequest$,
  UpdateVpcLinkResponse$,
  VpcLink$,
  VpcLinkStatus,
  VpcLinkVersion,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApiGatewayV2Client === "function");
assert(typeof ApiGatewayV2 === "function");
// commands
assert(typeof CreateApiCommand === "function");
assert(typeof CreateApi$ === "object");
assert(typeof CreateApiMappingCommand === "function");
assert(typeof CreateApiMapping$ === "object");
assert(typeof CreateAuthorizerCommand === "function");
assert(typeof CreateAuthorizer$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateDomainNameCommand === "function");
assert(typeof CreateDomainName$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateIntegrationResponseCommand === "function");
assert(typeof CreateIntegrationResponse$ === "object");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateModel$ === "object");
assert(typeof CreatePortalCommand === "function");
assert(typeof CreatePortal$ === "object");
assert(typeof CreatePortalProductCommand === "function");
assert(typeof CreatePortalProduct$ === "object");
assert(typeof CreateProductPageCommand === "function");
assert(typeof CreateProductPage$ === "object");
assert(typeof CreateProductRestEndpointPageCommand === "function");
assert(typeof CreateProductRestEndpointPage$ === "object");
assert(typeof CreateRouteCommand === "function");
assert(typeof CreateRoute$ === "object");
assert(typeof CreateRouteResponseCommand === "function");
assert(typeof CreateRouteResponse$ === "object");
assert(typeof CreateRoutingRuleCommand === "function");
assert(typeof CreateRoutingRule$ === "object");
assert(typeof CreateStageCommand === "function");
assert(typeof CreateStage$ === "object");
assert(typeof CreateVpcLinkCommand === "function");
assert(typeof CreateVpcLink$ === "object");
assert(typeof DeleteAccessLogSettingsCommand === "function");
assert(typeof DeleteAccessLogSettings$ === "object");
assert(typeof DeleteApiCommand === "function");
assert(typeof DeleteApi$ === "object");
assert(typeof DeleteApiMappingCommand === "function");
assert(typeof DeleteApiMapping$ === "object");
assert(typeof DeleteAuthorizerCommand === "function");
assert(typeof DeleteAuthorizer$ === "object");
assert(typeof DeleteCorsConfigurationCommand === "function");
assert(typeof DeleteCorsConfiguration$ === "object");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDeployment$ === "object");
assert(typeof DeleteDomainNameCommand === "function");
assert(typeof DeleteDomainName$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteIntegrationResponseCommand === "function");
assert(typeof DeleteIntegrationResponse$ === "object");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteModel$ === "object");
assert(typeof DeletePortalCommand === "function");
assert(typeof DeletePortal$ === "object");
assert(typeof DeletePortalProductCommand === "function");
assert(typeof DeletePortalProduct$ === "object");
assert(typeof DeletePortalProductSharingPolicyCommand === "function");
assert(typeof DeletePortalProductSharingPolicy$ === "object");
assert(typeof DeleteProductPageCommand === "function");
assert(typeof DeleteProductPage$ === "object");
assert(typeof DeleteProductRestEndpointPageCommand === "function");
assert(typeof DeleteProductRestEndpointPage$ === "object");
assert(typeof DeleteRouteCommand === "function");
assert(typeof DeleteRoute$ === "object");
assert(typeof DeleteRouteRequestParameterCommand === "function");
assert(typeof DeleteRouteRequestParameter$ === "object");
assert(typeof DeleteRouteResponseCommand === "function");
assert(typeof DeleteRouteResponse$ === "object");
assert(typeof DeleteRouteSettingsCommand === "function");
assert(typeof DeleteRouteSettings$ === "object");
assert(typeof DeleteRoutingRuleCommand === "function");
assert(typeof DeleteRoutingRule$ === "object");
assert(typeof DeleteStageCommand === "function");
assert(typeof DeleteStage$ === "object");
assert(typeof DeleteVpcLinkCommand === "function");
assert(typeof DeleteVpcLink$ === "object");
assert(typeof DisablePortalCommand === "function");
assert(typeof DisablePortal$ === "object");
assert(typeof ExportApiCommand === "function");
assert(typeof ExportApi$ === "object");
assert(typeof GetApiCommand === "function");
assert(typeof GetApi$ === "object");
assert(typeof GetApiMappingCommand === "function");
assert(typeof GetApiMapping$ === "object");
assert(typeof GetApiMappingsCommand === "function");
assert(typeof GetApiMappings$ === "object");
assert(typeof GetApisCommand === "function");
assert(typeof GetApis$ === "object");
assert(typeof GetAuthorizerCommand === "function");
assert(typeof GetAuthorizer$ === "object");
assert(typeof GetAuthorizersCommand === "function");
assert(typeof GetAuthorizers$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetDeploymentsCommand === "function");
assert(typeof GetDeployments$ === "object");
assert(typeof GetDomainNameCommand === "function");
assert(typeof GetDomainName$ === "object");
assert(typeof GetDomainNamesCommand === "function");
assert(typeof GetDomainNames$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetIntegrationResponseCommand === "function");
assert(typeof GetIntegrationResponse$ === "object");
assert(typeof GetIntegrationResponsesCommand === "function");
assert(typeof GetIntegrationResponses$ === "object");
assert(typeof GetIntegrationsCommand === "function");
assert(typeof GetIntegrations$ === "object");
assert(typeof GetModelCommand === "function");
assert(typeof GetModel$ === "object");
assert(typeof GetModelsCommand === "function");
assert(typeof GetModels$ === "object");
assert(typeof GetModelTemplateCommand === "function");
assert(typeof GetModelTemplate$ === "object");
assert(typeof GetPortalCommand === "function");
assert(typeof GetPortal$ === "object");
assert(typeof GetPortalProductCommand === "function");
assert(typeof GetPortalProduct$ === "object");
assert(typeof GetPortalProductSharingPolicyCommand === "function");
assert(typeof GetPortalProductSharingPolicy$ === "object");
assert(typeof GetProductPageCommand === "function");
assert(typeof GetProductPage$ === "object");
assert(typeof GetProductRestEndpointPageCommand === "function");
assert(typeof GetProductRestEndpointPage$ === "object");
assert(typeof GetRouteCommand === "function");
assert(typeof GetRoute$ === "object");
assert(typeof GetRouteResponseCommand === "function");
assert(typeof GetRouteResponse$ === "object");
assert(typeof GetRouteResponsesCommand === "function");
assert(typeof GetRouteResponses$ === "object");
assert(typeof GetRoutesCommand === "function");
assert(typeof GetRoutes$ === "object");
assert(typeof GetRoutingRuleCommand === "function");
assert(typeof GetRoutingRule$ === "object");
assert(typeof GetStageCommand === "function");
assert(typeof GetStage$ === "object");
assert(typeof GetStagesCommand === "function");
assert(typeof GetStages$ === "object");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTags$ === "object");
assert(typeof GetVpcLinkCommand === "function");
assert(typeof GetVpcLink$ === "object");
assert(typeof GetVpcLinksCommand === "function");
assert(typeof GetVpcLinks$ === "object");
assert(typeof ImportApiCommand === "function");
assert(typeof ImportApi$ === "object");
assert(typeof ListPortalProductsCommand === "function");
assert(typeof ListPortalProducts$ === "object");
assert(typeof ListPortalsCommand === "function");
assert(typeof ListPortals$ === "object");
assert(typeof ListProductPagesCommand === "function");
assert(typeof ListProductPages$ === "object");
assert(typeof ListProductRestEndpointPagesCommand === "function");
assert(typeof ListProductRestEndpointPages$ === "object");
assert(typeof ListRoutingRulesCommand === "function");
assert(typeof ListRoutingRules$ === "object");
assert(typeof PreviewPortalCommand === "function");
assert(typeof PreviewPortal$ === "object");
assert(typeof PublishPortalCommand === "function");
assert(typeof PublishPortal$ === "object");
assert(typeof PutPortalProductSharingPolicyCommand === "function");
assert(typeof PutPortalProductSharingPolicy$ === "object");
assert(typeof PutRoutingRuleCommand === "function");
assert(typeof PutRoutingRule$ === "object");
assert(typeof ReimportApiCommand === "function");
assert(typeof ReimportApi$ === "object");
assert(typeof ResetAuthorizersCacheCommand === "function");
assert(typeof ResetAuthorizersCache$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApiCommand === "function");
assert(typeof UpdateApi$ === "object");
assert(typeof UpdateApiMappingCommand === "function");
assert(typeof UpdateApiMapping$ === "object");
assert(typeof UpdateAuthorizerCommand === "function");
assert(typeof UpdateAuthorizer$ === "object");
assert(typeof UpdateDeploymentCommand === "function");
assert(typeof UpdateDeployment$ === "object");
assert(typeof UpdateDomainNameCommand === "function");
assert(typeof UpdateDomainName$ === "object");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegration$ === "object");
assert(typeof UpdateIntegrationResponseCommand === "function");
assert(typeof UpdateIntegrationResponse$ === "object");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdateModel$ === "object");
assert(typeof UpdatePortalCommand === "function");
assert(typeof UpdatePortal$ === "object");
assert(typeof UpdatePortalProductCommand === "function");
assert(typeof UpdatePortalProduct$ === "object");
assert(typeof UpdateProductPageCommand === "function");
assert(typeof UpdateProductPage$ === "object");
assert(typeof UpdateProductRestEndpointPageCommand === "function");
assert(typeof UpdateProductRestEndpointPage$ === "object");
assert(typeof UpdateRouteCommand === "function");
assert(typeof UpdateRoute$ === "object");
assert(typeof UpdateRouteResponseCommand === "function");
assert(typeof UpdateRouteResponse$ === "object");
assert(typeof UpdateStageCommand === "function");
assert(typeof UpdateStage$ === "object");
assert(typeof UpdateVpcLinkCommand === "function");
assert(typeof UpdateVpcLink$ === "object");
// structural schemas
assert(typeof AccessLogSettings$ === "object");
assert(typeof ACMManaged$ === "object");
assert(typeof Api$ === "object");
assert(typeof ApiMapping$ === "object");
assert(typeof Authorization$ === "object");
assert(typeof Authorizer$ === "object");
assert(typeof CognitoConfig$ === "object");
assert(typeof Cors$ === "object");
assert(typeof CreateApiMappingRequest$ === "object");
assert(typeof CreateApiMappingResponse$ === "object");
assert(typeof CreateApiRequest$ === "object");
assert(typeof CreateApiResponse$ === "object");
assert(typeof CreateAuthorizerRequest$ === "object");
assert(typeof CreateAuthorizerResponse$ === "object");
assert(typeof CreateDeploymentRequest$ === "object");
assert(typeof CreateDeploymentResponse$ === "object");
assert(typeof CreateDomainNameRequest$ === "object");
assert(typeof CreateDomainNameResponse$ === "object");
assert(typeof CreateIntegrationRequest$ === "object");
assert(typeof CreateIntegrationResponseRequest$ === "object");
assert(typeof CreateIntegrationResponseResponse$ === "object");
assert(typeof CreateIntegrationResult$ === "object");
assert(typeof CreateModelRequest$ === "object");
assert(typeof CreateModelResponse$ === "object");
assert(typeof CreatePortalProductRequest$ === "object");
assert(typeof CreatePortalProductResponse$ === "object");
assert(typeof CreatePortalRequest$ === "object");
assert(typeof CreatePortalResponse$ === "object");
assert(typeof CreateProductPageRequest$ === "object");
assert(typeof CreateProductPageResponse$ === "object");
assert(typeof CreateProductRestEndpointPageRequest$ === "object");
assert(typeof CreateProductRestEndpointPageResponse$ === "object");
assert(typeof CreateRouteRequest$ === "object");
assert(typeof CreateRouteResponseRequest$ === "object");
assert(typeof CreateRouteResponseResponse$ === "object");
assert(typeof CreateRouteResult$ === "object");
assert(typeof CreateRoutingRuleRequest$ === "object");
assert(typeof CreateRoutingRuleResponse$ === "object");
assert(typeof CreateStageRequest$ === "object");
assert(typeof CreateStageResponse$ === "object");
assert(typeof CreateVpcLinkRequest$ === "object");
assert(typeof CreateVpcLinkResponse$ === "object");
assert(typeof CustomColors$ === "object");
assert(typeof DeleteAccessLogSettingsRequest$ === "object");
assert(typeof DeleteApiMappingRequest$ === "object");
assert(typeof DeleteApiRequest$ === "object");
assert(typeof DeleteAuthorizerRequest$ === "object");
assert(typeof DeleteCorsConfigurationRequest$ === "object");
assert(typeof DeleteDeploymentRequest$ === "object");
assert(typeof DeleteDomainNameRequest$ === "object");
assert(typeof DeleteIntegrationRequest$ === "object");
assert(typeof DeleteIntegrationResponseRequest$ === "object");
assert(typeof DeleteModelRequest$ === "object");
assert(typeof DeletePortalProductRequest$ === "object");
assert(typeof DeletePortalProductSharingPolicyRequest$ === "object");
assert(typeof DeletePortalRequest$ === "object");
assert(typeof DeleteProductPageRequest$ === "object");
assert(typeof DeleteProductRestEndpointPageRequest$ === "object");
assert(typeof DeleteRouteRequest$ === "object");
assert(typeof DeleteRouteRequestParameterRequest$ === "object");
assert(typeof DeleteRouteResponseRequest$ === "object");
assert(typeof DeleteRouteSettingsRequest$ === "object");
assert(typeof DeleteRoutingRuleRequest$ === "object");
assert(typeof DeleteStageRequest$ === "object");
assert(typeof DeleteVpcLinkRequest$ === "object");
assert(typeof DeleteVpcLinkResponse$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DisablePortalRequest$ === "object");
assert(typeof DisplayContent$ === "object");
assert(typeof DisplayContentOverrides$ === "object");
assert(typeof DisplayOrder$ === "object");
assert(typeof DomainName$ === "object");
assert(typeof DomainNameConfiguration$ === "object");
assert(typeof EndpointConfigurationRequest$ === "object");
assert(typeof EndpointConfigurationResponse$ === "object");
assert(typeof EndpointDisplayContent$ === "object");
assert(typeof EndpointDisplayContentResponse$ === "object");
assert(typeof ExportApiRequest$ === "object");
assert(typeof ExportApiResponse$ === "object");
assert(typeof GetApiMappingRequest$ === "object");
assert(typeof GetApiMappingResponse$ === "object");
assert(typeof GetApiMappingsRequest$ === "object");
assert(typeof GetApiMappingsResponse$ === "object");
assert(typeof GetApiRequest$ === "object");
assert(typeof GetApiResponse$ === "object");
assert(typeof GetApisRequest$ === "object");
assert(typeof GetApisResponse$ === "object");
assert(typeof GetAuthorizerRequest$ === "object");
assert(typeof GetAuthorizerResponse$ === "object");
assert(typeof GetAuthorizersRequest$ === "object");
assert(typeof GetAuthorizersResponse$ === "object");
assert(typeof GetDeploymentRequest$ === "object");
assert(typeof GetDeploymentResponse$ === "object");
assert(typeof GetDeploymentsRequest$ === "object");
assert(typeof GetDeploymentsResponse$ === "object");
assert(typeof GetDomainNameRequest$ === "object");
assert(typeof GetDomainNameResponse$ === "object");
assert(typeof GetDomainNamesRequest$ === "object");
assert(typeof GetDomainNamesResponse$ === "object");
assert(typeof GetIntegrationRequest$ === "object");
assert(typeof GetIntegrationResponseRequest$ === "object");
assert(typeof GetIntegrationResponseResponse$ === "object");
assert(typeof GetIntegrationResponsesRequest$ === "object");
assert(typeof GetIntegrationResponsesResponse$ === "object");
assert(typeof GetIntegrationResult$ === "object");
assert(typeof GetIntegrationsRequest$ === "object");
assert(typeof GetIntegrationsResponse$ === "object");
assert(typeof GetModelRequest$ === "object");
assert(typeof GetModelResponse$ === "object");
assert(typeof GetModelsRequest$ === "object");
assert(typeof GetModelsResponse$ === "object");
assert(typeof GetModelTemplateRequest$ === "object");
assert(typeof GetModelTemplateResponse$ === "object");
assert(typeof GetPortalProductRequest$ === "object");
assert(typeof GetPortalProductResponse$ === "object");
assert(typeof GetPortalProductSharingPolicyRequest$ === "object");
assert(typeof GetPortalProductSharingPolicyResponse$ === "object");
assert(typeof GetPortalRequest$ === "object");
assert(typeof GetPortalResponse$ === "object");
assert(typeof GetProductPageRequest$ === "object");
assert(typeof GetProductPageResponse$ === "object");
assert(typeof GetProductRestEndpointPageRequest$ === "object");
assert(typeof GetProductRestEndpointPageResponse$ === "object");
assert(typeof GetRouteRequest$ === "object");
assert(typeof GetRouteResponseRequest$ === "object");
assert(typeof GetRouteResponseResponse$ === "object");
assert(typeof GetRouteResponsesRequest$ === "object");
assert(typeof GetRouteResponsesResponse$ === "object");
assert(typeof GetRouteResult$ === "object");
assert(typeof GetRoutesRequest$ === "object");
assert(typeof GetRoutesResponse$ === "object");
assert(typeof GetRoutingRuleRequest$ === "object");
assert(typeof GetRoutingRuleResponse$ === "object");
assert(typeof GetStageRequest$ === "object");
assert(typeof GetStageResponse$ === "object");
assert(typeof GetStagesRequest$ === "object");
assert(typeof GetStagesResponse$ === "object");
assert(typeof GetTagsRequest$ === "object");
assert(typeof GetTagsResponse$ === "object");
assert(typeof GetVpcLinkRequest$ === "object");
assert(typeof GetVpcLinkResponse$ === "object");
assert(typeof GetVpcLinksRequest$ === "object");
assert(typeof GetVpcLinksResponse$ === "object");
assert(typeof IdentifierParts$ === "object");
assert(typeof ImportApiRequest$ === "object");
assert(typeof ImportApiResponse$ === "object");
assert(typeof Integration$ === "object");
assert(typeof IntegrationResponse$ === "object");
assert(typeof JWTConfiguration$ === "object");
assert(typeof ListPortalProductsRequest$ === "object");
assert(typeof ListPortalProductsResponse$ === "object");
assert(typeof ListPortalsRequest$ === "object");
assert(typeof ListPortalsResponse$ === "object");
assert(typeof ListProductPagesRequest$ === "object");
assert(typeof ListProductPagesResponse$ === "object");
assert(typeof ListProductRestEndpointPagesRequest$ === "object");
assert(typeof ListProductRestEndpointPagesResponse$ === "object");
assert(typeof ListRoutingRulesRequest$ === "object");
assert(typeof ListRoutingRulesResponse$ === "object");
assert(typeof Model$ === "object");
assert(typeof MutualTlsAuthentication$ === "object");
assert(typeof MutualTlsAuthenticationInput$ === "object");
assert(typeof None$ === "object");
assert(typeof ParameterConstraints$ === "object");
assert(typeof PortalContent$ === "object");
assert(typeof PortalProductSummary$ === "object");
assert(typeof PortalSummary$ === "object");
assert(typeof PortalTheme$ === "object");
assert(typeof Preview$ === "object");
assert(typeof PreviewPortalRequest$ === "object");
assert(typeof PreviewPortalResponse$ === "object");
assert(typeof ProductPageSummaryNoBody$ === "object");
assert(typeof ProductRestEndpointPageSummaryNoBody$ === "object");
assert(typeof PublishPortalRequest$ === "object");
assert(typeof PublishPortalResponse$ === "object");
assert(typeof PutPortalProductSharingPolicyRequest$ === "object");
assert(typeof PutPortalProductSharingPolicyResponse$ === "object");
assert(typeof PutRoutingRuleRequest$ === "object");
assert(typeof PutRoutingRuleResponse$ === "object");
assert(typeof ReimportApiRequest$ === "object");
assert(typeof ReimportApiResponse$ === "object");
assert(typeof ResetAuthorizersCacheRequest$ === "object");
assert(typeof RestEndpointIdentifier$ === "object");
assert(typeof Route$ === "object");
assert(typeof RouteResponse$ === "object");
assert(typeof RouteSettings$ === "object");
assert(typeof RoutingRule$ === "object");
assert(typeof RoutingRuleAction$ === "object");
assert(typeof RoutingRuleActionInvokeApi$ === "object");
assert(typeof RoutingRuleCondition$ === "object");
assert(typeof RoutingRuleMatchBasePaths$ === "object");
assert(typeof RoutingRuleMatchHeaders$ === "object");
assert(typeof RoutingRuleMatchHeaderValue$ === "object");
assert(typeof Section$ === "object");
assert(typeof Stage$ === "object");
assert(typeof StatusException$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TlsConfig$ === "object");
assert(typeof TlsConfigInput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateApiMappingRequest$ === "object");
assert(typeof UpdateApiMappingResponse$ === "object");
assert(typeof UpdateApiRequest$ === "object");
assert(typeof UpdateApiResponse$ === "object");
assert(typeof UpdateAuthorizerRequest$ === "object");
assert(typeof UpdateAuthorizerResponse$ === "object");
assert(typeof UpdateDeploymentRequest$ === "object");
assert(typeof UpdateDeploymentResponse$ === "object");
assert(typeof UpdateDomainNameRequest$ === "object");
assert(typeof UpdateDomainNameResponse$ === "object");
assert(typeof UpdateIntegrationRequest$ === "object");
assert(typeof UpdateIntegrationResponseRequest$ === "object");
assert(typeof UpdateIntegrationResponseResponse$ === "object");
assert(typeof UpdateIntegrationResult$ === "object");
assert(typeof UpdateModelRequest$ === "object");
assert(typeof UpdateModelResponse$ === "object");
assert(typeof UpdatePortalProductRequest$ === "object");
assert(typeof UpdatePortalProductResponse$ === "object");
assert(typeof UpdatePortalRequest$ === "object");
assert(typeof UpdatePortalResponse$ === "object");
assert(typeof UpdateProductPageRequest$ === "object");
assert(typeof UpdateProductPageResponse$ === "object");
assert(typeof UpdateProductRestEndpointPageRequest$ === "object");
assert(typeof UpdateProductRestEndpointPageResponse$ === "object");
assert(typeof UpdateRouteRequest$ === "object");
assert(typeof UpdateRouteResponseRequest$ === "object");
assert(typeof UpdateRouteResponseResponse$ === "object");
assert(typeof UpdateRouteResult$ === "object");
assert(typeof UpdateStageRequest$ === "object");
assert(typeof UpdateStageResponse$ === "object");
assert(typeof UpdateVpcLinkRequest$ === "object");
assert(typeof UpdateVpcLinkResponse$ === "object");
assert(typeof VpcLink$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof ApiGatewayV2ServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ApiGatewayV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(NotFoundException.prototype instanceof ApiGatewayV2ServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof ApiGatewayV2ServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ApiGatewayV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRoutingRules === "function");
console.log(`ApiGatewayV2 index test passed.`);
