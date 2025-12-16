const _ADE = "AccessDeniedException";
const _ATTC = "AddTagsToCertificate";
const _ATTCR = "AddTagsToCertificateRequest";
const _C = "Certificate";
const _CA = "CertificateArn";
const _CAA = "CertificateAuthorityArn";
const _CAr = "CreatedAt";
const _CC = "CertificateChain";
const _CD = "CertificateDetail";
const _CE = "ConflictException";
const _CO = "CertificateOptions";
const _CS = "CertificateSummary";
const _CSL = "CertificateSummaryList";
const _CSe = "CertificateStatuses";
const _CTLP = "CertificateTransparencyLoggingPreference";
const _D = "Domain";
const _DBE = "DaysBeforeExpiry";
const _DC = "DeleteCertificate";
const _DCR = "DeleteCertificateRequest";
const _DCRe = "DescribeCertificateRequest";
const _DCRes = "DescribeCertificateResponse";
const _DCe = "DescribeCertificate";
const _DN = "DomainName";
const _DV = "DomainValidation";
const _DVL = "DomainValidationList";
const _DVO = "DomainValidationOptions";
const _DVOL = "DomainValidationOptionList";
const _DVOo = "DomainValidationOption";
const _E = "Export";
const _EC = "ExportCertificate";
const _ECR = "ExportCertificateRequest";
const _ECRx = "ExportCertificateResponse";
const _EE = "ExpiryEvents";
const _EEC = "ExpiryEventsConfiguration";
const _EKU = "ExtendedKeyUsages";
const _EKUL = "ExtendedKeyUsageList";
const _EKUx = "ExtendedKeyUsage";
const _EO = "ExportOption";
const _Ex = "Exported";
const _F = "Filters";
const _FR = "FailureReason";
const _GAC = "GetAccountConfiguration";
const _GACR = "GetAccountConfigurationResponse";
const _GC = "GetCertificate";
const _GCR = "GetCertificateRequest";
const _GCRe = "GetCertificateResponse";
const _HASAN = "HasAdditionalSubjectAlternativeNames";
const _HR = "HttpRedirect";
const _I = "Issuer";
const _IA = "IssuedAt";
const _IAE = "InvalidArgsException";
const _IAEn = "InvalidArnException";
const _IAm = "ImportedAt";
const _IC = "ImportCertificate";
const _ICR = "ImportCertificateRequest";
const _ICRm = "ImportCertificateResponse";
const _IDVOE = "InvalidDomainValidationOptionsException";
const _IPE = "InvalidParameterException";
const _ISE = "InvalidStateException";
const _IT = "IdempotencyToken";
const _ITE = "InvalidTagException";
const _IU = "InUse";
const _IUB = "InUseBy";
const _In = "Includes";
const _K = "Key";
const _KA = "KeyAlgorithm";
const _KU = "KeyUsages";
const _KUL = "KeyUsageList";
const _KUe = "KeyUsage";
const _LC = "ListCertificates";
const _LCR = "ListCertificatesRequest";
const _LCRi = "ListCertificatesResponse";
const _LEE = "LimitExceededException";
const _LTFC = "ListTagsForCertificate";
const _LTFCR = "ListTagsForCertificateRequest";
const _LTFCRi = "ListTagsForCertificateResponse";
const _M = "Message";
const _MB = "ManagedBy";
const _MI = "MaxItems";
const _N = "Name";
const _NA = "NotAfter";
const _NB = "NotBefore";
const _NT = "NextToken";
const _O = "Options";
const _OID = "OID";
const _P = "Passphrase";
const _PAC = "PutAccountConfiguration";
const _PACR = "PutAccountConfigurationRequest";
const _PB = "PassphraseBlob";
const _PK = "PrivateKey";
const _PKB = "PrivateKeyBlob";
const _RA = "RevokedAt";
const _RC = "RenewCertificate";
const _RCR = "RenewCertificateRequest";
const _RCRe = "RequestCertificateRequest";
const _RCReq = "RequestCertificateResponse";
const _RCRev = "RevokeCertificateRequest";
const _RCRevo = "RevokeCertificateResponse";
const _RCe = "RequestCertificate";
const _RCev = "RevokeCertificate";
const _RE = "RenewalEligibility";
const _RF = "RedirectFrom";
const _RIPE = "RequestInProgressException";
const _RIUE = "ResourceInUseException";
const _RNFE = "ResourceNotFoundException";
const _RR = "RevocationReason";
const _RRe = "ResourceRecord";
const _RS = "RenewalSummary";
const _RSR = "RenewalStatusReason";
const _RSe = "RenewalStatus";
const _RT = "RedirectTo";
const _RTFC = "RemoveTagsFromCertificate";
const _RTFCR = "RemoveTagsFromCertificateRequest";
const _RVE = "ResendValidationEmail";
const _RVER = "ResendValidationEmailRequest";
const _S = "Serial";
const _SA = "SignatureAlgorithm";
const _SAN = "SubjectAlternativeNames";
const _SANS = "SubjectAlternativeNameSummaries";
const _SB = "SortBy";
const _SO = "SortOrder";
const _St = "Status";
const _Su = "Subject";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TL = "TagList";
const _TMTE = "TooManyTagsException";
const _TPE = "TagPolicyException";
const _Ta = "Tag";
const _Ty = "Type";
const _UA = "UpdatedAt";
const _UCO = "UpdateCertificateOptions";
const _UCOR = "UpdateCertificateOptionsRequest";
const _V = "Value";
const _VD = "ValidationDomain";
const _VE = "ValidationEmails";
const _VEa = "ValidationException";
const _VM = "ValidationMethod";
const _VS = "ValidationStatus";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _eKU = "extendedKeyUsage";
const _eO = "exportOption";
const _hE = "httpError";
const _kT = "keyTypes";
const _kU = "keyUsage";
const _m = "message";
const _mB = "managedBy";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.acm";
const n0 = "com.amazonaws.acm";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ACMServiceException } from "../models/ACMServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InvalidArgsException,
  InvalidArnException,
  InvalidDomainValidationOptionsException,
  InvalidParameterException,
  InvalidStateException,
  InvalidTagException,
  LimitExceededException,
  RequestInProgressException,
  ResourceInUseException,
  ResourceNotFoundException,
  TagPolicyException,
  ThrottlingException,
  TooManyTagsException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var PassphraseBlob: StaticSimpleSchema = [0, n0, _PB, 8, 21];
