import {
  AccessDeniedException,
  AccessDeniedException$,
  ACM,
  AcmCertificateMetadata$,
  AcmCertificateMetadataFilter$,
  ACMClient,
  AcmeAccount$,
  AcmeAccountStatus,
  AcmeAccountSummary$,
  AcmeAuthorizationBehavior,
  AcmeContact,
  AcmeDomainValidation$,
  AcmeDomainValidationFailureReason,
  AcmeDomainValidationStatus,
  AcmeDomainValidationSummary$,
  AcmeEndpoint$,
  AcmeEndpointStatus,
  AcmeEndpointSummary$,
  AcmeExternalAccountBinding$,
  AcmeExternalAccountBindingSummary$,
  ACMServiceException,
  AddTagsToCertificate$,
  AddTagsToCertificateCommand,
  AddTagsToCertificateRequest$,
  CertificateAuthority$,
  CertificateDetail$,
  CertificateExport,
  CertificateFilter$,
  CertificateFilterStatement$,
  CertificateKeyPairOrigin,
  CertificateManagedBy,
  CertificateMetadata$,
  CertificateOptions$,
  CertificateSearchResult$,
  CertificateStatus,
  CertificateSummary$,
  CertificateTransparencyLoggingPreference,
  CertificateType,
  CommonNameFilter$,
  ComparisonOperator,
  ConflictException,
  ConflictException$,
  CreateAcmeDomainValidation$,
  CreateAcmeDomainValidationCommand,
  CreateAcmeDomainValidationRequest$,
  CreateAcmeDomainValidationResponse$,
  CreateAcmeEndpoint$,
  CreateAcmeEndpointCommand,
  CreateAcmeEndpointRequest$,
  CreateAcmeEndpointResponse$,
  CreateAcmeExternalAccountBinding$,
  CreateAcmeExternalAccountBindingCommand,
  CreateAcmeExternalAccountBindingRequest$,
  CreateAcmeExternalAccountBindingResponse$,
  CustomAttribute$,
  DeleteAcmeDomainValidation$,
  DeleteAcmeDomainValidationCommand,
  DeleteAcmeDomainValidationRequest$,
  DeleteAcmeEndpoint$,
  DeleteAcmeEndpointCommand,
  DeleteAcmeEndpointRequest$,
  DeleteAcmeExternalAccountBinding$,
  DeleteAcmeExternalAccountBindingCommand,
  DeleteAcmeExternalAccountBindingRequest$,
  DeleteCertificate$,
  DeleteCertificateCommand,
  DeleteCertificateRequest$,
  DescribeAcmeAccount$,
  DescribeAcmeAccountCommand,
  DescribeAcmeAccountRequest$,
  DescribeAcmeAccountResponse$,
  DescribeAcmeDomainValidation$,
  DescribeAcmeDomainValidationCommand,
  DescribeAcmeDomainValidationRequest$,
  DescribeAcmeDomainValidationResponse$,
  DescribeAcmeEndpoint$,
  DescribeAcmeEndpointCommand,
  DescribeAcmeEndpointRequest$,
  DescribeAcmeEndpointResponse$,
  DescribeAcmeExternalAccountBinding$,
  DescribeAcmeExternalAccountBindingCommand,
  DescribeAcmeExternalAccountBindingRequest$,
  DescribeAcmeExternalAccountBindingResponse$,
  DescribeCertificate$,
  DescribeCertificateCommand,
  DescribeCertificateRequest$,
  DescribeCertificateResponse$,
  DistinguishedName$,
  DnsNameFilter$,
  DnsPrevalidationDetails$,
  DnsPrevalidationOptions$,
  DomainScope$,
  DomainScopeOption,
  DomainStatus,
  DomainValidation$,
  DomainValidationOption$,
  Expiration$,
  ExpiryEventsConfiguration$,
  ExportCertificate$,
  ExportCertificateCommand,
  ExportCertificateRequest$,
  ExportCertificateResponse$,
  ExtendedKeyUsage$,
  ExtendedKeyUsageName,
  FailureDetails$,
  FailureReason,
  Filters$,
  GeneralName$,
  GetAccountConfiguration$,
  GetAccountConfigurationCommand,
  GetAccountConfigurationResponse$,
  GetAcmeExternalAccountBindingCredentials$,
  GetAcmeExternalAccountBindingCredentialsCommand,
  GetAcmeExternalAccountBindingCredentialsRequest$,
  GetAcmeExternalAccountBindingCredentialsResponse$,
  GetCertificate$,
  GetCertificateCommand,
  GetCertificateRequest$,
  GetCertificateResponse$,
  HttpRedirect$,
  ImportCertificate$,
  ImportCertificateCommand,
  ImportCertificateRequest$,
  ImportCertificateResponse$,
  InternalServerException,
  InternalServerException$,
  InvalidArgsException,
  InvalidArgsException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidDomainValidationOptionsException,
  InvalidDomainValidationOptionsException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidStateException,
  InvalidStateException$,
  InvalidTagException,
  InvalidTagException$,
  KeyAlgorithm,
  KeyUsage$,
  KeyUsageName,
  LimitExceededException,
  LimitExceededException$,
  ListAcmeAccounts$,
  ListAcmeAccountsCommand,
  ListAcmeAccountsRequest$,
  ListAcmeAccountsResponse$,
  ListAcmeDomainValidations$,
  ListAcmeDomainValidationsCommand,
  ListAcmeDomainValidationsRequest$,
  ListAcmeDomainValidationsResponse$,
  ListAcmeEndpoints$,
  ListAcmeEndpointsCommand,
  ListAcmeEndpointsRequest$,
  ListAcmeEndpointsResponse$,
  ListAcmeExternalAccountBindings$,
  ListAcmeExternalAccountBindingsCommand,
  ListAcmeExternalAccountBindingsRequest$,
  ListAcmeExternalAccountBindingsResponse$,
  ListCertificates$,
  ListCertificatesCommand,
  ListCertificatesRequest$,
  ListCertificatesResponse$,
  ListTagsForCertificate$,
  ListTagsForCertificateCommand,
  ListTagsForCertificateRequest$,
  ListTagsForCertificateResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OtherName$,
  paginateListAcmeAccounts,
  paginateListAcmeDomainValidations,
  paginateListAcmeEndpoints,
  paginateListAcmeExternalAccountBindings,
  paginateListCertificates,
  paginateSearchCertificates,
  PrevalidationDetails$,
  PrevalidationOptions$,
  PrevalidationType,
  PublicCertificateAuthority$,
  PublicKeyAlgorithm,
  PutAccountConfiguration$,
  PutAccountConfigurationCommand,
  PutAccountConfigurationRequest$,
  RecordType,
  RemoveTagsFromCertificate$,
  RemoveTagsFromCertificateCommand,
  RemoveTagsFromCertificateRequest$,
  RenewalEligibility,
  RenewalStatus,
  RenewalSummary$,
  RenewCertificate$,
  RenewCertificateCommand,
  RenewCertificateRequest$,
  RequestCertificate$,
  RequestCertificateCommand,
  RequestCertificateRequest$,
  RequestCertificateResponse$,
  RequestInProgressException,
  RequestInProgressException$,
  ResendValidationEmail$,
  ResendValidationEmailCommand,
  ResendValidationEmailRequest$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceRecord$,
  RevocationReason,
  RevokeAcmeAccount$,
  RevokeAcmeAccountCommand,
  RevokeAcmeAccountRequest$,
  RevokeAcmeExternalAccountBinding$,
  RevokeAcmeExternalAccountBindingCommand,
  RevokeAcmeExternalAccountBindingRequest$,
  RevokeCertificate$,
  RevokeCertificateCommand,
  RevokeCertificateRequest$,
  RevokeCertificateResponse$,
  SearchCertificates$,
  SearchCertificatesCommand,
  SearchCertificatesRequest$,
  SearchCertificatesResponse$,
  SearchCertificatesSortBy,
  SearchCertificatesSortOrder,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortBy,
  SortOrder,
  SubjectAlternativeNameFilter$,
  SubjectFilter$,
  Tag$,
  TagPolicyException,
  TagPolicyException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  ThrottlingReason$,
  TimestampRange$,
  TimeType,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAcmeDomainValidation$,
  UpdateAcmeDomainValidationCommand,
  UpdateAcmeDomainValidationRequest$,
  UpdateAcmeEndpoint$,
  UpdateAcmeEndpointCommand,
  UpdateAcmeEndpointRequest$,
  UpdateCertificateOptions$,
  UpdateCertificateOptionsCommand,
  UpdateCertificateOptionsRequest$,
  ValidationException,
  ValidationException$,
  ValidationMethod,
  waitForAcmeDomainValidationDeleted,
  waitForAcmeDomainValidationValidated,
  waitForAcmeEndpointActive,
  waitForAcmeEndpointDeleted,
  waitForCertificateValidated,
  waitUntilAcmeDomainValidationDeleted,
  waitUntilAcmeDomainValidationValidated,
  waitUntilAcmeEndpointActive,
  waitUntilAcmeEndpointDeleted,
  waitUntilCertificateValidated,
  X509AttributeFilter$,
  X509Attributes$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ACMClient === "function");
