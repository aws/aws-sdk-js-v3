import {
  ACM,
  ACMClient,
  ACMServiceException,
  AddTagsToCertificateCommand,
  CertificateExport,
  CertificateManagedBy,
  CertificateStatus,
  CertificateTransparencyLoggingPreference,
  CertificateType,
  DeleteCertificateCommand,
  DescribeCertificateCommand,
  DomainStatus,
  ExportCertificateCommand,
  ExtendedKeyUsageName,
  FailureReason,
  GetAccountConfigurationCommand,
  GetCertificateCommand,
  ImportCertificateCommand,
  KeyAlgorithm,
  KeyUsageName,
  ListCertificatesCommand,
  ListTagsForCertificateCommand,
  PutAccountConfigurationCommand,
  RecordType,
  RemoveTagsFromCertificateCommand,
  RenewCertificateCommand,
  RenewalEligibility,
  RenewalStatus,
  RequestCertificateCommand,
  ResendValidationEmailCommand,
  RevocationReason,
  RevokeCertificateCommand,
  SortBy,
  SortOrder,
  UpdateCertificateOptionsCommand,
  ValidationMethod,
  paginateListCertificates,
  waitForCertificateValidated,
  waitUntilCertificateValidated,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ACMClient === "function");
assert(typeof ACM === "function");
// commands
assert(typeof AddTagsToCertificateCommand === "function");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof ExportCertificateCommand === "function");
assert(typeof GetAccountConfigurationCommand === "function");
assert(typeof GetCertificateCommand === "function");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListTagsForCertificateCommand === "function");
assert(typeof PutAccountConfigurationCommand === "function");
assert(typeof RemoveTagsFromCertificateCommand === "function");
assert(typeof RenewCertificateCommand === "function");
assert(typeof RequestCertificateCommand === "function");
assert(typeof ResendValidationEmailCommand === "function");
assert(typeof RevokeCertificateCommand === "function");
assert(typeof UpdateCertificateOptionsCommand === "function");
// enums
assert(typeof CertificateExport === "object");
assert(typeof CertificateManagedBy === "object");
assert(typeof CertificateStatus === "object");
assert(typeof CertificateTransparencyLoggingPreference === "object");
assert(typeof CertificateType === "object");
assert(typeof DomainStatus === "object");
assert(typeof ExtendedKeyUsageName === "object");
assert(typeof FailureReason === "object");
assert(typeof KeyAlgorithm === "object");
assert(typeof KeyUsageName === "object");
assert(typeof RecordType === "object");
assert(typeof RenewalEligibility === "object");
assert(typeof RenewalStatus === "object");
assert(typeof RevocationReason === "object");
assert(typeof SortBy === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationMethod === "object");
// errors
assert(ACMServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCertificateValidated === "function");
assert(typeof waitUntilCertificateValidated === "function");
// paginators
assert(typeof paginateListCertificates === "function");
console.log(`ACM index test passed.`);
