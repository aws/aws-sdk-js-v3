import {
  ACMPCA,
  ACMPCAClient,
  ACMPCAServiceException,
  AccessMethodType,
  ActionType,
  AuditReportResponseFormat,
  AuditReportStatus,
  CertificateAuthorityStatus,
  CertificateAuthorityType,
  CertificateAuthorityUsageMode,
  CreateCertificateAuthorityAuditReportCommand,
  CreateCertificateAuthorityCommand,
  CreatePermissionCommand,
  CrlType,
  DeleteCertificateAuthorityCommand,
  DeletePermissionCommand,
  DeletePolicyCommand,
  DescribeCertificateAuthorityAuditReportCommand,
  DescribeCertificateAuthorityCommand,
  ExtendedKeyUsageType,
  FailureReason,
  GetCertificateAuthorityCertificateCommand,
  GetCertificateAuthorityCsrCommand,
  GetCertificateCommand,
  GetPolicyCommand,
  ImportCertificateAuthorityCertificateCommand,
  IssueCertificateCommand,
  KeyAlgorithm,
  KeyStorageSecurityStandard,
  ListCertificateAuthoritiesCommand,
  ListPermissionsCommand,
  ListTagsCommand,
  PolicyQualifierId,
  PutPolicyCommand,
  ResourceOwner,
  RestoreCertificateAuthorityCommand,
  RevocationReason,
  RevokeCertificateCommand,
  S3ObjectAcl,
  SigningAlgorithm,
  TagCertificateAuthorityCommand,
  UntagCertificateAuthorityCommand,
  UpdateCertificateAuthorityCommand,
  ValidityPeriodType,
  paginateListCertificateAuthorities,
  paginateListPermissions,
  paginateListTags,
  waitForAuditReportCreated,
  waitForCertificateAuthorityCSRCreated,
  waitForCertificateIssued,
  waitUntilAuditReportCreated,
  waitUntilCertificateAuthorityCSRCreated,
  waitUntilCertificateIssued,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ACMPCAClient === "function")
assert(typeof ACMPCA === "function")
// commands
assert(typeof CreateCertificateAuthorityCommand === "function")
assert(typeof CreateCertificateAuthorityAuditReportCommand === "function")
assert(typeof CreatePermissionCommand === "function")
assert(typeof DeleteCertificateAuthorityCommand === "function")
assert(typeof DeletePermissionCommand === "function")
assert(typeof DeletePolicyCommand === "function")
assert(typeof DescribeCertificateAuthorityCommand === "function")
assert(typeof DescribeCertificateAuthorityAuditReportCommand === "function")
assert(typeof GetCertificateCommand === "function")
assert(typeof GetCertificateAuthorityCertificateCommand === "function")
assert(typeof GetCertificateAuthorityCsrCommand === "function")
assert(typeof GetPolicyCommand === "function")
assert(typeof ImportCertificateAuthorityCertificateCommand === "function")
assert(typeof IssueCertificateCommand === "function")
assert(typeof ListCertificateAuthoritiesCommand === "function")
assert(typeof ListPermissionsCommand === "function")
assert(typeof ListTagsCommand === "function")
assert(typeof PutPolicyCommand === "function")
assert(typeof RestoreCertificateAuthorityCommand === "function")
assert(typeof RevokeCertificateCommand === "function")
assert(typeof TagCertificateAuthorityCommand === "function")
assert(typeof UntagCertificateAuthorityCommand === "function")
assert(typeof UpdateCertificateAuthorityCommand === "function")
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
assert(ACMPCAServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForAuditReportCreated === "function")
assert(typeof waitForCertificateAuthorityCSRCreated === "function")
assert(typeof waitForCertificateIssued === "function")
assert(typeof waitUntilAuditReportCreated === "function")
assert(typeof waitUntilCertificateAuthorityCSRCreated === "function")
assert(typeof waitUntilCertificateIssued === "function")
// paginators
assert(typeof paginateListCertificateAuthorities === "function")
assert(typeof paginateListPermissions === "function")
assert(typeof paginateListTags === "function")
console.log(`ACMPCA index test passed.`);
