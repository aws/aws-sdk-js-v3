import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociateCertificate$,
  AssociateCertificateCommand,
  AssociateCertificateRequest$,
  AssociateCertificateResponse$,
  Attribute$,
  AttributeDetails$,
  CertificateAssociation$,
  CertificateAssociationStatus$,
  CertificateAssociationStatusCode,
  CertificateAssociationStatusReason$,
  ConfigurationArchive$,
  ConfigurationFile$,
  ConfigurationMetadata$,
  ConflictException,
  ConflictException$,
  CreateProxy$,
  CreateProxyCommand,
  CreateProxyRequest$,
  CreateProxyResponse$,
  DeleteProxy$,
  DeleteProxyCommand,
  DeleteProxyRequest$,
  DeleteProxyResponse$,
  DisassociateCertificate$,
  DisassociateCertificateCommand,
  DisassociateCertificateRequest$,
  DisassociateCertificateResponse$,
  ELBProxy,
  ELBProxyClient,
  ELBProxyServiceException,
  GetProxy$,
  GetProxyAttributes$,
  GetProxyAttributesCommand,
  GetProxyAttributesRequest$,
  GetProxyAttributesResponse$,
  GetProxyCommand,
  GetProxyConfigurationContents$,
  GetProxyConfigurationContentsCommand,
  GetProxyConfigurationContentsRequest$,
  GetProxyConfigurationContentsResponse$,
  GetProxyRequest$,
  GetProxyResponse$,
  GetProxyUpdate$,
  GetProxyUpdateCommand,
  GetProxyUpdateRequest$,
  GetProxyUpdateResponse$,
  InternalServerException,
  InternalServerException$,
  ListCertificateAssociations$,
  ListCertificateAssociationsCommand,
  ListCertificateAssociationsRequest$,
  ListCertificateAssociationsResponse$,
  ListProxies$,
  ListProxiesCommand,
  ListProxiesRequest$,
  ListProxiesResponse$,
  ListProxyUpdates$,
  ListProxyUpdatesCommand,
  ListProxyUpdatesRequest$,
  ListProxyUpdatesResponse$,
  ListProxyVersions$,
  ListProxyVersionsCommand,
  ListProxyVersionsRequest$,
  ListProxyVersionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  paginateListCertificateAssociations,
  paginateListProxies,
  paginateListProxyUpdates,
  paginateListProxyVersions,
  PriorRequestNotCompletedException,
  PriorRequestNotCompletedException$,
  ProxyConfiguration$,
  ProxyConfigurationUpdateDetails$,
  ProxyIpAddressingConfiguration$,
  ProxyIpConfiguration$,
  ProxyIpv4Addressability,
  ProxyIpv6Addressability,
  ProxyNetworkConfiguration$,
  ProxyNetworkUserConfiguration$,
  ProxyStatus$,
  ProxyStatusCode,
  ProxyStatusReason$,
  ProxySummary$,
  ProxyType,
  ProxyUpdateDetails$,
  ProxyUpdatePropagationStatus,
  ProxyUpdateState$,
  ProxyUpdateSummary$,
  ProxyUpdateType,
  ProxyUpdateValidationStatus,
  ProxyVersionSummary$,
  ProxyVpcConfiguration$,
  ProxyVpcUserConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SecurityGroupDetails$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SubnetAndZone$,
  SubnetDetails$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateProxyAttributes$,
  UpdateProxyAttributesCommand,
  UpdateProxyAttributesRequest$,
  UpdateProxyAttributesResponse$,
  UpdateProxyConfiguration$,
  UpdateProxyConfigurationCommand,
  UpdateProxyConfigurationRequest$,
  UpdateProxyConfigurationResponse$,
  UpdateProxyNetworkConfiguration$,
  UpdateProxyNetworkConfigurationCommand,
  UpdateProxyNetworkConfigurationRequest$,
  UpdateProxyNetworkConfigurationResponse$,
  UpdateProxyVpcConfiguration$,
  ValidationException,
  ValidationException$,
  waitForProxyActive,
  waitForProxyDeleted,
  waitForProxyUpdateComplete,
  waitUntilProxyActive,
  waitUntilProxyDeleted,
  waitUntilProxyUpdateComplete,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ELBProxyClient === "function");