assert(typeof ACM === "function");
// commands
assert(typeof AddTagsToCertificateCommand === "function");
assert(typeof AddTagsToCertificate$ === "object");
assert(typeof CreateAcmeDomainValidationCommand === "function");
assert(typeof CreateAcmeDomainValidation$ === "object");
assert(typeof CreateAcmeEndpointCommand === "function");
assert(typeof CreateAcmeEndpoint$ === "object");
assert(typeof CreateAcmeExternalAccountBindingCommand === "function");
assert(typeof CreateAcmeExternalAccountBinding$ === "object");
assert(typeof DeleteAcmeDomainValidationCommand === "function");
assert(typeof DeleteAcmeDomainValidation$ === "object");
assert(typeof DeleteAcmeEndpointCommand === "function");
assert(typeof DeleteAcmeEndpoint$ === "object");
assert(typeof DeleteAcmeExternalAccountBindingCommand === "function");
assert(typeof DeleteAcmeExternalAccountBinding$ === "object");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificate$ === "object");
assert(typeof DescribeAcmeAccountCommand === "function");
assert(typeof DescribeAcmeAccount$ === "object");
assert(typeof DescribeAcmeDomainValidationCommand === "function");
assert(typeof DescribeAcmeDomainValidation$ === "object");
assert(typeof DescribeAcmeEndpointCommand === "function");
assert(typeof DescribeAcmeEndpoint$ === "object");
assert(typeof DescribeAcmeExternalAccountBindingCommand === "function");
assert(typeof DescribeAcmeExternalAccountBinding$ === "object");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeCertificate$ === "object");
assert(typeof ExportCertificateCommand === "function");
assert(typeof ExportCertificate$ === "object");
assert(typeof GetAccountConfigurationCommand === "function");
assert(typeof GetAccountConfiguration$ === "object");
assert(typeof GetAcmeExternalAccountBindingCredentialsCommand === "function");
assert(typeof GetAcmeExternalAccountBindingCredentials$ === "object");
assert(typeof GetCertificateCommand === "function");
assert(typeof GetCertificate$ === "object");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ImportCertificate$ === "object");
assert(typeof ListAcmeAccountsCommand === "function");
assert(typeof ListAcmeAccounts$ === "object");
assert(typeof ListAcmeDomainValidationsCommand === "function");
assert(typeof ListAcmeDomainValidations$ === "object");
assert(typeof ListAcmeEndpointsCommand === "function");
assert(typeof ListAcmeEndpoints$ === "object");
assert(typeof ListAcmeExternalAccountBindingsCommand === "function");
assert(typeof ListAcmeExternalAccountBindings$ === "object");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListCertificates$ === "object");
assert(typeof ListTagsForCertificateCommand === "function");
assert(typeof ListTagsForCertificate$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAccountConfigurationCommand === "function");
assert(typeof PutAccountConfiguration$ === "object");
assert(typeof RemoveTagsFromCertificateCommand === "function");
assert(typeof RemoveTagsFromCertificate$ === "object");
assert(typeof RenewCertificateCommand === "function");
assert(typeof RenewCertificate$ === "object");
assert(typeof RequestCertificateCommand === "function");
assert(typeof RequestCertificate$ === "object");
assert(typeof ResendValidationEmailCommand === "function");
assert(typeof ResendValidationEmail$ === "object");
assert(typeof RevokeAcmeAccountCommand === "function");
assert(typeof RevokeAcmeAccount$ === "object");
assert(typeof RevokeAcmeExternalAccountBindingCommand === "function");
assert(typeof RevokeAcmeExternalAccountBinding$ === "object");
assert(typeof RevokeCertificateCommand === "function");
assert(typeof RevokeCertificate$ === "object");
assert(typeof SearchCertificatesCommand === "function");
assert(typeof SearchCertificates$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAcmeDomainValidationCommand === "function");
assert(typeof UpdateAcmeDomainValidation$ === "object");
assert(typeof UpdateAcmeEndpointCommand === "function");
assert(typeof UpdateAcmeEndpoint$ === "object");
assert(typeof UpdateCertificateOptionsCommand === "function");
assert(typeof UpdateCertificateOptions$ === "object");
// structural schemas
assert(typeof AcmCertificateMetadata$ === "object");
assert(typeof AcmCertificateMetadataFilter$ === "object");
assert(typeof AcmeAccount$ === "object");
assert(typeof AcmeAccountSummary$ === "object");
assert(typeof AcmeDomainValidation$ === "object");
assert(typeof AcmeDomainValidationSummary$ === "object");
assert(typeof AcmeEndpoint$ === "object");
assert(typeof AcmeEndpointSummary$ === "object");
assert(typeof AcmeExternalAccountBinding$ === "object");
assert(typeof AcmeExternalAccountBindingSummary$ === "object");
assert(typeof AddTagsToCertificateRequest$ === "object");
assert(typeof CertificateAuthority$ === "object");
assert(typeof CertificateDetail$ === "object");
assert(typeof CertificateFilter$ === "object");
assert(typeof CertificateFilterStatement$ === "object");
assert(typeof CertificateMetadata$ === "object");
assert(typeof CertificateOptions$ === "object");
assert(typeof CertificateSearchResult$ === "object");
assert(typeof CertificateSummary$ === "object");
assert(typeof CommonNameFilter$ === "object");
assert(typeof CreateAcmeDomainValidationRequest$ === "object");
assert(typeof CreateAcmeDomainValidationResponse$ === "object");
assert(typeof CreateAcmeEndpointRequest$ === "object");
assert(typeof CreateAcmeEndpointResponse$ === "object");
assert(typeof CreateAcmeExternalAccountBindingRequest$ === "object");
assert(typeof CreateAcmeExternalAccountBindingResponse$ === "object");
assert(typeof CustomAttribute$ === "object");
assert(typeof DeleteAcmeDomainValidationRequest$ === "object");
assert(typeof DeleteAcmeEndpointRequest$ === "object");
assert(typeof DeleteAcmeExternalAccountBindingRequest$ === "object");
assert(typeof DeleteCertificateRequest$ === "object");
assert(typeof DescribeAcmeAccountRequest$ === "object");
assert(typeof DescribeAcmeAccountResponse$ === "object");
assert(typeof DescribeAcmeDomainValidationRequest$ === "object");
assert(typeof DescribeAcmeDomainValidationResponse$ === "object");
assert(typeof DescribeAcmeEndpointRequest$ === "object");
assert(typeof DescribeAcmeEndpointResponse$ === "object");
assert(typeof DescribeAcmeExternalAccountBindingRequest$ === "object");
assert(typeof DescribeAcmeExternalAccountBindingResponse$ === "object");
assert(typeof DescribeCertificateRequest$ === "object");
assert(typeof DescribeCertificateResponse$ === "object");
assert(typeof DistinguishedName$ === "object");
assert(typeof DnsNameFilter$ === "object");
assert(typeof DnsPrevalidationDetails$ === "object");
assert(typeof DnsPrevalidationOptions$ === "object");
assert(typeof DomainScope$ === "object");
assert(typeof DomainValidation$ === "object");
assert(typeof DomainValidationOption$ === "object");
assert(typeof Expiration$ === "object");
assert(typeof ExpiryEventsConfiguration$ === "object");
assert(typeof ExportCertificateRequest$ === "object");
assert(typeof ExportCertificateResponse$ === "object");
assert(typeof ExtendedKeyUsage$ === "object");
assert(typeof FailureDetails$ === "object");
assert(typeof Filters$ === "object");
assert(typeof GeneralName$ === "object");
assert(typeof GetAccountConfigurationResponse$ === "object");
assert(typeof GetAcmeExternalAccountBindingCredentialsRequest$ === "object");
assert(typeof GetAcmeExternalAccountBindingCredentialsResponse$ === "object");
assert(typeof GetCertificateRequest$ === "object");
assert(typeof GetCertificateResponse$ === "object");
assert(typeof HttpRedirect$ === "object");
assert(typeof ImportCertificateRequest$ === "object");
assert(typeof ImportCertificateResponse$ === "object");
assert(typeof KeyUsage$ === "object");
assert(typeof ListAcmeAccountsRequest$ === "object");
assert(typeof ListAcmeAccountsResponse$ === "object");
assert(typeof ListAcmeDomainValidationsRequest$ === "object");
assert(typeof ListAcmeDomainValidationsResponse$ === "object");
assert(typeof ListAcmeEndpointsRequest$ === "object");
assert(typeof ListAcmeEndpointsResponse$ === "object");
assert(typeof ListAcmeExternalAccountBindingsRequest$ === "object");
assert(typeof ListAcmeExternalAccountBindingsResponse$ === "object");
assert(typeof ListCertificatesRequest$ === "object");
assert(typeof ListCertificatesResponse$ === "object");
assert(typeof ListTagsForCertificateRequest$ === "object");
assert(typeof ListTagsForCertificateResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OtherName$ === "object");
assert(typeof PrevalidationDetails$ === "object");
assert(typeof PrevalidationOptions$ === "object");
assert(typeof PublicCertificateAuthority$ === "object");
assert(typeof PutAccountConfigurationRequest$ === "object");
assert(typeof RemoveTagsFromCertificateRequest$ === "object");
assert(typeof RenewalSummary$ === "object");
assert(typeof RenewCertificateRequest$ === "object");
assert(typeof RequestCertificateRequest$ === "object");
assert(typeof RequestCertificateResponse$ === "object");
assert(typeof ResendValidationEmailRequest$ === "object");
assert(typeof ResourceRecord$ === "object");
assert(typeof RevokeAcmeAccountRequest$ === "object");
assert(typeof RevokeAcmeExternalAccountBindingRequest$ === "object");
assert(typeof RevokeCertificateRequest$ === "object");
assert(typeof RevokeCertificateResponse$ === "object");
assert(typeof SearchCertificatesRequest$ === "object");
assert(typeof SearchCertificatesResponse$ === "object");
assert(typeof SubjectAlternativeNameFilter$ === "object");
assert(typeof SubjectFilter$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof ThrottlingReason$ === "object");
assert(typeof TimestampRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAcmeDomainValidationRequest$ === "object");
assert(typeof UpdateAcmeEndpointRequest$ === "object");
assert(typeof UpdateCertificateOptionsRequest$ === "object");
assert(typeof X509AttributeFilter$ === "object");
assert(typeof X509Attributes$ === "object");
// enums
assert(typeof AcmeAccountStatus === "object");
assert(typeof AcmeAuthorizationBehavior === "object");
assert(typeof AcmeContact === "object");
assert(typeof AcmeDomainValidationFailureReason === "object");
assert(typeof AcmeDomainValidationStatus === "object");
assert(typeof AcmeEndpointStatus === "object");
assert(typeof CertificateExport === "object");
assert(typeof CertificateKeyPairOrigin === "object");
assert(typeof CertificateManagedBy === "object");
assert(typeof CertificateStatus === "object");
assert(typeof CertificateTransparencyLoggingPreference === "object");
assert(typeof CertificateType === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof DomainScopeOption === "object");
assert(typeof DomainStatus === "object");
assert(typeof ExtendedKeyUsageName === "object");
assert(typeof FailureReason === "object");
assert(typeof KeyAlgorithm === "object");
assert(typeof KeyUsageName === "object");
assert(typeof PrevalidationType === "object");
assert(typeof PublicKeyAlgorithm === "object");
assert(typeof RecordType === "object");
assert(typeof RenewalEligibility === "object");
assert(typeof RenewalStatus === "object");
assert(typeof RevocationReason === "object");
assert(typeof SearchCertificatesSortBy === "object");
assert(typeof SearchCertificatesSortOrder === "object");
assert(typeof SortBy === "object");
assert(typeof SortOrder === "object");
assert(typeof TimeType === "object");
assert(typeof ValidationMethod === "object");
// errors
assert(AccessDeniedException.prototype instanceof ACMServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ACMServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ACMServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidArgsException.prototype instanceof ACMServiceException);
assert(typeof InvalidArgsException$ === "object");
assert(InvalidArnException.prototype instanceof ACMServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidDomainValidationOptionsException.prototype instanceof ACMServiceException);
assert(typeof InvalidDomainValidationOptionsException$ === "object");
assert(InvalidParameterException.prototype instanceof ACMServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidStateException.prototype instanceof ACMServiceException);
assert(typeof InvalidStateException$ === "object");
assert(InvalidTagException.prototype instanceof ACMServiceException);
assert(typeof InvalidTagException$ === "object");
assert(LimitExceededException.prototype instanceof ACMServiceException);
assert(typeof LimitExceededException$ === "object");
assert(RequestInProgressException.prototype instanceof ACMServiceException);
assert(typeof RequestInProgressException$ === "object");
assert(ResourceInUseException.prototype instanceof ACMServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ACMServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ACMServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TagPolicyException.prototype instanceof ACMServiceException);
assert(typeof TagPolicyException$ === "object");
assert(ThrottlingException.prototype instanceof ACMServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof ACMServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof ACMServiceException);
assert(typeof ValidationException$ === "object");
assert(ACMServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAcmeDomainValidationDeleted === "function");
assert(typeof waitForAcmeDomainValidationValidated === "function");
assert(typeof waitForAcmeEndpointActive === "function");
assert(typeof waitForAcmeEndpointDeleted === "function");
assert(typeof waitForCertificateValidated === "function");
assert(typeof waitUntilAcmeDomainValidationDeleted === "function");
assert(typeof waitUntilAcmeDomainValidationValidated === "function");
assert(typeof waitUntilAcmeEndpointActive === "function");
assert(typeof waitUntilAcmeEndpointDeleted === "function");
assert(typeof waitUntilCertificateValidated === "function");
// paginators
assert(typeof paginateListAcmeAccounts === "function");
assert(typeof paginateListAcmeDomainValidations === "function");
assert(typeof paginateListAcmeEndpoints === "function");
assert(typeof paginateListAcmeExternalAccountBindings === "function");
assert(typeof paginateListCertificates === "function");
assert(typeof paginateSearchCertificates === "function");
console.log(`ACM index test passed.`);