var PrivateKey: StaticSimpleSchema = [0, n0, _PK, 8, 0];
var PrivateKeyBlob: StaticSimpleSchema = [0, n0, _PKB, 8, 21];
export var AccessDeniedException$: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  { [_e]: _c, [_hE]: 403, [_aQE]: [`AccessDenied`, 403] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AddTagsToCertificateRequest$: StaticStructureSchema = [3, n0, _ATTCR, 0, [_CA, _T], [0, () => TagList]];
export var CertificateDetail$: StaticStructureSchema = [
  3,
  n0,
  _CD,
  0,
  [
    _CA,
    _DN,
    _SAN,
    _MB,
    _DVO,
    _S,
    _Su,
    _I,
    _CAr,
    _IA,
    _IAm,
    _St,
    _RA,
    _RR,
    _NB,
    _NA,
    _KA,
    _SA,
    _IUB,
    _FR,
    _Ty,
    _RS,
    _KU,
    _EKU,
    _CAA,
    _RE,
    _O,
  ],
  [
    0,
    0,
    64 | 0,
    0,
    () => DomainValidationList,
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    4,
    0,
    4,
    4,
    0,
    0,
    64 | 0,
    0,
    0,
    () => RenewalSummary$,
    () => KeyUsageList,
    () => ExtendedKeyUsageList,
    0,
    0,
    () => CertificateOptions$,
  ],
];
export var CertificateOptions$: StaticStructureSchema = [3, n0, _CO, 0, [_CTLP, _E], [0, 0]];
export var CertificateSummary$: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_CA, _DN, _SANS, _HASAN, _St, _Ty, _KA, _KU, _EKU, _EO, _IU, _Ex, _RE, _NB, _NA, _CAr, _IA, _IAm, _RA, _MB],
  [0, 0, 64 | 0, 2, 0, 0, 0, 64 | 0, 64 | 0, 0, 2, 2, 0, 4, 4, 4, 4, 4, 4, 0],
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var DeleteCertificateRequest$: StaticStructureSchema = [3, n0, _DCR, 0, [_CA], [0]];
export var DescribeCertificateRequest$: StaticStructureSchema = [3, n0, _DCRe, 0, [_CA], [0]];
export var DescribeCertificateResponse$: StaticStructureSchema = [3, n0, _DCRes, 0, [_C], [() => CertificateDetail$]];
export var DomainValidation$: StaticStructureSchema = [
  3,
  n0,
  _DV,
  0,
  [_DN, _VE, _VD, _VS, _RRe, _HR, _VM],
  [0, 64 | 0, 0, 0, () => ResourceRecord$, () => HttpRedirect$, 0],
];
export var DomainValidationOption$: StaticStructureSchema = [3, n0, _DVOo, 0, [_DN, _VD], [0, 0]];
export var ExpiryEventsConfiguration$: StaticStructureSchema = [3, n0, _EEC, 0, [_DBE], [1]];
export var ExportCertificateRequest$: StaticStructureSchema = [
  3,
  n0,
  _ECR,
  0,
  [_CA, _P],
  [0, [() => PassphraseBlob, 0]],
];
export var ExportCertificateResponse$: StaticStructureSchema = [
  3,
  n0,
  _ECRx,
  0,
  [_C, _CC, _PK],
  [0, 0, [() => PrivateKey, 0]],
];
export var ExtendedKeyUsage$: StaticStructureSchema = [3, n0, _EKUx, 0, [_N, _OID], [0, 0]];
export var Filters$: StaticStructureSchema = [3, n0, _F, 0, [_eKU, _kU, _kT, _eO, _mB], [64 | 0, 64 | 0, 64 | 0, 0, 0]];
export var GetAccountConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _GACR,
  0,
  [_EE],
  [() => ExpiryEventsConfiguration$],
];
export var GetCertificateRequest$: StaticStructureSchema = [3, n0, _GCR, 0, [_CA], [0]];
export var GetCertificateResponse$: StaticStructureSchema = [3, n0, _GCRe, 0, [_C, _CC], [0, 0]];
export var HttpRedirect$: StaticStructureSchema = [3, n0, _HR, 0, [_RF, _RT], [0, 0]];
export var ImportCertificateRequest$: StaticStructureSchema = [
  3,
  n0,
  _ICR,
  0,
  [_CA, _C, _PK, _CC, _T],
  [0, 21, [() => PrivateKeyBlob, 0], 21, () => TagList],
];
export var ImportCertificateResponse$: StaticStructureSchema = [3, n0, _ICRm, 0, [_CA], [0]];
export var InvalidArgsException$: StaticErrorSchema = [-3, n0, _IAE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidArgsException$, InvalidArgsException);
export var InvalidArnException$: StaticErrorSchema = [-3, n0, _IAEn, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidArnException$, InvalidArnException);
export var InvalidDomainValidationOptionsException$: StaticErrorSchema = [-3, n0, _IDVOE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidDomainValidationOptionsException$, InvalidDomainValidationOptionsException);
export var InvalidParameterException$: StaticErrorSchema = [-3, n0, _IPE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidParameterException$, InvalidParameterException);
export var InvalidStateException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidStateException$, InvalidStateException);
export var InvalidTagException$: StaticErrorSchema = [-3, n0, _ITE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidTagException$, InvalidTagException);
export var KeyUsage$: StaticStructureSchema = [3, n0, _KUe, 0, [_N], [0]];
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var ListCertificatesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LCR,
  0,
  [_CSe, _In, _NT, _MI, _SB, _SO],
  [64 | 0, () => Filters$, 0, 1, 0, 0],
];
export var ListCertificatesResponse$: StaticStructureSchema = [
  3,
  n0,
  _LCRi,
  0,
  [_NT, _CSL],
  [0, () => CertificateSummaryList],
];
export var ListTagsForCertificateRequest$: StaticStructureSchema = [3, n0, _LTFCR, 0, [_CA], [0]];
export var ListTagsForCertificateResponse$: StaticStructureSchema = [3, n0, _LTFCRi, 0, [_T], [() => TagList]];
export var PutAccountConfigurationRequest$: StaticStructureSchema = [
  3,
  n0,
  _PACR,
  0,
  [_EE, _IT],
  [() => ExpiryEventsConfiguration$, 0],
];
export var RemoveTagsFromCertificateRequest$: StaticStructureSchema = [3, n0, _RTFCR, 0, [_CA, _T], [0, () => TagList]];
export var RenewalSummary$: StaticStructureSchema = [
  3,
  n0,
  _RS,
  0,
  [_RSe, _DVO, _RSR, _UA],
  [0, () => DomainValidationList, 0, 4],
];
export var RenewCertificateRequest$: StaticStructureSchema = [3, n0, _RCR, 0, [_CA], [0]];
export var RequestCertificateRequest$: StaticStructureSchema = [
  3,
  n0,
  _RCRe,
  0,
  [_DN, _VM, _SAN, _IT, _DVO, _O, _CAA, _T, _KA, _MB],
  [0, 0, 64 | 0, 0, () => DomainValidationOptionList, () => CertificateOptions$, 0, () => TagList, 0, 0],
];
export var RequestCertificateResponse$: StaticStructureSchema = [3, n0, _RCReq, 0, [_CA], [0]];
export var RequestInProgressException$: StaticErrorSchema = [-3, n0, _RIPE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(RequestInProgressException$, RequestInProgressException);
export var ResendValidationEmailRequest$: StaticStructureSchema = [3, n0, _RVER, 0, [_CA, _D, _VD], [0, 0, 0]];
export var ResourceInUseException$: StaticErrorSchema = [-3, n0, _RIUE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceInUseException$, ResourceInUseException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ResourceRecord$: StaticStructureSchema = [3, n0, _RRe, 0, [_N, _Ty, _V], [0, 0, 0]];
export var RevokeCertificateRequest$: StaticStructureSchema = [3, n0, _RCRev, 0, [_CA, _RR], [0, 0]];
export var RevokeCertificateResponse$: StaticStructureSchema = [3, n0, _RCRevo, 0, [_CA], [0]];
export var Tag$: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagPolicyException$: StaticErrorSchema = [-3, n0, _TPE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(TagPolicyException$, TagPolicyException);
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`Throttling`, 400] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var TooManyTagsException$: StaticErrorSchema = [-3, n0, _TMTE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(TooManyTagsException$, TooManyTagsException);
export var UpdateCertificateOptionsRequest$: StaticStructureSchema = [
  3,
  n0,
  _UCOR,
  0,
  [_CA, _O],
  [0, () => CertificateOptions$],
];
export var ValidationException$: StaticErrorSchema = [
  -3,
  n0,
  _VEa,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`ValidationError`, 400] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
var __Unit = "unit" as const;
export var ACMServiceException$: StaticErrorSchema = [-3, _s, "ACMServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(ACMServiceException$, ACMServiceException);
var CertificateStatuses = 64 | 0;
var CertificateSummaryList: StaticListSchema = [1, n0, _CSL, 0, () => CertificateSummary$];
var DomainList = 64 | 0;
var DomainValidationList: StaticListSchema = [1, n0, _DVL, 0, () => DomainValidation$];
var DomainValidationOptionList: StaticListSchema = [1, n0, _DVOL, 0, () => DomainValidationOption$];
var ExtendedKeyUsageFilterList = 64 | 0;
var ExtendedKeyUsageList: StaticListSchema = [1, n0, _EKUL, 0, () => ExtendedKeyUsage$];
var ExtendedKeyUsageNames = 64 | 0;
var InUseList = 64 | 0;
var KeyAlgorithmList = 64 | 0;
var KeyUsageFilterList = 64 | 0;
var KeyUsageList: StaticListSchema = [1, n0, _KUL, 0, () => KeyUsage$];
var KeyUsageNames = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag$];
var ValidationEmailList = 64 | 0;
export var AddTagsToCertificate$: StaticOperationSchema = [
  9,
  n0,
  _ATTC,
  0,
  () => AddTagsToCertificateRequest$,
  () => __Unit,
];
export var DeleteCertificate$: StaticOperationSchema = [9, n0, _DC, 0, () => DeleteCertificateRequest$, () => __Unit];
export var DescribeCertificate$: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  0,
  () => DescribeCertificateRequest$,
  () => DescribeCertificateResponse$,
];
export var ExportCertificate$: StaticOperationSchema = [
  9,
  n0,
  _EC,
  0,
  () => ExportCertificateRequest$,
  () => ExportCertificateResponse$,
];
export var GetAccountConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _GAC,
  0,
  () => __Unit,
  () => GetAccountConfigurationResponse$,
];
export var GetCertificate$: StaticOperationSchema = [
  9,
  n0,
  _GC,
  0,
  () => GetCertificateRequest$,
  () => GetCertificateResponse$,
];
export var ImportCertificate$: StaticOperationSchema = [
  9,
  n0,
  _IC,
  0,
  () => ImportCertificateRequest$,
  () => ImportCertificateResponse$,
];
export var ListCertificates$: StaticOperationSchema = [
  9,
  n0,
  _LC,
  0,
  () => ListCertificatesRequest$,
  () => ListCertificatesResponse$,
];
export var ListTagsForCertificate$: StaticOperationSchema = [
  9,
  n0,
  _LTFC,
  0,
  () => ListTagsForCertificateRequest$,
  () => ListTagsForCertificateResponse$,
];
export var PutAccountConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _PAC,
  0,
  () => PutAccountConfigurationRequest$,
  () => __Unit,
];
export var RemoveTagsFromCertificate$: StaticOperationSchema = [
  9,
  n0,
  _RTFC,
  0,
  () => RemoveTagsFromCertificateRequest$,
  () => __Unit,
];
export var RenewCertificate$: StaticOperationSchema = [9, n0, _RC, 0, () => RenewCertificateRequest$, () => __Unit];
export var RequestCertificate$: StaticOperationSchema = [
  9,
  n0,
  _RCe,
  0,
  () => RequestCertificateRequest$,
  () => RequestCertificateResponse$,
];
export var ResendValidationEmail$: StaticOperationSchema = [
  9,
  n0,
  _RVE,
  0,
  () => ResendValidationEmailRequest$,
  () => __Unit,
];
export var RevokeCertificate$: StaticOperationSchema = [
  9,
  n0,
  _RCev,
  0,
  () => RevokeCertificateRequest$,
  () => RevokeCertificateResponse$,
];
export var UpdateCertificateOptions$: StaticOperationSchema = [
  9,
  n0,
  _UCO,
  0,
  () => UpdateCertificateOptionsRequest$,
  () => __Unit,
];
