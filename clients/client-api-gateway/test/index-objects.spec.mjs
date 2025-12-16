import {
  APIGateway,
  APIGatewayClient,
  APIGatewayServiceException,
  AccessAssociationSourceType,
  AccessLogSettings$,
  Account$,
  ApiKey$,
  ApiKeyIds$,
  ApiKeySourceType,
  ApiKeys$,
  ApiKeysFormat,
  ApiStage$,
  ApiStatus,
  Authorizer$,
  AuthorizerType,
  Authorizers$,
  BadRequestException,
  BadRequestException$,
  BasePathMapping$,
  BasePathMappings$,
  CacheClusterSize,
  CacheClusterStatus,
  CanarySettings$,
  ClientCertificate$,
  ClientCertificates$,
  ConflictException,
  ConflictException$,
  ConnectionType,
  ContentHandlingStrategy,
  CreateApiKey$,
  CreateApiKeyCommand,
  CreateApiKeyRequest$,
  CreateAuthorizer$,
  CreateAuthorizerCommand,
  CreateAuthorizerRequest$,
  CreateBasePathMapping$,
  CreateBasePathMappingCommand,
  CreateBasePathMappingRequest$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentRequest$,
  CreateDocumentationPart$,
  CreateDocumentationPartCommand,
  CreateDocumentationPartRequest$,
  CreateDocumentationVersion$,
  CreateDocumentationVersionCommand,
  CreateDocumentationVersionRequest$,
  CreateDomainName$,
  CreateDomainNameAccessAssociation$,
  CreateDomainNameAccessAssociationCommand,
  CreateDomainNameAccessAssociationRequest$,
  CreateDomainNameCommand,
  CreateDomainNameRequest$,
  CreateModel$,
  CreateModelCommand,
  CreateModelRequest$,
  CreateRequestValidator$,
  CreateRequestValidatorCommand,
  CreateRequestValidatorRequest$,
  CreateResource$,
  CreateResourceCommand,
  CreateResourceRequest$,
  CreateRestApi$,
  CreateRestApiCommand,
  CreateRestApiRequest$,
  CreateStage$,
  CreateStageCommand,
  CreateStageRequest$,
  CreateUsagePlan$,
  CreateUsagePlanCommand,
  CreateUsagePlanKey$,
  CreateUsagePlanKeyCommand,
  CreateUsagePlanKeyRequest$,
  CreateUsagePlanRequest$,
  CreateVpcLink$,
  CreateVpcLinkCommand,
  CreateVpcLinkRequest$,
  DeleteApiKey$,
  DeleteApiKeyCommand,
  DeleteApiKeyRequest$,
  DeleteAuthorizer$,
  DeleteAuthorizerCommand,
  DeleteAuthorizerRequest$,
  DeleteBasePathMapping$,
  DeleteBasePathMappingCommand,
  DeleteBasePathMappingRequest$,
  DeleteClientCertificate$,
  DeleteClientCertificateCommand,
  DeleteClientCertificateRequest$,
  DeleteDeployment$,
  DeleteDeploymentCommand,
  DeleteDeploymentRequest$,
  DeleteDocumentationPart$,
  DeleteDocumentationPartCommand,
  DeleteDocumentationPartRequest$,
  DeleteDocumentationVersion$,
  DeleteDocumentationVersionCommand,
  DeleteDocumentationVersionRequest$,
  DeleteDomainName$,
  DeleteDomainNameAccessAssociation$,
  DeleteDomainNameAccessAssociationCommand,
  DeleteDomainNameAccessAssociationRequest$,
  DeleteDomainNameCommand,
  DeleteDomainNameRequest$,
  DeleteGatewayResponse$,
  DeleteGatewayResponseCommand,
  DeleteGatewayResponseRequest$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationRequest$,
  DeleteIntegrationResponse$,
  DeleteIntegrationResponseCommand,
  DeleteIntegrationResponseRequest$,
  DeleteMethod$,
  DeleteMethodCommand,
  DeleteMethodRequest$,
  DeleteMethodResponse$,
  DeleteMethodResponseCommand,
  DeleteMethodResponseRequest$,
  DeleteModel$,
  DeleteModelCommand,
  DeleteModelRequest$,
  DeleteRequestValidator$,
  DeleteRequestValidatorCommand,
  DeleteRequestValidatorRequest$,
  DeleteResource$,
  DeleteResourceCommand,
  DeleteResourceRequest$,
  DeleteRestApi$,
  DeleteRestApiCommand,
  DeleteRestApiRequest$,
  DeleteStage$,
  DeleteStageCommand,
  DeleteStageRequest$,
  DeleteUsagePlan$,
  DeleteUsagePlanCommand,
  DeleteUsagePlanKey$,
  DeleteUsagePlanKeyCommand,
  DeleteUsagePlanKeyRequest$,
  DeleteUsagePlanRequest$,
  DeleteVpcLink$,
  DeleteVpcLinkCommand,
  DeleteVpcLinkRequest$,
  Deployment$,
  DeploymentCanarySettings$,
  Deployments$,
  DocumentationPart$,
  DocumentationPartIds$,
  DocumentationPartLocation$,
  DocumentationPartType,
  DocumentationParts$,
  DocumentationVersion$,
  DocumentationVersions$,
  DomainName$,
  DomainNameAccessAssociation$,
  DomainNameAccessAssociations$,
  DomainNameStatus,
  DomainNames$,
  EndpointAccessMode,
  EndpointConfiguration$,
  EndpointType,
  ExportResponse$,
  FlushStageAuthorizersCache$,
  FlushStageAuthorizersCacheCommand,
  FlushStageAuthorizersCacheRequest$,
  FlushStageCache$,
  FlushStageCacheCommand,
  FlushStageCacheRequest$,
  GatewayResponse$,
  GatewayResponseType,
  GatewayResponses$,
  GenerateClientCertificate$,
  GenerateClientCertificateCommand,
  GenerateClientCertificateRequest$,
  GetAccount$,
  GetAccountCommand,
  GetAccountRequest$,
  GetApiKey$,
  GetApiKeyCommand,
  GetApiKeyRequest$,
  GetApiKeys$,
  GetApiKeysCommand,
  GetApiKeysRequest$,
  GetAuthorizer$,
  GetAuthorizerCommand,
  GetAuthorizerRequest$,
  GetAuthorizers$,
  GetAuthorizersCommand,
  GetAuthorizersRequest$,
  GetBasePathMapping$,
  GetBasePathMappingCommand,
  GetBasePathMappingRequest$,
  GetBasePathMappings$,
  GetBasePathMappingsCommand,
  GetBasePathMappingsRequest$,
  GetClientCertificate$,
  GetClientCertificateCommand,
  GetClientCertificateRequest$,
  GetClientCertificates$,
  GetClientCertificatesCommand,
  GetClientCertificatesRequest$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentRequest$,
  GetDeployments$,
  GetDeploymentsCommand,
  GetDeploymentsRequest$,
  GetDocumentationPart$,
  GetDocumentationPartCommand,
  GetDocumentationPartRequest$,
  GetDocumentationParts$,
  GetDocumentationPartsCommand,
  GetDocumentationPartsRequest$,
  GetDocumentationVersion$,
  GetDocumentationVersionCommand,
  GetDocumentationVersionRequest$,
  GetDocumentationVersions$,
  GetDocumentationVersionsCommand,
  GetDocumentationVersionsRequest$,
  GetDomainName$,
  GetDomainNameAccessAssociations$,
  GetDomainNameAccessAssociationsCommand,
  GetDomainNameAccessAssociationsRequest$,
  GetDomainNameCommand,
  GetDomainNameRequest$,
  GetDomainNames$,
  GetDomainNamesCommand,
  GetDomainNamesRequest$,
  GetExport$,
  GetExportCommand,
  GetExportRequest$,
  GetGatewayResponse$,
  GetGatewayResponseCommand,
  GetGatewayResponseRequest$,
  GetGatewayResponses$,
  GetGatewayResponsesCommand,
  GetGatewayResponsesRequest$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationRequest$,
  GetIntegrationResponse$,
  GetIntegrationResponseCommand,
  GetIntegrationResponseRequest$,
  GetMethod$,
  GetMethodCommand,
  GetMethodRequest$,
  GetMethodResponse$,
  GetMethodResponseCommand,
  GetMethodResponseRequest$,
  GetModel$,
  GetModelCommand,
  GetModelRequest$,
  GetModelTemplate$,
  GetModelTemplateCommand,
  GetModelTemplateRequest$,
  GetModels$,
  GetModelsCommand,
  GetModelsRequest$,
  GetRequestValidator$,
  GetRequestValidatorCommand,
  GetRequestValidatorRequest$,
  GetRequestValidators$,
  GetRequestValidatorsCommand,
  GetRequestValidatorsRequest$,
  GetResource$,
  GetResourceCommand,
  GetResourceRequest$,
  GetResources$,
  GetResourcesCommand,
  GetResourcesRequest$,
  GetRestApi$,
  GetRestApiCommand,
  GetRestApiRequest$,
  GetRestApis$,
  GetRestApisCommand,
  GetRestApisRequest$,
  GetSdk$,
  GetSdkCommand,
  GetSdkRequest$,
  GetSdkType$,
  GetSdkTypeCommand,
  GetSdkTypeRequest$,
  GetSdkTypes$,
  GetSdkTypesCommand,
  GetSdkTypesRequest$,
  GetStage$,
  GetStageCommand,
  GetStageRequest$,
  GetStages$,
  GetStagesCommand,
  GetStagesRequest$,
  GetTags$,
  GetTagsCommand,
  GetTagsRequest$,
  GetUsage$,
  GetUsageCommand,
  GetUsagePlan$,
  GetUsagePlanCommand,
  GetUsagePlanKey$,
  GetUsagePlanKeyCommand,
  GetUsagePlanKeyRequest$,
  GetUsagePlanKeys$,
  GetUsagePlanKeysCommand,
  GetUsagePlanKeysRequest$,
  GetUsagePlanRequest$,
  GetUsagePlans$,
  GetUsagePlansCommand,
  GetUsagePlansRequest$,
  GetUsageRequest$,
  GetVpcLink$,
  GetVpcLinkCommand,
  GetVpcLinkRequest$,
  GetVpcLinks$,
  GetVpcLinksCommand,
  GetVpcLinksRequest$,
  ImportApiKeys$,
  ImportApiKeysCommand,
  ImportApiKeysRequest$,
  ImportDocumentationParts$,
  ImportDocumentationPartsCommand,
  ImportDocumentationPartsRequest$,
  ImportRestApi$,
  ImportRestApiCommand,
  ImportRestApiRequest$,
  Integration$,
  IntegrationResponse$,
  IntegrationType,
  IpAddressType,
  LimitExceededException,
  LimitExceededException$,
  LocationStatusType,
  Method$,
  MethodResponse$,
  MethodSetting$,
  MethodSnapshot$,
  Model$,
  Models$,
  MutualTlsAuthentication$,
  MutualTlsAuthenticationInput$,
  NotFoundException,
  NotFoundException$,
  Op,
  PatchOperation$,
  PutGatewayResponse$,
  PutGatewayResponseCommand,
  PutGatewayResponseRequest$,
  PutIntegration$,
  PutIntegrationCommand,
  PutIntegrationRequest$,
  PutIntegrationResponse$,
  PutIntegrationResponseCommand,
  PutIntegrationResponseRequest$,
  PutMethod$,
  PutMethodCommand,
  PutMethodRequest$,
  PutMethodResponse$,
  PutMethodResponseCommand,
  PutMethodResponseRequest$,
  PutMode,
  PutRestApi$,
  PutRestApiCommand,
  PutRestApiRequest$,
  QuotaPeriodType,
  QuotaSettings$,
  RejectDomainNameAccessAssociation$,
  RejectDomainNameAccessAssociationCommand,
  RejectDomainNameAccessAssociationRequest$,
  RequestValidator$,
  RequestValidators$,
  Resource$,
  ResourceOwner,
  Resources$,
  ResponseTransferMode,
  RestApi$,
  RestApis$,
  RoutingMode,
  SdkConfigurationProperty$,
  SdkResponse$,
  SdkType$,
  SdkTypes$,
  SecurityPolicy,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  Stage$,
  StageKey$,
  Stages$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Tags$,
  Template$,
  TestInvokeAuthorizer$,
  TestInvokeAuthorizerCommand,
  TestInvokeAuthorizerRequest$,
  TestInvokeAuthorizerResponse$,
  TestInvokeMethod$,
  TestInvokeMethodCommand,
  TestInvokeMethodRequest$,
  TestInvokeMethodResponse$,
  ThrottleSettings$,
  TlsConfig$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnauthorizedCacheControlHeaderStrategy,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAccount$,
  UpdateAccountCommand,
  UpdateAccountRequest$,
  UpdateApiKey$,
  UpdateApiKeyCommand,
  UpdateApiKeyRequest$,
  UpdateAuthorizer$,
  UpdateAuthorizerCommand,
  UpdateAuthorizerRequest$,
  UpdateBasePathMapping$,
  UpdateBasePathMappingCommand,
  UpdateBasePathMappingRequest$,
  UpdateClientCertificate$,
  UpdateClientCertificateCommand,
  UpdateClientCertificateRequest$,
  UpdateDeployment$,
  UpdateDeploymentCommand,
  UpdateDeploymentRequest$,
  UpdateDocumentationPart$,
  UpdateDocumentationPartCommand,
  UpdateDocumentationPartRequest$,
  UpdateDocumentationVersion$,
  UpdateDocumentationVersionCommand,
  UpdateDocumentationVersionRequest$,
  UpdateDomainName$,
  UpdateDomainNameCommand,
  UpdateDomainNameRequest$,
  UpdateGatewayResponse$,
  UpdateGatewayResponseCommand,
  UpdateGatewayResponseRequest$,
  UpdateIntegration$,
  UpdateIntegrationCommand,
  UpdateIntegrationRequest$,
  UpdateIntegrationResponse$,
  UpdateIntegrationResponseCommand,
  UpdateIntegrationResponseRequest$,
  UpdateMethod$,
  UpdateMethodCommand,
  UpdateMethodRequest$,
  UpdateMethodResponse$,
  UpdateMethodResponseCommand,
  UpdateMethodResponseRequest$,
  UpdateModel$,
  UpdateModelCommand,
  UpdateModelRequest$,
  UpdateRequestValidator$,
  UpdateRequestValidatorCommand,
  UpdateRequestValidatorRequest$,
  UpdateResource$,
  UpdateResourceCommand,
  UpdateResourceRequest$,
  UpdateRestApi$,
  UpdateRestApiCommand,
  UpdateRestApiRequest$,
  UpdateStage$,
  UpdateStageCommand,
  UpdateStageRequest$,
  UpdateUsage$,
  UpdateUsageCommand,
  UpdateUsagePlan$,
  UpdateUsagePlanCommand,
  UpdateUsagePlanRequest$,
  UpdateUsageRequest$,
  UpdateVpcLink$,
  UpdateVpcLinkCommand,
  UpdateVpcLinkRequest$,
  Usage$,
  UsagePlan$,
  UsagePlanKey$,
  UsagePlanKeys$,
  UsagePlans$,
  VpcLink$,
  VpcLinkStatus,
  VpcLinks$,
  paginateGetApiKeys,
  paginateGetBasePathMappings,
  paginateGetClientCertificates,
  paginateGetDeployments,
  paginateGetDomainNames,
  paginateGetModels,
  paginateGetResources,
  paginateGetRestApis,
  paginateGetUsage,
  paginateGetUsagePlanKeys,
  paginateGetUsagePlans,
  paginateGetVpcLinks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof APIGatewayClient === "function");
