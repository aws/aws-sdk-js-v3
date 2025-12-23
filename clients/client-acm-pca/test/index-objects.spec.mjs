import {
  AccessDescription$,
  AccessMethod$,
  AccessMethodType,
  ACMPCA,
  ACMPCAClient,
  ACMPCAServiceException,
  ActionType,
  ApiPassthrough$,
  ASN1Subject$,
  AuditReportResponseFormat,
  AuditReportStatus,
  CertificateAuthority$,
  CertificateAuthorityConfiguration$,
  CertificateAuthorityStatus,
  CertificateAuthorityType,
  CertificateAuthorityUsageMode,
  CertificateMismatchException,
  CertificateMismatchException$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  CreateCertificateAuthority$,
  CreateCertificateAuthorityAuditReport$,
  CreateCertificateAuthorityAuditReportCommand,
  CreateCertificateAuthorityAuditReportRequest$,
  CreateCertificateAuthorityAuditReportResponse$,
  CreateCertificateAuthorityCommand,
  CreateCertificateAuthorityRequest$,
  CreateCertificateAuthorityResponse$,
  CreatePermission$,
  CreatePermissionCommand,
  CreatePermissionRequest$,
  CrlConfiguration$,
  CrlDistributionPointExtensionConfiguration$,
  CrlType,
  CsrExtensions$,
  CustomAttribute$,
  CustomExtension$,
  DeleteCertificateAuthority$,
  DeleteCertificateAuthorityCommand,
  DeleteCertificateAuthorityRequest$,
  DeletePermission$,
  DeletePermissionCommand,
  DeletePermissionRequest$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyRequest$,
  DescribeCertificateAuthority$,
  DescribeCertificateAuthorityAuditReport$,
  DescribeCertificateAuthorityAuditReportCommand,
  DescribeCertificateAuthorityAuditReportRequest$,
  DescribeCertificateAuthorityAuditReportResponse$,
  DescribeCertificateAuthorityCommand,
  DescribeCertificateAuthorityRequest$,
  DescribeCertificateAuthorityResponse$,
  EdiPartyName$,
  ExtendedKeyUsage$,
  ExtendedKeyUsageType,
  Extensions$,
  FailureReason,
  GeneralName$,
  GetCertificate$,
  GetCertificateAuthorityCertificate$,
  GetCertificateAuthorityCertificateCommand,
  GetCertificateAuthorityCertificateRequest$,
  GetCertificateAuthorityCertificateResponse$,
  GetCertificateAuthorityCsr$,
  GetCertificateAuthorityCsrCommand,
  GetCertificateAuthorityCsrRequest$,
  GetCertificateAuthorityCsrResponse$,
  GetCertificateCommand,
  GetCertificateRequest$,
  GetCertificateResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  ImportCertificateAuthorityCertificate$,
  ImportCertificateAuthorityCertificateCommand,
  ImportCertificateAuthorityCertificateRequest$,
  InvalidArgsException,
  InvalidArgsException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidPolicyException,
  InvalidPolicyException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidStateException,
  InvalidStateException$,
  InvalidTagException,
  InvalidTagException$,
  IssueCertificate$,
  IssueCertificateCommand,
  IssueCertificateRequest$,
  IssueCertificateResponse$,
  KeyAlgorithm,
  KeyStorageSecurityStandard,
  KeyUsage$,
  LimitExceededException,
  LimitExceededException$,
  ListCertificateAuthorities$,
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesRequest$,
  ListCertificateAuthoritiesResponse$,
  ListPermissions$,
  ListPermissionsCommand,
  ListPermissionsRequest$,
  ListPermissionsResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  LockoutPreventedException,
  LockoutPreventedException$,
  MalformedCertificateException,
  MalformedCertificateException$,
  MalformedCSRException,
  MalformedCSRException$,
  OcspConfiguration$,
  OtherName$,
  paginateListCertificateAuthorities,
  paginateListPermissions,
  paginateListTags,
  Permission$,
  PermissionAlreadyExistsException,
  PermissionAlreadyExistsException$,
  PolicyInformation$,
  PolicyQualifierId,
  PolicyQualifierInfo$,
  PutPolicy$,
  PutPolicyCommand,
  PutPolicyRequest$,
  Qualifier$,
  RequestAlreadyProcessedException,
  RequestAlreadyProcessedException$,
  RequestFailedException,
  RequestFailedException$,
  RequestInProgressException,
  RequestInProgressException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceOwner,
  RestoreCertificateAuthority$,
  RestoreCertificateAuthorityCommand,
  RestoreCertificateAuthorityRequest$,
  RevocationConfiguration$,
  RevocationReason,
  RevokeCertificate$,
  RevokeCertificateCommand,
  RevokeCertificateRequest$,
  S3ObjectAcl,
  SigningAlgorithm,
  Tag$,
  TagCertificateAuthority$,
  TagCertificateAuthorityCommand,
  TagCertificateAuthorityRequest$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagCertificateAuthority$,
  UntagCertificateAuthorityCommand,
  UntagCertificateAuthorityRequest$,
  UpdateCertificateAuthority$,
  UpdateCertificateAuthorityCommand,
  UpdateCertificateAuthorityRequest$,
  Validity$,
  ValidityPeriodType,
  waitForAuditReportCreated,
  waitForCertificateAuthorityCSRCreated,
  waitForCertificateIssued,
  waitUntilAuditReportCreated,
  waitUntilCertificateAuthorityCSRCreated,
  waitUntilCertificateIssued,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ACMPCAClient === "function");