assert(typeof ELBProxy === "function");
// commands
assert(typeof AssociateCertificateCommand === "function");
assert(typeof AssociateCertificate$ === "object");
assert(typeof CreateProxyCommand === "function");
assert(typeof CreateProxy$ === "object");
assert(typeof DeleteProxyCommand === "function");
assert(typeof DeleteProxy$ === "object");
assert(typeof DisassociateCertificateCommand === "function");
assert(typeof DisassociateCertificate$ === "object");
assert(typeof GetProxyCommand === "function");
assert(typeof GetProxy$ === "object");
assert(typeof GetProxyAttributesCommand === "function");
assert(typeof GetProxyAttributes$ === "object");
assert(typeof GetProxyConfigurationContentsCommand === "function");
assert(typeof GetProxyConfigurationContents$ === "object");
assert(typeof GetProxyUpdateCommand === "function");
assert(typeof GetProxyUpdate$ === "object");
assert(typeof ListCertificateAssociationsCommand === "function");
assert(typeof ListCertificateAssociations$ === "object");
assert(typeof ListProxiesCommand === "function");
assert(typeof ListProxies$ === "object");
assert(typeof ListProxyUpdatesCommand === "function");
assert(typeof ListProxyUpdates$ === "object");
assert(typeof ListProxyVersionsCommand === "function");
assert(typeof ListProxyVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateProxyAttributesCommand === "function");
assert(typeof UpdateProxyAttributes$ === "object");
assert(typeof UpdateProxyConfigurationCommand === "function");
assert(typeof UpdateProxyConfiguration$ === "object");
assert(typeof UpdateProxyNetworkConfigurationCommand === "function");
assert(typeof UpdateProxyNetworkConfiguration$ === "object");
// structural schemas
assert(typeof AssociateCertificateRequest$ === "object");
assert(typeof AssociateCertificateResponse$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof AttributeDetails$ === "object");
assert(typeof CertificateAssociation$ === "object");
assert(typeof CertificateAssociationStatus$ === "object");
assert(typeof CertificateAssociationStatusReason$ === "object");
assert(typeof ConfigurationArchive$ === "object");
assert(typeof ConfigurationFile$ === "object");
assert(typeof ConfigurationMetadata$ === "object");
assert(typeof CreateProxyRequest$ === "object");
assert(typeof CreateProxyResponse$ === "object");
assert(typeof DeleteProxyRequest$ === "object");
assert(typeof DeleteProxyResponse$ === "object");
assert(typeof DisassociateCertificateRequest$ === "object");
assert(typeof DisassociateCertificateResponse$ === "object");
assert(typeof GetProxyAttributesRequest$ === "object");
assert(typeof GetProxyAttributesResponse$ === "object");
assert(typeof GetProxyConfigurationContentsRequest$ === "object");
assert(typeof GetProxyConfigurationContentsResponse$ === "object");
assert(typeof GetProxyRequest$ === "object");
assert(typeof GetProxyResponse$ === "object");
assert(typeof GetProxyUpdateRequest$ === "object");
assert(typeof GetProxyUpdateResponse$ === "object");
assert(typeof ListCertificateAssociationsRequest$ === "object");
assert(typeof ListCertificateAssociationsResponse$ === "object");
assert(typeof ListProxiesRequest$ === "object");
assert(typeof ListProxiesResponse$ === "object");
assert(typeof ListProxyUpdatesRequest$ === "object");
assert(typeof ListProxyUpdatesResponse$ === "object");
assert(typeof ListProxyVersionsRequest$ === "object");
assert(typeof ListProxyVersionsResponse$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ProxyConfiguration$ === "object");
assert(typeof ProxyConfigurationUpdateDetails$ === "object");
assert(typeof ProxyIpAddressingConfiguration$ === "object");
assert(typeof ProxyIpConfiguration$ === "object");
assert(typeof ProxyNetworkConfiguration$ === "object");
assert(typeof ProxyNetworkUserConfiguration$ === "object");
assert(typeof ProxyStatus$ === "object");
assert(typeof ProxyStatusReason$ === "object");
assert(typeof ProxySummary$ === "object");
assert(typeof ProxyUpdateDetails$ === "object");
assert(typeof ProxyUpdateState$ === "object");
assert(typeof ProxyUpdateSummary$ === "object");
assert(typeof ProxyVersionSummary$ === "object");
assert(typeof ProxyVpcConfiguration$ === "object");
assert(typeof ProxyVpcUserConfiguration$ === "object");
assert(typeof SecurityGroupDetails$ === "object");
assert(typeof SubnetAndZone$ === "object");
assert(typeof SubnetDetails$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateProxyAttributesRequest$ === "object");
assert(typeof UpdateProxyAttributesResponse$ === "object");
assert(typeof UpdateProxyConfigurationRequest$ === "object");
assert(typeof UpdateProxyConfigurationResponse$ === "object");
assert(typeof UpdateProxyNetworkConfigurationRequest$ === "object");
assert(typeof UpdateProxyNetworkConfigurationResponse$ === "object");
assert(typeof UpdateProxyVpcConfiguration$ === "object");
// enums
assert(typeof CertificateAssociationStatusCode === "object");
assert(typeof ProxyIpv4Addressability === "object");
assert(typeof ProxyIpv6Addressability === "object");
assert(typeof ProxyStatusCode === "object");
assert(typeof ProxyType === "object");
assert(typeof ProxyUpdatePropagationStatus === "object");
assert(typeof ProxyUpdateType === "object");
assert(typeof ProxyUpdateValidationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ELBProxyServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ELBProxyServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ELBProxyServiceException);
assert(typeof InternalServerException$ === "object");
assert(OperationNotPermittedException.prototype instanceof ELBProxyServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(PriorRequestNotCompletedException.prototype instanceof ELBProxyServiceException);
assert(typeof PriorRequestNotCompletedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ELBProxyServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ELBProxyServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ELBProxyServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ELBProxyServiceException);
assert(typeof ValidationException$ === "object");
assert(ELBProxyServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForProxyActive === "function");
assert(typeof waitForProxyDeleted === "function");
assert(typeof waitForProxyUpdateComplete === "function");
assert(typeof waitUntilProxyActive === "function");
assert(typeof waitUntilProxyDeleted === "function");
assert(typeof waitUntilProxyUpdateComplete === "function");
// paginators
assert(typeof paginateListCertificateAssociations === "function");
assert(typeof paginateListProxies === "function");
assert(typeof paginateListProxyUpdates === "function");
assert(typeof paginateListProxyVersions === "function");
console.log(`ELBProxy index test passed.`);