assert(typeof APIGateway === "function");
// commands
assert(typeof CreateApiKeyCommand === "function");
assert(typeof CreateApiKey$ === "object");
assert(typeof CreateAuthorizerCommand === "function");
assert(typeof CreateAuthorizer$ === "object");
assert(typeof CreateBasePathMappingCommand === "function");
assert(typeof CreateBasePathMapping$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateDocumentationPartCommand === "function");
assert(typeof CreateDocumentationPart$ === "object");
assert(typeof CreateDocumentationVersionCommand === "function");
assert(typeof CreateDocumentationVersion$ === "object");
assert(typeof CreateDomainNameCommand === "function");
assert(typeof CreateDomainName$ === "object");
assert(typeof CreateDomainNameAccessAssociationCommand === "function");
assert(typeof CreateDomainNameAccessAssociation$ === "object");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateModel$ === "object");
assert(typeof CreateRequestValidatorCommand === "function");
assert(typeof CreateRequestValidator$ === "object");
assert(typeof CreateResourceCommand === "function");
assert(typeof CreateResource$ === "object");
assert(typeof CreateRestApiCommand === "function");
assert(typeof CreateRestApi$ === "object");
assert(typeof CreateStageCommand === "function");
assert(typeof CreateStage$ === "object");
assert(typeof CreateUsagePlanCommand === "function");
assert(typeof CreateUsagePlan$ === "object");
assert(typeof CreateUsagePlanKeyCommand === "function");
assert(typeof CreateUsagePlanKey$ === "object");
assert(typeof CreateVpcLinkCommand === "function");
assert(typeof CreateVpcLink$ === "object");
assert(typeof DeleteApiKeyCommand === "function");
assert(typeof DeleteApiKey$ === "object");
assert(typeof DeleteAuthorizerCommand === "function");
assert(typeof DeleteAuthorizer$ === "object");
assert(typeof DeleteBasePathMappingCommand === "function");
assert(typeof DeleteBasePathMapping$ === "object");
assert(typeof DeleteClientCertificateCommand === "function");
assert(typeof DeleteClientCertificate$ === "object");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDeployment$ === "object");
assert(typeof DeleteDocumentationPartCommand === "function");
assert(typeof DeleteDocumentationPart$ === "object");
assert(typeof DeleteDocumentationVersionCommand === "function");
assert(typeof DeleteDocumentationVersion$ === "object");
assert(typeof DeleteDomainNameCommand === "function");
assert(typeof DeleteDomainName$ === "object");
assert(typeof DeleteDomainNameAccessAssociationCommand === "function");
assert(typeof DeleteDomainNameAccessAssociation$ === "object");
assert(typeof DeleteGatewayResponseCommand === "function");
assert(typeof DeleteGatewayResponse$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteIntegrationResponseCommand === "function");
assert(typeof DeleteIntegrationResponse$ === "object");
assert(typeof DeleteMethodCommand === "function");
assert(typeof DeleteMethod$ === "object");
assert(typeof DeleteMethodResponseCommand === "function");
assert(typeof DeleteMethodResponse$ === "object");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteModel$ === "object");
assert(typeof DeleteRequestValidatorCommand === "function");
assert(typeof DeleteRequestValidator$ === "object");
assert(typeof DeleteResourceCommand === "function");
assert(typeof DeleteResource$ === "object");
assert(typeof DeleteRestApiCommand === "function");
assert(typeof DeleteRestApi$ === "object");
assert(typeof DeleteStageCommand === "function");
assert(typeof DeleteStage$ === "object");
assert(typeof DeleteUsagePlanCommand === "function");
assert(typeof DeleteUsagePlan$ === "object");
assert(typeof DeleteUsagePlanKeyCommand === "function");
assert(typeof DeleteUsagePlanKey$ === "object");
assert(typeof DeleteVpcLinkCommand === "function");
assert(typeof DeleteVpcLink$ === "object");
assert(typeof FlushStageAuthorizersCacheCommand === "function");
assert(typeof FlushStageAuthorizersCache$ === "object");
assert(typeof FlushStageCacheCommand === "function");
assert(typeof FlushStageCache$ === "object");
assert(typeof GenerateClientCertificateCommand === "function");
assert(typeof GenerateClientCertificate$ === "object");
assert(typeof GetAccountCommand === "function");
assert(typeof GetAccount$ === "object");
assert(typeof GetApiKeyCommand === "function");
assert(typeof GetApiKey$ === "object");
assert(typeof GetApiKeysCommand === "function");
assert(typeof GetApiKeys$ === "object");
assert(typeof GetAuthorizerCommand === "function");
assert(typeof GetAuthorizer$ === "object");
assert(typeof GetAuthorizersCommand === "function");
assert(typeof GetAuthorizers$ === "object");
assert(typeof GetBasePathMappingCommand === "function");
assert(typeof GetBasePathMapping$ === "object");
assert(typeof GetBasePathMappingsCommand === "function");
assert(typeof GetBasePathMappings$ === "object");
assert(typeof GetClientCertificateCommand === "function");
assert(typeof GetClientCertificate$ === "object");
assert(typeof GetClientCertificatesCommand === "function");
assert(typeof GetClientCertificates$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetDeploymentsCommand === "function");
assert(typeof GetDeployments$ === "object");
assert(typeof GetDocumentationPartCommand === "function");
assert(typeof GetDocumentationPart$ === "object");
assert(typeof GetDocumentationPartsCommand === "function");
assert(typeof GetDocumentationParts$ === "object");
assert(typeof GetDocumentationVersionCommand === "function");
assert(typeof GetDocumentationVersion$ === "object");
assert(typeof GetDocumentationVersionsCommand === "function");
assert(typeof GetDocumentationVersions$ === "object");
assert(typeof GetDomainNameCommand === "function");
assert(typeof GetDomainName$ === "object");
assert(typeof GetDomainNameAccessAssociationsCommand === "function");
assert(typeof GetDomainNameAccessAssociations$ === "object");
assert(typeof GetDomainNamesCommand === "function");
assert(typeof GetDomainNames$ === "object");
assert(typeof GetExportCommand === "function");
assert(typeof GetExport$ === "object");
assert(typeof GetGatewayResponseCommand === "function");
assert(typeof GetGatewayResponse$ === "object");
assert(typeof GetGatewayResponsesCommand === "function");
assert(typeof GetGatewayResponses$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetIntegrationResponseCommand === "function");
assert(typeof GetIntegrationResponse$ === "object");
assert(typeof GetMethodCommand === "function");
assert(typeof GetMethod$ === "object");
assert(typeof GetMethodResponseCommand === "function");
assert(typeof GetMethodResponse$ === "object");
assert(typeof GetModelCommand === "function");
assert(typeof GetModel$ === "object");
assert(typeof GetModelsCommand === "function");
assert(typeof GetModels$ === "object");
assert(typeof GetModelTemplateCommand === "function");
assert(typeof GetModelTemplate$ === "object");
assert(typeof GetRequestValidatorCommand === "function");
assert(typeof GetRequestValidator$ === "object");
assert(typeof GetRequestValidatorsCommand === "function");
assert(typeof GetRequestValidators$ === "object");
assert(typeof GetResourceCommand === "function");
assert(typeof GetResource$ === "object");
assert(typeof GetResourcesCommand === "function");
assert(typeof GetResources$ === "object");
assert(typeof GetRestApiCommand === "function");
assert(typeof GetRestApi$ === "object");
assert(typeof GetRestApisCommand === "function");
assert(typeof GetRestApis$ === "object");
assert(typeof GetSdkCommand === "function");
assert(typeof GetSdk$ === "object");
assert(typeof GetSdkTypeCommand === "function");
assert(typeof GetSdkType$ === "object");
assert(typeof GetSdkTypesCommand === "function");
assert(typeof GetSdkTypes$ === "object");
assert(typeof GetStageCommand === "function");
assert(typeof GetStage$ === "object");
assert(typeof GetStagesCommand === "function");
assert(typeof GetStages$ === "object");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTags$ === "object");
assert(typeof GetUsageCommand === "function");
assert(typeof GetUsage$ === "object");
assert(typeof GetUsagePlanCommand === "function");
assert(typeof GetUsagePlan$ === "object");
assert(typeof GetUsagePlanKeyCommand === "function");
assert(typeof GetUsagePlanKey$ === "object");
assert(typeof GetUsagePlanKeysCommand === "function");
assert(typeof GetUsagePlanKeys$ === "object");
assert(typeof GetUsagePlansCommand === "function");
assert(typeof GetUsagePlans$ === "object");
assert(typeof GetVpcLinkCommand === "function");
assert(typeof GetVpcLink$ === "object");
assert(typeof GetVpcLinksCommand === "function");
assert(typeof GetVpcLinks$ === "object");
assert(typeof ImportApiKeysCommand === "function");
assert(typeof ImportApiKeys$ === "object");
assert(typeof ImportDocumentationPartsCommand === "function");
assert(typeof ImportDocumentationParts$ === "object");
assert(typeof ImportRestApiCommand === "function");
assert(typeof ImportRestApi$ === "object");
assert(typeof PutGatewayResponseCommand === "function");
assert(typeof PutGatewayResponse$ === "object");
assert(typeof PutIntegrationCommand === "function");
assert(typeof PutIntegration$ === "object");
assert(typeof PutIntegrationResponseCommand === "function");
assert(typeof PutIntegrationResponse$ === "object");
assert(typeof PutMethodCommand === "function");
assert(typeof PutMethod$ === "object");
assert(typeof PutMethodResponseCommand === "function");
assert(typeof PutMethodResponse$ === "object");
assert(typeof PutRestApiCommand === "function");
assert(typeof PutRestApi$ === "object");
assert(typeof RejectDomainNameAccessAssociationCommand === "function");
assert(typeof RejectDomainNameAccessAssociation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestInvokeAuthorizerCommand === "function");
assert(typeof TestInvokeAuthorizer$ === "object");
assert(typeof TestInvokeMethodCommand === "function");
assert(typeof TestInvokeMethod$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountCommand === "function");
assert(typeof UpdateAccount$ === "object");
assert(typeof UpdateApiKeyCommand === "function");
assert(typeof UpdateApiKey$ === "object");
assert(typeof UpdateAuthorizerCommand === "function");
assert(typeof UpdateAuthorizer$ === "object");
assert(typeof UpdateBasePathMappingCommand === "function");
assert(typeof UpdateBasePathMapping$ === "object");
assert(typeof UpdateClientCertificateCommand === "function");
assert(typeof UpdateClientCertificate$ === "object");
assert(typeof UpdateDeploymentCommand === "function");
assert(typeof UpdateDeployment$ === "object");
assert(typeof UpdateDocumentationPartCommand === "function");
assert(typeof UpdateDocumentationPart$ === "object");
assert(typeof UpdateDocumentationVersionCommand === "function");
assert(typeof UpdateDocumentationVersion$ === "object");
assert(typeof UpdateDomainNameCommand === "function");
assert(typeof UpdateDomainName$ === "object");
assert(typeof UpdateGatewayResponseCommand === "function");
assert(typeof UpdateGatewayResponse$ === "object");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegration$ === "object");
assert(typeof UpdateIntegrationResponseCommand === "function");
assert(typeof UpdateIntegrationResponse$ === "object");
assert(typeof UpdateMethodCommand === "function");
assert(typeof UpdateMethod$ === "object");
assert(typeof UpdateMethodResponseCommand === "function");
assert(typeof UpdateMethodResponse$ === "object");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdateModel$ === "object");
assert(typeof UpdateRequestValidatorCommand === "function");
assert(typeof UpdateRequestValidator$ === "object");
assert(typeof UpdateResourceCommand === "function");
assert(typeof UpdateResource$ === "object");
assert(typeof UpdateRestApiCommand === "function");
assert(typeof UpdateRestApi$ === "object");
assert(typeof UpdateStageCommand === "function");
assert(typeof UpdateStage$ === "object");
assert(typeof UpdateUsageCommand === "function");
assert(typeof UpdateUsage$ === "object");
assert(typeof UpdateUsagePlanCommand === "function");
assert(typeof UpdateUsagePlan$ === "object");
assert(typeof UpdateVpcLinkCommand === "function");
assert(typeof UpdateVpcLink$ === "object");
// structural schemas
assert(typeof AccessLogSettings$ === "object");
assert(typeof Account$ === "object");
assert(typeof ApiKey$ === "object");
assert(typeof ApiKeyIds$ === "object");
assert(typeof ApiKeys$ === "object");
assert(typeof ApiStage$ === "object");
assert(typeof Authorizer$ === "object");
assert(typeof Authorizers$ === "object");
assert(typeof BasePathMapping$ === "object");
assert(typeof BasePathMappings$ === "object");
assert(typeof CanarySettings$ === "object");
assert(typeof ClientCertificate$ === "object");
assert(typeof ClientCertificates$ === "object");
assert(typeof CreateApiKeyRequest$ === "object");
assert(typeof CreateAuthorizerRequest$ === "object");
assert(typeof CreateBasePathMappingRequest$ === "object");
assert(typeof CreateDeploymentRequest$ === "object");
assert(typeof CreateDocumentationPartRequest$ === "object");
assert(typeof CreateDocumentationVersionRequest$ === "object");
assert(typeof CreateDomainNameAccessAssociationRequest$ === "object");
assert(typeof CreateDomainNameRequest$ === "object");
assert(typeof CreateModelRequest$ === "object");
assert(typeof CreateRequestValidatorRequest$ === "object");
assert(typeof CreateResourceRequest$ === "object");
assert(typeof CreateRestApiRequest$ === "object");
assert(typeof CreateStageRequest$ === "object");
assert(typeof CreateUsagePlanKeyRequest$ === "object");
assert(typeof CreateUsagePlanRequest$ === "object");
assert(typeof CreateVpcLinkRequest$ === "object");
assert(typeof DeleteApiKeyRequest$ === "object");
assert(typeof DeleteAuthorizerRequest$ === "object");
assert(typeof DeleteBasePathMappingRequest$ === "object");
assert(typeof DeleteClientCertificateRequest$ === "object");
assert(typeof DeleteDeploymentRequest$ === "object");
assert(typeof DeleteDocumentationPartRequest$ === "object");
assert(typeof DeleteDocumentationVersionRequest$ === "object");
assert(typeof DeleteDomainNameAccessAssociationRequest$ === "object");
assert(typeof DeleteDomainNameRequest$ === "object");
assert(typeof DeleteGatewayResponseRequest$ === "object");
assert(typeof DeleteIntegrationRequest$ === "object");
assert(typeof DeleteIntegrationResponseRequest$ === "object");
assert(typeof DeleteMethodRequest$ === "object");
assert(typeof DeleteMethodResponseRequest$ === "object");
assert(typeof DeleteModelRequest$ === "object");
assert(typeof DeleteRequestValidatorRequest$ === "object");
assert(typeof DeleteResourceRequest$ === "object");
assert(typeof DeleteRestApiRequest$ === "object");
assert(typeof DeleteStageRequest$ === "object");
assert(typeof DeleteUsagePlanKeyRequest$ === "object");
assert(typeof DeleteUsagePlanRequest$ === "object");
assert(typeof DeleteVpcLinkRequest$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DeploymentCanarySettings$ === "object");
assert(typeof Deployments$ === "object");
assert(typeof DocumentationPart$ === "object");
assert(typeof DocumentationPartIds$ === "object");
assert(typeof DocumentationPartLocation$ === "object");
assert(typeof DocumentationParts$ === "object");
assert(typeof DocumentationVersion$ === "object");
assert(typeof DocumentationVersions$ === "object");
assert(typeof DomainName$ === "object");
assert(typeof DomainNameAccessAssociation$ === "object");
assert(typeof DomainNameAccessAssociations$ === "object");
assert(typeof DomainNames$ === "object");
assert(typeof EndpointConfiguration$ === "object");
assert(typeof ExportResponse$ === "object");
assert(typeof FlushStageAuthorizersCacheRequest$ === "object");
assert(typeof FlushStageCacheRequest$ === "object");
assert(typeof GatewayResponse$ === "object");
assert(typeof GatewayResponses$ === "object");
assert(typeof GenerateClientCertificateRequest$ === "object");
assert(typeof GetAccountRequest$ === "object");
assert(typeof GetApiKeyRequest$ === "object");
assert(typeof GetApiKeysRequest$ === "object");
assert(typeof GetAuthorizerRequest$ === "object");
assert(typeof GetAuthorizersRequest$ === "object");
assert(typeof GetBasePathMappingRequest$ === "object");
assert(typeof GetBasePathMappingsRequest$ === "object");
assert(typeof GetClientCertificateRequest$ === "object");
assert(typeof GetClientCertificatesRequest$ === "object");
assert(typeof GetDeploymentRequest$ === "object");
assert(typeof GetDeploymentsRequest$ === "object");
assert(typeof GetDocumentationPartRequest$ === "object");
assert(typeof GetDocumentationPartsRequest$ === "object");
assert(typeof GetDocumentationVersionRequest$ === "object");
assert(typeof GetDocumentationVersionsRequest$ === "object");
assert(typeof GetDomainNameAccessAssociationsRequest$ === "object");
assert(typeof GetDomainNameRequest$ === "object");
assert(typeof GetDomainNamesRequest$ === "object");
assert(typeof GetExportRequest$ === "object");
assert(typeof GetGatewayResponseRequest$ === "object");
assert(typeof GetGatewayResponsesRequest$ === "object");
assert(typeof GetIntegrationRequest$ === "object");
assert(typeof GetIntegrationResponseRequest$ === "object");
assert(typeof GetMethodRequest$ === "object");
assert(typeof GetMethodResponseRequest$ === "object");
assert(typeof GetModelRequest$ === "object");
assert(typeof GetModelsRequest$ === "object");
assert(typeof GetModelTemplateRequest$ === "object");
assert(typeof GetRequestValidatorRequest$ === "object");
assert(typeof GetRequestValidatorsRequest$ === "object");
assert(typeof GetResourceRequest$ === "object");
assert(typeof GetResourcesRequest$ === "object");
assert(typeof GetRestApiRequest$ === "object");
assert(typeof GetRestApisRequest$ === "object");
assert(typeof GetSdkRequest$ === "object");
assert(typeof GetSdkTypeRequest$ === "object");
assert(typeof GetSdkTypesRequest$ === "object");
assert(typeof GetStageRequest$ === "object");
assert(typeof GetStagesRequest$ === "object");
assert(typeof GetTagsRequest$ === "object");
assert(typeof GetUsagePlanKeyRequest$ === "object");
assert(typeof GetUsagePlanKeysRequest$ === "object");
assert(typeof GetUsagePlanRequest$ === "object");
assert(typeof GetUsagePlansRequest$ === "object");
assert(typeof GetUsageRequest$ === "object");
assert(typeof GetVpcLinkRequest$ === "object");
assert(typeof GetVpcLinksRequest$ === "object");
assert(typeof ImportApiKeysRequest$ === "object");
assert(typeof ImportDocumentationPartsRequest$ === "object");
assert(typeof ImportRestApiRequest$ === "object");
assert(typeof Integration$ === "object");
assert(typeof IntegrationResponse$ === "object");
assert(typeof Method$ === "object");
assert(typeof MethodResponse$ === "object");
assert(typeof MethodSetting$ === "object");
assert(typeof MethodSnapshot$ === "object");
assert(typeof Model$ === "object");
assert(typeof Models$ === "object");
assert(typeof MutualTlsAuthentication$ === "object");
assert(typeof MutualTlsAuthenticationInput$ === "object");
assert(typeof PatchOperation$ === "object");
assert(typeof PutGatewayResponseRequest$ === "object");
assert(typeof PutIntegrationRequest$ === "object");
assert(typeof PutIntegrationResponseRequest$ === "object");
assert(typeof PutMethodRequest$ === "object");
assert(typeof PutMethodResponseRequest$ === "object");
assert(typeof PutRestApiRequest$ === "object");
assert(typeof QuotaSettings$ === "object");
assert(typeof RejectDomainNameAccessAssociationRequest$ === "object");
assert(typeof RequestValidator$ === "object");
assert(typeof RequestValidators$ === "object");
assert(typeof Resource$ === "object");
assert(typeof Resources$ === "object");
assert(typeof RestApi$ === "object");
assert(typeof RestApis$ === "object");
assert(typeof SdkConfigurationProperty$ === "object");
assert(typeof SdkResponse$ === "object");
assert(typeof SdkType$ === "object");
assert(typeof SdkTypes$ === "object");
assert(typeof Stage$ === "object");
assert(typeof StageKey$ === "object");
assert(typeof Stages$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Tags$ === "object");
assert(typeof Template$ === "object");
assert(typeof TestInvokeAuthorizerRequest$ === "object");
assert(typeof TestInvokeAuthorizerResponse$ === "object");
assert(typeof TestInvokeMethodRequest$ === "object");
assert(typeof TestInvokeMethodResponse$ === "object");
assert(typeof ThrottleSettings$ === "object");
assert(typeof TlsConfig$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAccountRequest$ === "object");
assert(typeof UpdateApiKeyRequest$ === "object");
assert(typeof UpdateAuthorizerRequest$ === "object");
assert(typeof UpdateBasePathMappingRequest$ === "object");
assert(typeof UpdateClientCertificateRequest$ === "object");
assert(typeof UpdateDeploymentRequest$ === "object");
assert(typeof UpdateDocumentationPartRequest$ === "object");
assert(typeof UpdateDocumentationVersionRequest$ === "object");
assert(typeof UpdateDomainNameRequest$ === "object");
assert(typeof UpdateGatewayResponseRequest$ === "object");
assert(typeof UpdateIntegrationRequest$ === "object");
assert(typeof UpdateIntegrationResponseRequest$ === "object");
assert(typeof UpdateMethodRequest$ === "object");
assert(typeof UpdateMethodResponseRequest$ === "object");
assert(typeof UpdateModelRequest$ === "object");
assert(typeof UpdateRequestValidatorRequest$ === "object");
assert(typeof UpdateResourceRequest$ === "object");
assert(typeof UpdateRestApiRequest$ === "object");
assert(typeof UpdateStageRequest$ === "object");
assert(typeof UpdateUsagePlanRequest$ === "object");
assert(typeof UpdateUsageRequest$ === "object");
assert(typeof UpdateVpcLinkRequest$ === "object");
assert(typeof Usage$ === "object");
assert(typeof UsagePlan$ === "object");
assert(typeof UsagePlanKey$ === "object");
assert(typeof UsagePlanKeys$ === "object");
assert(typeof UsagePlans$ === "object");
assert(typeof VpcLink$ === "object");
assert(typeof VpcLinks$ === "object");
// enums
assert(typeof AccessAssociationSourceType === "object");
assert(typeof ApiKeysFormat === "object");
assert(typeof ApiKeySourceType === "object");
assert(typeof ApiStatus === "object");
assert(typeof AuthorizerType === "object");
assert(typeof CacheClusterSize === "object");
assert(typeof CacheClusterStatus === "object");
assert(typeof ConnectionType === "object");
assert(typeof ContentHandlingStrategy === "object");
assert(typeof DocumentationPartType === "object");
assert(typeof DomainNameStatus === "object");
assert(typeof EndpointAccessMode === "object");
assert(typeof EndpointType === "object");
assert(typeof GatewayResponseType === "object");
assert(typeof IntegrationType === "object");
assert(typeof IpAddressType === "object");
assert(typeof LocationStatusType === "object");
assert(typeof Op === "object");
assert(typeof PutMode === "object");
assert(typeof QuotaPeriodType === "object");
assert(typeof ResourceOwner === "object");
assert(typeof ResponseTransferMode === "object");
assert(typeof RoutingMode === "object");
assert(typeof SecurityPolicy === "object");
assert(typeof UnauthorizedCacheControlHeaderStrategy === "object");
assert(typeof VpcLinkStatus === "object");
// errors
assert(BadRequestException.prototype instanceof APIGatewayServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof APIGatewayServiceException);
assert(typeof ConflictException$ === "object");
assert(LimitExceededException.prototype instanceof APIGatewayServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof APIGatewayServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof APIGatewayServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof APIGatewayServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof APIGatewayServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(APIGatewayServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetApiKeys === "function");
assert(typeof paginateGetBasePathMappings === "function");
assert(typeof paginateGetClientCertificates === "function");
assert(typeof paginateGetDeployments === "function");
assert(typeof paginateGetDomainNames === "function");
assert(typeof paginateGetModels === "function");
assert(typeof paginateGetResources === "function");
assert(typeof paginateGetRestApis === "function");
assert(typeof paginateGetUsage === "function");
assert(typeof paginateGetUsagePlanKeys === "function");
assert(typeof paginateGetUsagePlans === "function");
assert(typeof paginateGetVpcLinks === "function");
console.log(`APIGateway index test passed.`);
