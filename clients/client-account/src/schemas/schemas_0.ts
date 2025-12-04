const _AC = "AlternateContact";
const _ACD = "AccountCreatedDate";
const _ACT = "AlternateContactType";
const _ADE = "AccessDeniedException";
const _AI = "AccountId";
const _AL = "AddressLine";
const _ALd = "AddressLine1";
const _ALdd = "AddressLine2";
const _ALddr = "AddressLine3";
const _AN = "AccountName";
const _APEU = "AcceptPrimaryEmailUpdate";
const _APEUR = "AcceptPrimaryEmailUpdateRequest";
const _APEURc = "AcceptPrimaryEmailUpdateResponse";
const _C = "City";
const _CC = "CountryCode";
const _CE = "ConflictException";
const _CI = "ContactInformation";
const _CIPN = "ContactInformationPhoneNumber";
const _CN = "CompanyName";
const _DAC = "DeleteAlternateContact";
const _DACR = "DeleteAlternateContactRequest";
const _DOC = "DistrictOrCounty";
const _DR = "DisableRegion";
const _DRR = "DisableRegionRequest";
const _EA = "EmailAddress";
const _ER = "EnableRegion";
const _ERR = "EnableRegionRequest";
const _FN = "FullName";
const _GAC = "GetAlternateContact";
const _GACR = "GetAlternateContactRequest";
const _GACRe = "GetAlternateContactResponse";
const _GAI = "GetAccountInformation";
const _GAIR = "GetAccountInformationRequest";
const _GAIRe = "GetAccountInformationResponse";
const _GCI = "GetContactInformation";
const _GCIR = "GetContactInformationRequest";
const _GCIRe = "GetContactInformationResponse";
const _GPE = "GetPrimaryEmail";
const _GPER = "GetPrimaryEmailRequest";
const _GPERe = "GetPrimaryEmailResponse";
const _GROS = "GetRegionOptStatus";
const _GROSR = "GetRegionOptStatusRequest";
const _GROSRe = "GetRegionOptStatusResponse";
const _ISE = "InternalServerException";
const _LR = "ListRegions";
const _LRR = "ListRegionsRequest";
const _LRRi = "ListRegionsResponse";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _O = "Otp";
const _PAC = "PutAlternateContact";
const _PACR = "PutAlternateContactRequest";
const _PAN = "PutAccountName";
const _PANR = "PutAccountNameRequest";
const _PC = "PostalCode";
const _PCI = "PutContactInformation";
const _PCIR = "PutContactInformationRequest";
const _PE = "PrimaryEmail";
const _PEA = "PrimaryEmailAddress";
const _PN = "PhoneNumber";
const _R = "Regions";
const _RN = "RegionName";
const _RNFE = "ResourceNotFoundException";
const _ROL = "RegionOptList";
const _ROS = "RegionOptStatus";
const _ROSC = "RegionOptStatusContains";
const _Re = "Region";
const _S = "Status";
const _SOR = "StateOrRegion";
const _SPEU = "StartPrimaryEmailUpdate";
const _SPEUR = "StartPrimaryEmailUpdateRequest";
const _SPEURt = "StartPrimaryEmailUpdateResponse";
const _SS = "SensitiveString";
const _T = "Title";
const _TMRE = "TooManyRequestsException";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _WU = "WebsiteUrl";
const _c = "client";
const _e = "error";
const _eT = "errorType";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _m = "message";
const _n = "name";
const _r = "reason";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.account";
const _xaE = "x-amzn-ErrorType";
const n0 = "com.amazonaws.account";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { AccountServiceException as __AccountServiceException } from "../models/AccountServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var AccountName: StaticSimpleSchema = [0, n0, _AN, 8, 0];
export var AddressLine: StaticSimpleSchema = [0, n0, _AL, 8, 0];
export var City: StaticSimpleSchema = [0, n0, _C, 8, 0];
export var CompanyName: StaticSimpleSchema = [0, n0, _CN, 8, 0];
export var ContactInformationPhoneNumber: StaticSimpleSchema = [0, n0, _CIPN, 8, 0];
export var CountryCode: StaticSimpleSchema = [0, n0, _CC, 8, 0];
export var DistrictOrCounty: StaticSimpleSchema = [0, n0, _DOC, 8, 0];
export var EmailAddress: StaticSimpleSchema = [0, n0, _EA, 8, 0];
export var FullName: StaticSimpleSchema = [0, n0, _FN, 8, 0];
export var Name: StaticSimpleSchema = [0, n0, _N, 8, 0];
export var Otp: StaticSimpleSchema = [0, n0, _O, 8, 0];
export var PhoneNumber: StaticSimpleSchema = [0, n0, _PN, 8, 0];
export var PostalCode: StaticSimpleSchema = [0, n0, _PC, 8, 0];
export var PrimaryEmailAddress: StaticSimpleSchema = [0, n0, _PEA, 8, 0];
export var SensitiveString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
export var StateOrRegion: StaticSimpleSchema = [0, n0, _SOR, 8, 0];
export var Title: StaticSimpleSchema = [0, n0, _T, 8, 0];
export var WebsiteUrl: StaticSimpleSchema = [0, n0, _WU, 8, 0];
export var AcceptPrimaryEmailUpdateRequest: StaticStructureSchema = [
  3,
  n0,
  _APEUR,
  0,
  [_AI, _PE, _O],
  [0, [() => PrimaryEmailAddress, 0], [() => Otp, 0]],
];
export var AcceptPrimaryEmailUpdateResponse: StaticStructureSchema = [3, n0, _APEURc, 0, [_S], [0]];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m, _eT],
  [0, [0, { [_hH]: _xaE }]],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var AlternateContact: StaticStructureSchema = [
  3,
  n0,
  _AC,
  0,
  [_N, _T, _EA, _PN, _ACT],
  [[() => Name, 0], [() => Title, 0], [() => EmailAddress, 0], [() => PhoneNumber, 0], 0],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m, _eT],
  [0, [0, { [_hH]: _xaE }]],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var ContactInformation: StaticStructureSchema = [
  3,
  n0,
  _CI,
  0,
  [_FN, _ALd, _ALdd, _ALddr, _C, _SOR, _DOC, _PC, _CC, _PN, _CN, _WU],
  [
    [() => FullName, 0],
    [() => AddressLine, 0],
    [() => AddressLine, 0],
    [() => AddressLine, 0],
    [() => City, 0],
    [() => StateOrRegion, 0],
    [() => DistrictOrCounty, 0],
    [() => PostalCode, 0],
    [() => CountryCode, 0],
    [() => ContactInformationPhoneNumber, 0],
    [() => CompanyName, 0],
    [() => WebsiteUrl, 0],
  ],
];
export var DeleteAlternateContactRequest: StaticStructureSchema = [3, n0, _DACR, 0, [_ACT, _AI], [0, 0]];
export var DisableRegionRequest: StaticStructureSchema = [3, n0, _DRR, 0, [_AI, _RN], [0, 0]];
export var EnableRegionRequest: StaticStructureSchema = [3, n0, _ERR, 0, [_AI, _RN], [0, 0]];
export var GetAccountInformationRequest: StaticStructureSchema = [3, n0, _GAIR, 0, [_AI], [0]];
export var GetAccountInformationResponse: StaticStructureSchema = [
  3,
  n0,
  _GAIRe,
  0,
  [_AI, _AN, _ACD],
  [0, [() => AccountName, 0], 5],
];
export var GetAlternateContactRequest: StaticStructureSchema = [3, n0, _GACR, 0, [_ACT, _AI], [0, 0]];
export var GetAlternateContactResponse: StaticStructureSchema = [
  3,
  n0,
  _GACRe,
  0,
  [_AC],
  [[() => AlternateContact, 0]],
];
export var GetContactInformationRequest: StaticStructureSchema = [3, n0, _GCIR, 0, [_AI], [0]];
export var GetContactInformationResponse: StaticStructureSchema = [
  3,
  n0,
  _GCIRe,
  0,
  [_CI],
  [[() => ContactInformation, 0]],
];
export var GetPrimaryEmailRequest: StaticStructureSchema = [3, n0, _GPER, 0, [_AI], [0]];
export var GetPrimaryEmailResponse: StaticStructureSchema = [3, n0, _GPERe, 0, [_PE], [[() => PrimaryEmailAddress, 0]]];
export var GetRegionOptStatusRequest: StaticStructureSchema = [3, n0, _GROSR, 0, [_AI, _RN], [0, 0]];
export var GetRegionOptStatusResponse: StaticStructureSchema = [3, n0, _GROSRe, 0, [_RN, _ROS], [0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_m, _eT],
  [0, [0, { [_hH]: _xaE }]],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListRegionsRequest: StaticStructureSchema = [3, n0, _LRR, 0, [_AI, _MR, _NT, _ROSC], [0, 1, 0, 64 | 0]];
export var ListRegionsResponse: StaticStructureSchema = [3, n0, _LRRi, 0, [_NT, _R], [0, () => RegionOptList]];
export var PutAccountNameRequest: StaticStructureSchema = [3, n0, _PANR, 0, [_AN, _AI], [[() => AccountName, 0], 0]];
export var PutAlternateContactRequest: StaticStructureSchema = [
  3,
  n0,
  _PACR,
  0,
  [_N, _T, _EA, _PN, _ACT, _AI],
  [[() => Name, 0], [() => Title, 0], [() => EmailAddress, 0], [() => PhoneNumber, 0], 0, 0],
];
export var PutContactInformationRequest: StaticStructureSchema = [
  3,
  n0,
  _PCIR,
  0,
  [_CI, _AI],
  [[() => ContactInformation, 0], 0],
];
export var Region: StaticStructureSchema = [3, n0, _Re, 0, [_RN, _ROS], [0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _eT],
  [0, [0, { [_hH]: _xaE }]],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var StartPrimaryEmailUpdateRequest: StaticStructureSchema = [
  3,
  n0,
  _SPEUR,
  0,
  [_AI, _PE],
  [0, [() => PrimaryEmailAddress, 0]],
];
export var StartPrimaryEmailUpdateResponse: StaticStructureSchema = [3, n0, _SPEURt, 0, [_S], [0]];
export var TooManyRequestsException: StaticErrorSchema = [
  -3,
  n0,
  _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _eT],
  [0, [0, { [_hH]: _xaE }]],
];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [[() => SensitiveString, 0], 0, [() => ValidationExceptionFieldList, 0]],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [
  3,
  n0,
  _VEF,
  0,
  [_n, _m],
  [0, [() => SensitiveString, 0]],
];
export var __Unit = "unit" as const;
export var AccountServiceException: StaticErrorSchema = [-3, _sm, "AccountServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(AccountServiceException, __AccountServiceException);
export var RegionOptList: StaticListSchema = [1, n0, _ROL, 0, () => Region];
export var RegionOptStatusList = 64 | 0;
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, [() => ValidationExceptionField, 0]];
export var AcceptPrimaryEmailUpdate: StaticOperationSchema = [
  9,
  n0,
  _APEU,
  { [_h]: ["POST", "/acceptPrimaryEmailUpdate", 200] },
  () => AcceptPrimaryEmailUpdateRequest,
  () => AcceptPrimaryEmailUpdateResponse,
];
export var DeleteAlternateContact: StaticOperationSchema = [
  9,
  n0,
  _DAC,
  { [_h]: ["POST", "/deleteAlternateContact", 200] },
  () => DeleteAlternateContactRequest,
  () => __Unit,
];
export var DisableRegion: StaticOperationSchema = [
  9,
  n0,
  _DR,
  { [_h]: ["POST", "/disableRegion", 200] },
  () => DisableRegionRequest,
  () => __Unit,
];
export var EnableRegion: StaticOperationSchema = [
  9,
  n0,
  _ER,
  { [_h]: ["POST", "/enableRegion", 200] },
  () => EnableRegionRequest,
  () => __Unit,
];
export var GetAccountInformation: StaticOperationSchema = [
  9,
  n0,
  _GAI,
  { [_h]: ["POST", "/getAccountInformation", 200] },
  () => GetAccountInformationRequest,
  () => GetAccountInformationResponse,
];
export var GetAlternateContact: StaticOperationSchema = [
  9,
  n0,
  _GAC,
  { [_h]: ["POST", "/getAlternateContact", 200] },
  () => GetAlternateContactRequest,
  () => GetAlternateContactResponse,
];
export var GetContactInformation: StaticOperationSchema = [
  9,
  n0,
  _GCI,
  { [_h]: ["POST", "/getContactInformation", 200] },
  () => GetContactInformationRequest,
  () => GetContactInformationResponse,
];
export var GetPrimaryEmail: StaticOperationSchema = [
  9,
  n0,
  _GPE,
  { [_h]: ["POST", "/getPrimaryEmail", 200] },
  () => GetPrimaryEmailRequest,
  () => GetPrimaryEmailResponse,
];
export var GetRegionOptStatus: StaticOperationSchema = [
  9,
  n0,
  _GROS,
  { [_h]: ["POST", "/getRegionOptStatus", 200] },
  () => GetRegionOptStatusRequest,
  () => GetRegionOptStatusResponse,
];
export var ListRegions: StaticOperationSchema = [
  9,
  n0,
  _LR,
  { [_h]: ["POST", "/listRegions", 200] },
  () => ListRegionsRequest,
  () => ListRegionsResponse,
];
export var PutAccountName: StaticOperationSchema = [
  9,
  n0,
  _PAN,
  { [_h]: ["POST", "/putAccountName", 200] },
  () => PutAccountNameRequest,
  () => __Unit,
];
export var PutAlternateContact: StaticOperationSchema = [
  9,
  n0,
  _PAC,
  { [_h]: ["POST", "/putAlternateContact", 200] },
  () => PutAlternateContactRequest,
  () => __Unit,
];
export var PutContactInformation: StaticOperationSchema = [
  9,
  n0,
  _PCI,
  { [_h]: ["POST", "/putContactInformation", 200] },
  () => PutContactInformationRequest,
  () => __Unit,
];
export var StartPrimaryEmailUpdate: StaticOperationSchema = [
  9,
  n0,
  _SPEU,
  { [_h]: ["POST", "/startPrimaryEmailUpdate", 200] },
  () => StartPrimaryEmailUpdateRequest,
  () => StartPrimaryEmailUpdateResponse,
];