assert(typeof ACMPCA === "function");
// commands
assert(typeof CreateCertificateAuthorityCommand === "function");
assert(typeof CreateCertificateAuthority$ === "object");
assert(typeof CreateCertificateAuthorityAuditReportCommand === "function");
assert(typeof CreateCertificateAuthorityAuditReport$ === "object");
assert(typeof CreatePermissionCommand === "function");
assert(typeof CreatePermission$ === "object");
assert(typeof DeleteCertificateAuthorityCommand === "function");
assert(typeof DeleteCertificateAuthority$ === "object");
assert(typeof DeletePermissionCommand === "function");
assert(typeof DeletePermission$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DescribeCertificateAuthorityCommand === "function");
assert(typeof DescribeCertificateAuthority$ === "object");
assert(typeof DescribeCertificateAuthorityAuditReportCommand === "function");
assert(typeof DescribeCertificateAuthorityAuditReport$ === "object");
assert(typeof GetCertificateCommand === "function");
assert(typeof GetCertificate$ === "object");
assert(typeof GetCertificateAuthorityCertificateCommand === "function");
assert(typeof GetCertificateAuthorityCertificate$ === "object");
assert(typeof GetCertificateAuthorityCsrCommand === "function");
assert(typeof GetCertificateAuthorityCsr$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof ImportCertificateAuthorityCertificateCommand === "function");
assert(typeof ImportCertificateAuthorityCertificate$ === "object");
assert(typeof IssueCertificateCommand === "function");
assert(typeof IssueCertificate$ === "object");
assert(typeof ListCertificateAuthoritiesCommand === "function");
assert(typeof ListCertificateAuthorities$ === "object");
assert(typeof ListPermissionsCommand === "function");
assert(typeof ListPermissions$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof PutPolicyCommand === "function");
assert(typeof PutPolicy$ === "object");
assert(typeof RestoreCertificateAuthorityCommand === "function");
assert(typeof RestoreCertificateAuthority$ === "object");
assert(typeof RevokeCertificateCommand === "function");
assert(typeof RevokeCertificate$ === "object");
assert(typeof TagCertificateAuthorityCommand === "function");
assert(typeof TagCertificateAuthority$ === "object");
assert(typeof UntagCertificateAuthorityCommand === "function");
assert(typeof UntagCertificateAuthority$ === "object");
assert(typeof UpdateCertificateAuthorityCommand === "function");
assert(typeof UpdateCertificateAuthority$ === "object");
// structural schemas
assert(typeof AccessDescription$ === "object");
assert(typeof AccessMethod$ === "object");
assert(typeof ApiPassthrough$ === "object");
assert(typeof ASN1Subject$ === "object");
assert(typeof CertificateAuthority$ === "object");
assert(typeof CertificateAuthorityConfiguration$ === "object");
assert(typeof CreateCertificateAuthorityAuditReportRequest$ === "object");
assert(typeof CreateCertificateAuthorityAuditReportResponse$ === "object");
assert(typeof CreateCertificateAuthorityRequest$ === "object");
assert(typeof CreateCertificateAuthorityResponse$ === "object");
assert(typeof CreatePermissionRequest$ === "object");
assert(typeof CrlConfiguration$ === "object");
assert(typeof CrlDistributionPointExtensionConfiguration$ === "object");
assert(typeof CsrExtensions$ === "object");
assert(typeof CustomAttribute$ === "object");
assert(typeof CustomExtension$ === "object");
assert(typeof DeleteCertificateAuthorityRequest$ === "object");
assert(typeof DeletePermissionRequest$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DescribeCertificateAuthorityAuditReportRequest$ === "object");
assert(typeof DescribeCertificateAuthorityAuditReportResponse$ === "object");
assert(typeof DescribeCertificateAuthorityRequest$ === "object");
assert(typeof DescribeCertificateAuthorityResponse$ === "object");
assert(typeof EdiPartyName$ === "object");
assert(typeof ExtendedKeyUsage$ === "object");
assert(typeof Extensions$ === "object");
assert(typeof GeneralName$ === "object");
assert(typeof GetCertificateAuthorityCertificateRequest$ === "object");
assert(typeof GetCertificateAuthorityCertificateResponse$ === "object");
assert(typeof GetCertificateAuthorityCsrRequest$ === "object");
assert(typeof GetCertificateAuthorityCsrResponse$ === "object");
assert(typeof GetCertificateRequest$ === "object");
assert(typeof GetCertificateResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof ImportCertificateAuthorityCertificateRequest$ === "object");
assert(typeof IssueCertificateRequest$ === "object");
assert(typeof IssueCertificateResponse$ === "object");
assert(typeof KeyUsage$ === "object");
assert(typeof ListCertificateAuthoritiesRequest$ === "object");
assert(typeof ListCertificateAuthoritiesResponse$ === "object");
assert(typeof ListPermissionsRequest$ === "object");
assert(typeof ListPermissionsResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof OcspConfiguration$ === "object");
assert(typeof OtherName$ === "object");
assert(typeof Permission$ === "object");
assert(typeof PolicyInformation$ === "object");
assert(typeof PolicyQualifierInfo$ === "object");
assert(typeof PutPolicyRequest$ === "object");
assert(typeof Qualifier$ === "object");
assert(typeof RestoreCertificateAuthorityRequest$ === "object");
assert(typeof RevocationConfiguration$ === "object");
assert(typeof RevokeCertificateRequest$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagCertificateAuthorityRequest$ === "object");
assert(typeof UntagCertificateAuthorityRequest$ === "object");
assert(typeof UpdateCertificateAuthorityRequest$ === "object");
assert(typeof Validity$ === "object");
// enums
assert(typeof AccessMethodType === "object");
assert(typeof ActionType === "object");
assert(typeof AuditReportResponseFormat === "object");
assert(typeof AuditReportStatus === "object");
assert(typeof CertificateAuthorityStatus === "object");
assert(typeof CertificateAuthorityType === "object");
assert(typeof CertificateAuthorityUsageMode === "object");
assert(typeof CrlType === "object");
assert(typeof ExtendedKeyUsageType === "object");
assert(typeof FailureReason === "object");
assert(typeof KeyAlgorithm === "object");
assert(typeof KeyStorageSecurityStandard === "object");
assert(typeof PolicyQualifierId === "object");
assert(typeof ResourceOwner === "object");
assert(typeof RevocationReason === "object");
assert(typeof S3ObjectAcl === "object");
assert(typeof SigningAlgorithm === "object");
assert(typeof ValidityPeriodType === "object");
// errors
assert(CertificateMismatchException.prototype instanceof ACMPCAServiceException);
assert(typeof CertificateMismatchException$ === "object");
assert(ConcurrentModificationException.prototype instanceof ACMPCAServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(InvalidArgsException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidArgsException$ === "object");
assert(InvalidArnException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidNextTokenException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidPolicyException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidPolicyException$ === "object");
assert(InvalidRequestException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidStateException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidStateException$ === "object");
assert(InvalidTagException.prototype instanceof ACMPCAServiceException);
assert(typeof InvalidTagException$ === "object");
assert(LimitExceededException.prototype instanceof ACMPCAServiceException);
assert(typeof LimitExceededException$ === "object");
assert(LockoutPreventedException.prototype instanceof ACMPCAServiceException);
assert(typeof LockoutPreventedException$ === "object");
assert(MalformedCertificateException.prototype instanceof ACMPCAServiceException);
assert(typeof MalformedCertificateException$ === "object");
assert(MalformedCSRException.prototype instanceof ACMPCAServiceException);
assert(typeof MalformedCSRException$ === "object");
assert(PermissionAlreadyExistsException.prototype instanceof ACMPCAServiceException);
assert(typeof PermissionAlreadyExistsException$ === "object");
assert(RequestAlreadyProcessedException.prototype instanceof ACMPCAServiceException);
assert(typeof RequestAlreadyProcessedException$ === "object");
assert(RequestFailedException.prototype instanceof ACMPCAServiceException);
assert(typeof RequestFailedException$ === "object");
assert(RequestInProgressException.prototype instanceof ACMPCAServiceException);
assert(typeof RequestInProgressException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ACMPCAServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyTagsException.prototype instanceof ACMPCAServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ACMPCAServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAuditReportCreated === "function");
assert(typeof waitForCertificateAuthorityCSRCreated === "function");
assert(typeof waitForCertificateIssued === "function");
assert(typeof waitUntilAuditReportCreated === "function");
assert(typeof waitUntilCertificateAuthorityCSRCreated === "function");
assert(typeof waitUntilCertificateIssued === "function");
// paginators
assert(typeof paginateListCertificateAuthorities === "function");
assert(typeof paginateListPermissions === "function");
assert(typeof paginateListTags === "function");
console.log(`ACMPCA index test passed.`);
