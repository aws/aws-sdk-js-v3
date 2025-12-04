import {
  APIGateway,
  APIGatewayClient,
  APIGatewayServiceException,
  AccessAssociationSourceType,
  ApiKeySourceType,
  ApiKeysFormat,
  ApiStatus,
  AuthorizerType,
  CacheClusterSize,
  CacheClusterStatus,
  ConnectionType,
  ContentHandlingStrategy,
  CreateApiKeyCommand,
  CreateAuthorizerCommand,
  CreateBasePathMappingCommand,
  CreateDeploymentCommand,
  CreateDocumentationPartCommand,
  CreateDocumentationVersionCommand,
  CreateDomainNameAccessAssociationCommand,
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
  DeleteDomainNameAccessAssociationCommand,
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
  DocumentationPartType,
  DomainNameStatus,
  EndpointAccessMode,
  EndpointType,
  FlushStageAuthorizersCacheCommand,
  FlushStageCacheCommand,
  GatewayResponseType,
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
  GetDomainNameAccessAssociationsCommand,
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
  GetModelTemplateCommand,
  GetModelsCommand,
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
  IntegrationType,
  IpAddressType,
  LocationStatusType,
  Op,
  PutGatewayResponseCommand,
  PutIntegrationCommand,
  PutIntegrationResponseCommand,
  PutMethodCommand,
  PutMethodResponseCommand,
  PutMode,
  PutRestApiCommand,
  QuotaPeriodType,
  RejectDomainNameAccessAssociationCommand,
  ResourceOwner,
  ResponseTransferMode,
  RoutingMode,
  SecurityPolicy,
  TagResourceCommand,
  TestInvokeAuthorizerCommand,
  TestInvokeMethodCommand,
  UnauthorizedCacheControlHeaderStrategy,
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
  VpcLinkStatus,
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
assert(typeof CreateAuthorizerCommand === "function");
assert(typeof CreateBasePathMappingCommand === "function");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDocumentationPartCommand === "function");
assert(typeof CreateDocumentationVersionCommand === "function");
assert(typeof CreateDomainNameCommand === "function");
assert(typeof CreateDomainNameAccessAssociationCommand === "function");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateRequestValidatorCommand === "function");
assert(typeof CreateResourceCommand === "function");
assert(typeof CreateRestApiCommand === "function");
assert(typeof CreateStageCommand === "function");
assert(typeof CreateUsagePlanCommand === "function");
assert(typeof CreateUsagePlanKeyCommand === "function");
assert(typeof CreateVpcLinkCommand === "function");
assert(typeof DeleteApiKeyCommand === "function");
assert(typeof DeleteAuthorizerCommand === "function");
assert(typeof DeleteBasePathMappingCommand === "function");
assert(typeof DeleteClientCertificateCommand === "function");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDocumentationPartCommand === "function");
assert(typeof DeleteDocumentationVersionCommand === "function");
assert(typeof DeleteDomainNameCommand === "function");
assert(typeof DeleteDomainNameAccessAssociationCommand === "function");
assert(typeof DeleteGatewayResponseCommand === "function");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegrationResponseCommand === "function");
assert(typeof DeleteMethodCommand === "function");
assert(typeof DeleteMethodResponseCommand === "function");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteRequestValidatorCommand === "function");
assert(typeof DeleteResourceCommand === "function");
assert(typeof DeleteRestApiCommand === "function");
assert(typeof DeleteStageCommand === "function");
assert(typeof DeleteUsagePlanCommand === "function");
assert(typeof DeleteUsagePlanKeyCommand === "function");
assert(typeof DeleteVpcLinkCommand === "function");
assert(typeof FlushStageAuthorizersCacheCommand === "function");
assert(typeof FlushStageCacheCommand === "function");
assert(typeof GenerateClientCertificateCommand === "function");
assert(typeof GetAccountCommand === "function");
assert(typeof GetApiKeyCommand === "function");
assert(typeof GetApiKeysCommand === "function");
assert(typeof GetAuthorizerCommand === "function");
assert(typeof GetAuthorizersCommand === "function");
assert(typeof GetBasePathMappingCommand === "function");
assert(typeof GetBasePathMappingsCommand === "function");
assert(typeof GetClientCertificateCommand === "function");
assert(typeof GetClientCertificatesCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeploymentsCommand === "function");
assert(typeof GetDocumentationPartCommand === "function");
assert(typeof GetDocumentationPartsCommand === "function");
assert(typeof GetDocumentationVersionCommand === "function");
assert(typeof GetDocumentationVersionsCommand === "function");
assert(typeof GetDomainNameCommand === "function");
assert(typeof GetDomainNameAccessAssociationsCommand === "function");
assert(typeof GetDomainNamesCommand === "function");
assert(typeof GetExportCommand === "function");
assert(typeof GetGatewayResponseCommand === "function");
assert(typeof GetGatewayResponsesCommand === "function");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegrationResponseCommand === "function");
assert(typeof GetMethodCommand === "function");
assert(typeof GetMethodResponseCommand === "function");
assert(typeof GetModelCommand === "function");
assert(typeof GetModelsCommand === "function");
assert(typeof GetModelTemplateCommand === "function");
assert(typeof GetRequestValidatorCommand === "function");
assert(typeof GetRequestValidatorsCommand === "function");
assert(typeof GetResourceCommand === "function");
assert(typeof GetResourcesCommand === "function");
assert(typeof GetRestApiCommand === "function");
assert(typeof GetRestApisCommand === "function");
assert(typeof GetSdkCommand === "function");
assert(typeof GetSdkTypeCommand === "function");
assert(typeof GetSdkTypesCommand === "function");
assert(typeof GetStageCommand === "function");
assert(typeof GetStagesCommand === "function");
assert(typeof GetTagsCommand === "function");
assert(typeof GetUsageCommand === "function");
assert(typeof GetUsagePlanCommand === "function");
assert(typeof GetUsagePlanKeyCommand === "function");
assert(typeof GetUsagePlanKeysCommand === "function");
assert(typeof GetUsagePlansCommand === "function");
assert(typeof GetVpcLinkCommand === "function");
assert(typeof GetVpcLinksCommand === "function");
assert(typeof ImportApiKeysCommand === "function");
assert(typeof ImportDocumentationPartsCommand === "function");
assert(typeof ImportRestApiCommand === "function");
assert(typeof PutGatewayResponseCommand === "function");
assert(typeof PutIntegrationCommand === "function");
assert(typeof PutIntegrationResponseCommand === "function");
assert(typeof PutMethodCommand === "function");
assert(typeof PutMethodResponseCommand === "function");
assert(typeof PutRestApiCommand === "function");
assert(typeof RejectDomainNameAccessAssociationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestInvokeAuthorizerCommand === "function");
assert(typeof TestInvokeMethodCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountCommand === "function");
assert(typeof UpdateApiKeyCommand === "function");
assert(typeof UpdateAuthorizerCommand === "function");
assert(typeof UpdateBasePathMappingCommand === "function");
assert(typeof UpdateClientCertificateCommand === "function");
assert(typeof UpdateDeploymentCommand === "function");
assert(typeof UpdateDocumentationPartCommand === "function");
assert(typeof UpdateDocumentationVersionCommand === "function");
assert(typeof UpdateDomainNameCommand === "function");
assert(typeof UpdateGatewayResponseCommand === "function");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegrationResponseCommand === "function");
assert(typeof UpdateMethodCommand === "function");
assert(typeof UpdateMethodResponseCommand === "function");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdateRequestValidatorCommand === "function");
assert(typeof UpdateResourceCommand === "function");
assert(typeof UpdateRestApiCommand === "function");
assert(typeof UpdateStageCommand === "function");
assert(typeof UpdateUsageCommand === "function");
assert(typeof UpdateUsagePlanCommand === "function");
assert(typeof UpdateVpcLinkCommand === "function");
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
